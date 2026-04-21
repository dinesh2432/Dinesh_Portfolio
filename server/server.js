import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import portfolioRoutes from './routes/portfolioRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import errorHandler from './middleware/errorHandler.js';

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// connectDB();

// const allowedOrigins = [
//   'http://localhost:5173', 
//   'https://dinesh-portfolio-web.vercel.app'
// ];
// if (process.env.CLIENT_URL) allowedOrigins.push(process.env.CLIENT_URL);

// app.use(cors({ origin: allowedOrigins, credentials: true }));
// app.use(express.json());

// app.use('/api/portfolio', portfolioRoutes);
// app.use('/api/contact', contactRoutes);

// app.get('/api/health', (req, res) => res.json({ status: 'ok', timestamp: new Date().toISOString() }));

// app.use(errorHandler);

// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  'http://localhost:5173',
  'https://dinesh-portfolio-web.vercel.app',
];
if (process.env.CLIENT_URL) allowedOrigins.push(process.env.CLIENT_URL);

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`CORS blocked: ${origin}`));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.options('(.*)', cors(corsOptions));
app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/portfolio', portfolioRoutes);
app.use('/api/contact', contactRoutes);
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));
app.use(errorHandler);

// ← listen first, then connect DB
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  connectDB();
});