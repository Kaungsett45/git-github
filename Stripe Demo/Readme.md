# Stripe Customer & Payment Demo

A simple Node.js Express server demonstrating Stripe API integration for customer management and payment processing.

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create environment file:**
   ```bash
   cp .env.example .env
   ```

3. **Add your Stripe secret key to `.env`:**
   ```
   STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here
   PORT=5000
   ```
   Get your key from [Stripe Dashboard](https://dashboard.stripe.com/test/apikeys)

## Run Server

```bash
npm start
# or for development
npm run dev
```


## Test with Postman

1. Start the server: `npm start`
2. Import the endpoints above into Postman
3. Set `Content-Type: application/json` header for POST requests
4. Use the JSON bodies provided above


