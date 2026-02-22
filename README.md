# 🐾 Happy Tails Shelter -- Backend

Happy Tails Shelter is an Animal Shelter Foster Management system
designed to reduce operational expenses by improving inventory tracking
and supporting cost-efficient decision making.

This backend provides the API layer built with:

-   Node.js
-   Express 5
-   TypeScript
-   Prisma 7
-   PostgreSQL (Supabase)

------------------------------------------------------------------------

## 👥 Team Leads

-   David Kea\
-   Johan Gilces

## 👥 Team Members

-   Hisham Nabi\
-   Claudia V. Dominguez\
-   Kasandra Wolf\
-   Jim Liriano\
-   JJ SchraderBachar

------------------------------------------------------------------------

# 🚀 Getting Started (Backend)

## 1️⃣ Clone the repository

``` bash
git clone https://github.com/therealdeek/happytailsshelter_backend.git
cd happytailsshelter_backend
```

------------------------------------------------------------------------

## 2️⃣ Install dependencies

``` bash
npm install
```

------------------------------------------------------------------------

## 3️⃣ Create the `.env` file

You must create a `.env` file in the root of the backend project. (Find it on our share google doc)

Example:

``` env
DATABASE_URL=postgresql://YOUR_USER:YOUR_PASSWORD@aws-1-us-east-1.pooler.supabase.com:5432/postgres?sslmode=require
PORT=3000
```

⚠️ The project will NOT run without this file.

------------------------------------------------------------------------

## 4️⃣ Generate Prisma Client

After installing dependencies and creating the `.env` file, run:

``` bash
npx prisma generate
```

This step is required to generate the Prisma Client locally.

If you skip this step, you will get:

    SyntaxError: The requested module '@prisma/client' does not provide an export named 'PrismaClient'

------------------------------------------------------------------------

## 5️⃣ Run the development server

``` bash
npm run dev
```

The backend will run at:

http://localhost:3000

------------------------------------------------------------------------

# 🔄 If You Make Database Changes

If the database schema changes in Supabase, run:

``` bash
npx prisma db pull
npx prisma generate
```

This keeps the Prisma schema and client in sync with the database.

------------------------------------------------------------------------

# 📌 Important Notes

-   Do NOT modify `schema.prisma` manually if using `prisma db pull`.
-   Always regenerate Prisma after pulling schema changes.
-   Follow the standard architecture:
    -   Routes → Controllers → Services → Prisma
-   All API responses follow this format:

``` json
{
  "success": true,
  "message": "Description",
  "data": {}
}
```

Errors follow:

``` json
{
  "success": false,
  "message": "Error message"
}
```
