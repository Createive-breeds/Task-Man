Here’s an updated `README.md` template based on your project structure and requirements:

---

# TaskMan

This is a **Next.js** project that utilizes **Prisma** as the ORM along side postgreSQL and **next/font** for managing fonts.

## Getting Started

To set up and run this project locally, follow the steps below:

### 1. Clone the Repository

```bash
git clone https://github.com/Createive-breeds/Task-Man.git
cd <repository-folder>
```

### 2. Create the `.env` File

Copy the contents of the provided `.env.example` file to a new `.env` file. You can use the following command:

```bash
cp .env.example .env
```

Edit the `.env` file with the appropriate values for your local environment.

### 3. Install Dependencies

Run the following command to install all required dependencies:

```bash
npm install
```

### 4. Set Up Prisma

1. Generate Prisma Client:
   ```bash
   npx prisma generate
   ```
2. (Optional) Apply Database Migrations:
   If you need to apply existing migrations to your database, run:

   ```bash
   npx prisma migrate dev
   ```

   **Note:** Ensure your database connection is correctly configured in the `.env` file before running migrations.

### 5. Run the Development Server

Start the development server using:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

---

## Project Structure

Below is the project structure for reference:

```
.
├── .next/               # Compiled build output (auto-generated)
├── .vscode/             # VSCode settings (if applicable)
├── node_modules/        # Installed dependencies (auto-generated)
├── prisma/              # Prisma configuration
│   ├── migrations/      # Database migration files
│   └── schema.prisma    # Prisma schema
├── src/
│   ├── app/             # Next.js app directory
│   │   ├── (auth)/      # Authentication-related routes
│   │   ├── api/         # API endpoints
│   │   ├── dashboard/   # Dashboard pages
│   │   ├── fonts/       # Custom fonts
│   │   ├── notification/ # Notification-related pages
│   │   ├── survey/      # Survey-related pages
│   │   ├── withdrawal/  # Withdrawal-related pages
│   │   ├── globals.css  # Global styles
│   │   ├── layout.tsx   # Layout component
│   │   └── page.tsx     # Main page
│   ├── components/      # Reusable components
│   └── lib/             # Utility functions and libraries
├── .env                 # Environment variables
├── .env.example         # Environment variable template
├── .eslintrc.json       # ESLint configuration
├── .gitignore           # Git ignore rules
├── .prettierrc          # Prettier configuration
├── next.config.mjs      # Next.js configuration
├── package.json         # Project metadata and dependencies
├── postcss.config.mjs   # PostCSS configuration
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── README.md            # Project documentation
```

---

## Features

- **Next.js** for server-side rendering and React-based development.
- **Prisma** as the database ORM.
- **next/font** for custom font management.
- **Tailwind CSS** for styling.

---
