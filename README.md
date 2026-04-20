# Dinesh K — Portfolio Website

A production-ready MERN stack portfolio built with React (Vite) + Tailwind CSS on the frontend and Express + MongoDB on the backend.

## Stack

| Layer | Tech |
|---|---|
| Frontend | React 18 (Vite), Tailwind CSS v3, Framer Motion |
| Backend | Node.js, Express.js |
| Database | MongoDB (Atlas) |
| Icons | Lucide React + custom SVGs |

---

## Project Structure

```
Project6_(Portfolio)/
├── client/          # React + Vite frontend
└── server/          # Express backend
```

---

## Setup Instructions

### 1. Clone & Install

```bash
# Install server deps
cd server
npm install

# Install client deps
cd ../client
npm install
```

### 2. Configure Environment Variables

**`server/.env`**
```env
PORT=5000
MONGODB_URI=mongodb+srv://<user>:<password>@cluster0.mongodb.net/portfolio?retryWrites=true&w=majority
CLIENT_URL=http://localhost:5173
```

**`client/.env`**
```env
VITE_API_URL=http://localhost:5000
```

### 3. Run Development Servers

Open two terminal windows:

**Terminal 1 — Backend:**
```bash
cd server
npm run dev
```

**Terminal 2 — Frontend:**
```bash
cd client
npm run dev
```

Frontend: http://localhost:5173  
Backend API: http://localhost:5000

---

## API Endpoints

| Method | Route | Description |
|---|---|---|
| `GET` | `/api/portfolio` | Returns all portfolio data as JSON |
| `POST` | `/api/contact` | Saves a contact message to MongoDB |
| `GET` | `/api/contact` | Lists all contact messages (dev only) |
| `GET` | `/api/health` | Health check |

---

## Features

- **Dark/Light Mode** — persisted in localStorage
- **7 Sections** — About, Skills, Experience, Projects, Achievements, Education, Contact
- **Framer Motion** — scroll-triggered animations, hover springs, entrance reveals
- **Contact Form** — connected to Express API, saves to MongoDB
- **Asymmetric Layout** — deliberate non-uniform spacing across sections
- **Fully Responsive** — mobile-first, tested at 375 / 768 / 1280px

---

## Deployment

- **Frontend**: Deploy `/client` to Vercel
- **Backend**: Deploy `/server` to Render
- Update `CLIENT_URL` in server `.env` to your Vercel domain
- Update `VITE_API_URL` in client `.env` to your Render domain
