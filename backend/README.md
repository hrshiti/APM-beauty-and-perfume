# APM Beauty and Perfume - Backend API

Backend API for the APM Beauty and Perfume e-commerce platform built with Node.js, Express, and MongoDB.

## 📁 Project Structure

```
backend/
├── config/
│   └── db.js                 # MongoDB connection configuration
├── controller/
│   └── userController.js     # User CRUD operations
├── middleware/
│   ├── auth.js              # JWT authentication middleware
│   └── errorHandler.js      # Global error handler
├── model/
│   └── User.js              # User Mongoose model
├── routes/
│   └── userRoutes.js        # User API routes
├── utils/
│   └── generateToken.js     # JWT token generator
├── .env.example            # Environment variables template
├── .gitignore              # Git ignore file
├── package.json            # Project dependencies
├── server.js               # Express server entry point
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Then edit `.env` and update the following:
   - `MONGODB_URI` - Your MongoDB connection string
   - `JWT_SECRET` - A secret key for JWT tokens
   - `PORT` - Server port (default: 5000)
   - `CORS_ORIGIN` - Frontend URL for CORS

3. **Start the server**
   ```bash
   # Development mode (with nodemon)
   npm run dev
   
   # Production mode
   npm start
   ```

## 📚 API Endpoints

### Authentication

- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Login user

### User Management

- `GET /api/users/me` - Get current user (Protected)
- `GET /api/users` - Get all users (Admin only)
- `GET /api/users/:id` - Get user by ID (Admin only)
- `PUT /api/users/:id` - Update user (Protected)
- `DELETE /api/users/:id` - Delete user (Admin only)

### Address Management

- `POST /api/users/:id/addresses` - Add address (Protected)
- `PUT /api/users/:id/addresses/:addressId` - Update address (Protected)
- `DELETE /api/users/:id/addresses/:addressId` - Delete address (Protected)

## 🔐 Authentication

All protected routes require a JWT token in the Authorization header:

```
Authorization: Bearer <token>
```

## 📝 Example API Requests

### Register User
```bash
POST /api/users/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "phone": "+91 98765 43210"
}
```

### Login
```bash
POST /api/users/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

### Get Current User
```bash
GET /api/users/me
Authorization: Bearer <token>
```

### Add Address
```bash
POST /api/users/:userId/addresses
Authorization: Bearer <token>
Content-Type: application/json

{
  "type": "home",
  "name": "John Doe",
  "phone": "+91 98765 43210",
  "address": "123 Main Street",
  "city": "Mumbai",
  "state": "Maharashtra",
  "pincode": "400001",
  "isDefault": true
}
```

## 🛠️ Technologies Used

- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

## 📦 Dependencies

### Production
- express
- mongoose
- cors
- dotenv
- bcryptjs
- jsonwebtoken

### Development
- nodemon

## 🔒 Security Features

- Password hashing with bcrypt
- JWT token authentication
- Protected routes with middleware
- Role-based access control (Admin/User)
- Input validation
- Error handling

## 📄 License

ISC

