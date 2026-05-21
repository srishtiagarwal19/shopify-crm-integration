# Shopify CRM Integration

## Overview
This project integrates Shopify with a CRM backend using Node.js, Express, PostgreSQL, and Prisma.

## Features
- Shopify OAuth Authentication
- Access token storage
- Product sync architecture
- Customer sync workflow
- Webhook-ready structure
- Error handling
- Retry logic
- CRM workflow design

## Tech Stack
- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- Shopify Admin API

## Setup

### Install Dependencies
npm install

### Run Project
npm run dev

## Environment Variables

PORT=3000

DATABASE_URL=postgresql://postgres:password@localhost:5432/shopifycrm

SHOPIFY_API_KEY=your_api_key

SHOPIFY_API_SECRET=your_secret

SHOPIFY_REDIRECT_URI=http://localhost:3000/shopify/callback

## OAuth Flow
1. Merchant installs app
2. Shopify redirects to callback
3. Access token generated
4. Token stored in PostgreSQL
5. APIs accessed securely

## Future Improvements
- Queue workers
- Webhook automation
- Abandoned cart recovery
- Marketing automation
- AI customer segmentation