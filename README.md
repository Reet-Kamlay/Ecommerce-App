# 🛒 Ecommerce-App – Full Stack MERN E-commerce Platform

This project is a **full-featured ecommerce web application** built using the **MERN Stack** (MongoDB, Express, React, Node.js). It includes:

- 🧑‍💻 A **user-facing frontend** with product browsing, shopping cart, and checkout
- 🔐 **User authentication** using JWT
- ⚙️ A complete **backend API** with product, order, and user management
- 🛠️ A **secure admin dashboard** for managing users, orders, and products

---

## 🌍 Live Deployments

| Interface      | Link                                                                 |
|----------------|----------------------------------------------------------------------|
| 🛒 Frontend     | [https://forever-frontend-orcin.vercel.app](https://forever-frontend-orcin.vercel.app) |
| 🧑‍💼 Admin Panel | [https://forever-admin-ten-gamma.vercel.app](https://forever-admin-ten-gamma.vercel.app) |

---

## 🧰 Tech Stack

- **Frontend:** React, React Router DOM, Context API, Axios, CSS
- **Backend:** Node.js, Express.js, MongoDB (Mongoose)
- **Authentication:** JWT with HTTP-only cookies
- **Admin:** React-based admin dashboard
- **Deployment:** Vercel (frontend/admin) & Render/Heroku (backend)

---

## 📦 Major Features (Implemented)

### ✅ User Features

- 🔎 Browse products on the homepage
- 📦 View product details on individual product pages
- 🛒 Add/remove products from shopping cart
- 👤 User registration & login (with JWT)
- 🔐 Access protected routes (e.g., placing orders)
- 🧾 View personal order history
- 💡 Simple and responsive UI

### ✅ Admin Panel Features

- 🔐 Admin-only login with protected routes
- 🗂️ Manage product list (Create, Edit, Delete)
- 🛍️ Manage customer orders (view status, update status)
- 👥 Manage users (view registered customers)

---

## 🧾 Folder Structure

```
Ecommerce-App/
├── frontend/               # Public-facing React UI
│   ├── src/
│   │   ├── components/     # Navbar, ProductList, Cart, etc.
│   │   ├── pages/          # HomePage, ProductPage, CartPage, etc.
│   │   ├── context/        # CartContext & user context
│   │   └── App.js          # Frontend routing logic
│   └── package.json
│
├── backend/                # Node.js + Express REST API
│   ├── models/             # Mongoose schemas (User, Product, Order)
│   ├── routes/             # API routes: /api/users, /api/products, /api/orders
│   ├── controllers/        # Logic for user/product/order routes
│   ├── middleware/         # Auth middleware, error handling
│   ├── config/             # DB connection (MONGO_URI, dotenv)
│   └── server.js           # Main server entry point
│
├── admin/                  # React Admin Dashboard
│   ├── src/
│   │   ├── pages/          # Orders, Products, Users, Dashboard
│   │   └── App.js          # Admin routes
│   └── package.json
└── README.md
```

---

## 🔐 Authentication & Security

- JWT token is stored in **HTTP-only cookies** for security.
- Auth middleware (`authMiddleware.js`) protects user/admin routes.
- Users and Admins have separate roles managed via `isAdmin` field.

---

## 🌐 API Endpoints Overview

### 🔗 **Auth Routes**
| Method | Endpoint           | Description           |
|--------|--------------------|-----------------------|
| POST   | `/api/users/register` | Register new user     |
| POST   | `/api/users/login`    | User login            |
| GET    | `/api/users/profile`  | Get logged-in user    |

### 📦 **Product Routes**
| Method | Endpoint           | Description              |
|--------|--------------------|--------------------------|
| GET    | `/api/products`    | Get all products         |
| GET    | `/api/products/:id`| Get single product detail|
| POST   | `/api/products`    | Add new product *(admin)*|
| PUT    | `/api/products/:id`| Edit product *(admin)*   |
| DELETE | `/api/products/:id`| Delete product *(admin)* |

### 📑 **Order Routes**
| Method | Endpoint             | Description                  |
|--------|----------------------|------------------------------|
| POST   | `/api/orders`        | Create new order             |
| GET    | `/api/orders/my`     | Get current user's orders    |
| GET    | `/api/orders`        | Get all orders *(admin)*     |
| PUT    | `/api/orders/:id`    | Update order status *(admin)*|

---

## 🚀 Getting Started (Local Setup)

### 1. Clone the repo

```bash
git clone https://github.com/Reet-Kamlay/Ecommerce-App.git
cd Ecommerce-App
```

---

### 2. Setup Backend

```bash
cd backend
npm install
```

Create `.env`:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
```

Run backend:

```bash
npm run server
```

---

### 3. Setup Frontend

```bash
cd ../frontend
npm install
npm start
```

---

### 4. Setup Admin Panel

```bash
cd ../admin
npm install
npm start
```

---

## 🎯 Future Improvements (Optional)

- 🧾 Invoice download or PDF receipts
- 💳 Stripe/PayPal integration
- ✉️ Email notifications (e.g., order confirmation)
- 📦 Pagination and search for product catalog
- 🗄️ File uploads with image previews

---

## 👨‍💻 Author

**Reet Kamlay**  
🔗 GitHub: [@Reet-Kamlay](https://github.com/Reet-Kamlay)  

---

> This full-stack MERN project is built from scratch to understand and practice real-world e-commerce functionality, both from a user and admin perspective. Feel free to fork, clone, and enhance it for your own use.

