# Shopify CRM Integration – HelloGrowthCRM

## Overview

This project demonstrates a scalable Shopify CRM integration architecture for HelloGrowthCRM using modern backend technologies.

The integration enables synchronization of Shopify store data including:
- Customers
- Orders
- Products
- Payments
- Refunds
- Abandoned carts

The system also supports:
- OAuth authentication
- Webhooks
- Retry handling
- CRM automation workflows
- Secure API integration

---

# Tech Stack

- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- Shopify Admin API
- Shopify OAuth 2.0

---

# Features

## Shopify OAuth Authentication
- Secure Shopify store connection
- Access token generation
- OAuth callback handling

## Customer Synchronization
- Sync Shopify customers into CRM contacts
- Prevent duplicate records

## Product Synchronization
- Product and inventory syncing

## Order Synchronization
- Order tracking
- Revenue monitoring
- Pipeline integration

## Abandoned Cart Tracking
- Recovery workflow architecture

## Refund Tracking
- Refund synchronization planning

## Webhook Architecture
- Real-time updates
- Event-based automation

## Retry & Error Handling
- Queue-ready retry design
- API failure handling

---

# Project Structure

```txt
shopify-crm
├── prisma
├── src
│   ├── config
│   ├── middleware
│   ├── routes
│   ├── services
│   ├── webhooks
│   ├── utils
│   └── index.js
├── docs
├── README.md
├── package.json
└── .env
