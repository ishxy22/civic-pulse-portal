## Civic Pulse - Monorepo (Backend + Frontend)

A full-stack TypeScript project with an Express + MongoDB backend and a Vite + React (shadcn/ui, Tailwind) frontend.

### Prerequisites
- Node.js 18+ and npm
- A running MongoDB instance (local or Atlas)

### Repository Structure
- `backend/` Express API (TypeScript, Mongoose)
- `frontend/` Vite React app (TypeScript)

### Quick Start (Development)
Open two terminals in the project root.

1) Backend
```bash
cd backend
npm install

# Create .env
echo MONGODB_URI="mongodb://localhost:27017/civic_pulse" > .env
echo PORT=4000 >> .env

npm run dev
# Server on http://localhost:4000
# Health: http://localhost:4000/api/health
```

2) Frontend
```bash
cd frontend
npm install

# Optional during dev: Vite proxy forwards /api -> http://localhost:4000
# If you want to override, create .env and set VITE_API_BASE_URL

npm run dev
# App on http://localhost:8080
```

Notes:
- During development, frontend requests use `'/api'` which Vite proxies to the backend at `http://localhost:4000` (see `frontend/vite.config.ts`).
- The backend requires `MONGODB_URI` to start.

### Environment Variables
- Backend (`backend/.env`)
  - `MONGODB_URI` (required): MongoDB connection string
  - `PORT` (optional, default 4000): API port
- Frontend (`frontend/.env`)
  - `VITE_API_BASE_URL` (optional in dev): e.g. `https://your-domain.com/api` when building for production

### Useful Scripts
- Backend
  - `npm run dev` — start TS server with live reload
  - `npm run build` — compile to `dist/`
  - `npm start` — run compiled server
- Frontend
  - `npm run dev` — start Vite dev server
  - `npm run build` — production build to `dist/`
  - `npm run preview` — preview the built app locally

### Production Builds
1) Backend
```bash
cd backend
npm install
npm run build
npm start
```
2) Frontend
```bash
cd frontend
# Ensure .env has VITE_API_BASE_URL pointing to your deployed API
npm install
npm run build
npm run preview  # or serve the dist/ folder via your web server
```

### Troubleshooting
- MongoDB connection error: Ensure `MONGODB_URI` is set and MongoDB is reachable.
- Port already in use: Change `PORT` in `backend/.env`; the frontend dev server runs on 8080 by default (see `frontend/vite.config.ts`).
- API requests fail in production: Set `VITE_API_BASE_URL` to your live API base, e.g. `https://api.example.com/api`.

### API Overview (high-level)
- Base path: `/api`
- Routes: `/auth`, `/issues`, `/users`, `/analytics`, and `/health`

### License
MIT


