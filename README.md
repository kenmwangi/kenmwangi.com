# Personal Portfolio Monorepo

This is a **Turbo monorepo** setup for a **personal portfolio**, featuring:

- **Backend:** [NestJS](https://nestjs.com/)
- **Frontend:** [Next.js](https://nextjs.org/)
- **Package Management:** [Turborepo](https://turbo.build/)

## 📂 Project Structure

```
📦 my-portfolio-monorepo
├── apps
│   ├── nextjs-frontend  # Next.js application
│   ├── nestjs-backend   # NestJS backend
│
├── packages
│   ├── ui               # Shared UI components
│   ├── types            # Shared TypeScript types
│   ├── eslint-config    # Shared ESLint configuration
│   ├── tsconfig         # Shared TypeScript configuration
│
├── .github              # CI/CD workflows
├── package.json
├── turbo.json           # Turborepo configuration
└── README.md
```

## 🚀 Getting Started

### 1️⃣ Install Dependencies

Ensure you have **Node.js (>=18)** and **npm** installed.

```sh
npm install
```

### 2️⃣ Start Development Server

```sh
npm run dev  # Starts both frontend & backend
```

- **Frontend** runs on `http://localhost:3000`
- **Backend** runs on `http://localhost:5000`

You can also run them separately:

```sh
npm run dev --workspace=nextjs-frontend
npm run dev --workspace=nestjs-backend
```

## 🛠️ Scripts

| Command          | Description                        |
| ---------------- | ---------------------------------- |
| `npm run dev`    | Run frontend & backend in parallel |
| `npm run build`  | Build all applications             |
| `npm run lint`   | Run linting across the monorepo    |
| `npm run format` | Format code using Prettier         |
| `npm run test`   | Run tests across the monorepo      |

## 🔧 Environment Variables

Create `.env` files inside `apps/nextjs-frontend` and `apps/nestjs-backend`.

**Frontend (**``**)**:

```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

**Backend (**``**)**:

```
PORT=5000
DATABASE_URL=your_database_url_here
JWT_SECRET=your_secret_key
```

## 📦 Deployment

### 🚀 Vercel (Frontend)

```sh
vercel --prod
```

### 🚀 Docker (Backend)

```sh
docker build -t nestjs-backend .
docker run -p 5000:5000 nestjs-backend
```

## 🌟 Features

- 🚀 **Turbo Monorepo**: Optimized package management.
- 🔥 **NestJS + Next.js**: Full-stack development.
- ⚡ **TypeScript Support**.
- 🏗 **Modular Architecture**: Shared UI, types, and configs.
- ✅ **ESLint & Prettier**: Code quality ensured.

## 👤 Author

**[Ken Mwangi]** – [Ken Mwangi](https://kenmwangi.com)\
📧 Contact: [hello@kenmwangi.com](mailto:hello@kenmwangi.com)

## ⭐️ Show Your Support

If you like this project, consider giving it a ⭐️ on [GitHub](https://github.com/kenmwangi.com)! 🎉
