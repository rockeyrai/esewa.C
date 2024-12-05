const axios = require('axios');
const User = require('../modules/user');

// Redirect User to eSewa Payment
const initiatePayment = async (req, res) => {
  const { userId, amount } = req.body;

  // Find user details
  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ message: 'User not found' });

  // eSewa parameters
  const esewaParams = {
    amt: amount,
    psc: 0,
    pdc: 0,
    txAmt: 0,
    tAmt: amount, // Total amount
    pid: `${Date.now()}`, // Unique transaction ID
    scd: process.env.ESEWA_MERCHANT_ID,
    su: `${process.env.RETURN_URL}?transactionId=${Date.now()}`,
    fu: process.env.CANCEL_URL,
  };

  // Save transaction details (Pending state)
  user.paymentHistory.push({
    transactionId: esewaParams.pid,
    amount: amount,
    status: 'Pending',
  });
  await user.save();

  // Redirect to eSewa payment URL
  const paymentURL = `${process.env.ESEWA_PAYMENT_URL}?${new URLSearchParams(
    esewaParams
  ).toString()}`;
  res.redirect(paymentURL);
};

// Handle Success Callback from eSewa
const verifyPayment = async (req, res) => {
  const { transactionId, amt, refId } = req.query;

  try {
    // Verify payment with eSewat
    const verifyParams = {
      amt,
      rid: refId,
      pid: transactionId,
      scd: process.env.ESEWA_MERCHANT_ID,
    };

    const response = await axios.post(
      process.env.ESEWA_VERIFY_URL,
      new URLSearchParams(verifyParams).toString()
    );

    if (response.data.includes('<response_code>Success</response_code>')) {
      // Update payment status to 'Success'
      await User.updateOne(
        { 'paymentHistory.transactionId': transactionId },
        {
          $set: {
            'paymentHistory.$.status': 'Success',
          },
        }
      );
      res.json({ message: 'Payment verified successfully' });
    } else {
      res.json({ message: 'Payment verification failed' });
    }
  } catch (error) {
    console.error('Payment verification error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { initiatePayment, verifyPayment };
