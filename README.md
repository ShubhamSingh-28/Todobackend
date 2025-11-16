# Backend Server

This is the backend server for the application, built using **Node.js**, **Express**, and **MongoDB** with **TypeScript**.

## Features

- User authentication with **JWT**
- Password hashing with **bcryptjs**
- Data validation with **Zod**
- CORS enabled for cross-origin requests
- Environment-based configuration using **dotenv**
- REST API endpoints
- MongoDB integration using **Mongoose**

## Requirements

- Node.js v18 or higher
- npm or yarn
- MongoDB instance (local or cloud)

## Installation

1. Clone the repository:

```bash
npm install
# or
yarn

PORT=4000
MONGO_URI=<your_mongodb_uri>
JWT_SECRET=<your_jwt_secret>
RESET_PASSWORD_TOKEN_EXPIRY_MINUTES=
JWT_EXPIRES_IN=
CLIENT_URL=
git clone <repository-url>
cd server
