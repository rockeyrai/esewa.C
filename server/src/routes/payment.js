const express = require('express');
const { initiatePayment, verifyPayment } = require('../controllers/paymentController');
const router = express.Router();

router.post('/initiate', initiatePayment); // For initiating the payment
router.get('/verify', verifyPayment); // For verifying the payment

module.exports = router;
