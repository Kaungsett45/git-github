require('dotenv').config();
const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(express.json());

app.post('/customer', async (req, res) => {
  try {
    const { email, name } = req.body;
    
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }
    
    const customer = await stripe.customers.create({
      email,
      name,
    });
    
    console.log('Customer created:', customer.id);
    res.json(customer);
  } catch (error) {
    console.error('Customer error:', error.message);
    res.status(500).json({ error: error.message });
  }
});

app.post('/payment', async (req, res) => {
  try {
    const { amount = 5000, currency = 'usd' } = req.body;
    
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      payment_method_types: ['card'],
      confirm: true,
      payment_method: 'pm_card_visa', // Test payment method
      return_url: 'http://localhost:3000/return',
    });
    
    console.log('Payment created:', paymentIntent.id);
    res.json(paymentIntent);
  } catch (error) {
    console.error('Payment error:', error.message);
    res.status(500).json({ error: error.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Stripe server running on port ${PORT}`);
  console.log(`POST http://localhost:${PORT}/customer`);
  console.log(`POST http://localhost:${PORT}/payment`);
});