# HMCTS Task Manager Challenge

A simple task management system built for the HMCTS developer challenge. It allows users to create, view, update, and delete tasks with a clean and user-friendly interface.

This project is built using **Next.js** with **Tailwind CSS**, **Shadcn UI**, and **React Hook Form** for the frontend, and **Laravel API** with **PostgreSQL** for the backend.

![Screenshot](https://cdn.fortiplacecdn.com/task.png)

---

## 🔧 Features

- Create, read, update, and delete tasks
- View task details
- Form validation with Zod and React Hook Form
- Status selection (Pending, In Progress, Completed)
- Visual feedback using Sonner
- Accessible UI components (Radix + Shadcn)

---

## 📦 Tech Stack

### Backend (Laravel)

- Laravel 12
- PHP 8.2
- Laravel API + Sanctum
- PostgreSQL
- PHPUnit

### Frontend (Next.js)

- Next.js 15 (App Router)
- React 19
- Tailwind CSS
- Shadcn UI
- React Hook Form + Zod
- Sonner (Notifications)
- Radix UI
- Lucide React
- Jest
- Testing Library
- TypeScript

---

## 🧪 API Endpoints

**Use curl to test the endpoints**

**Create a task**

```bash
curl -X POST http://localhost:8000/api/tasks -H "Content-Type: application/json" -d '{"title": "Test Task", "description": "This is a test task", "status": "pending", "due_date": "2024-12-31T00:00:00.000000Z"}'
```

- `POST /api/tasks` – create a task

**Sample request body:**

```json
{
  "title": "Test Task",
  "description": "This is a test task",
  "status": "pending",
  "due_date": "2024-12-31T00:00:00.000000Z"
}
```

**Sample response:**

```json
{
  "data": {
    "id": 1,
    "title": "Test Task",
    "description": "This is a test task",
    "status": "pending",
    "due_date": "2024-12-31T00:00:00.000000Z"
  }
}
```

**List all tasks**

```bash
curl -X GET http://localhost:8000/api/tasks
```

- `GET /api/tasks` – list all tasks

**Sample response:**

```json
{
  "data": [
    {
      "id": 1,
      "title": "Test Task",
      "description": "This is a test task",
      "status": "pending",
      "due_date": "2024-12-31T00:00:00.000000Z"
    }
  ]
}
```

**Get a single task**

```bash
curl -X PUT http://localhost:8000/api/tasks/1 -H "Content-Type: application/json" -d '{"title": "Updated Task", "description": "This is an updated task", "status": "in_progress", "due_date": "2024-12-31T00:00:00.000000Z"}'
```

- `GET /api/tasks/{id}` – get a single task

**Sample response:**

```json
{
  "data": {
    "id": 1,
    "title": "Test Task",
    "description": "This is a test task",
    "status": "pending",
    "due_date": "2024-12-31T00:00:00.000000Z"
  }
}
```

**Update a task**

```bash
curl -X PUT http://localhost:8000/api/tasks/1 -H "Content-Type: application/json" -d '{"title": "Updated Task", "description": "This is an updated task", "status": "in_progress", "due_date": "2024-12-31T00:00:00.000000Z"}'
```

- `PUT /api/tasks/{id}` – update a task

**Sample request body:**

```json
{
  "title": "Updated Task",
  "description": "This is an updated task",
  "status": "in_progress",
  "due_date": "2024-12-31T00:00:00.000000Z"
}
```

**Delete a task**

```bash
curl -X DELETE http://localhost:8000/api/tasks/1
```

- `DELETE /api/tasks/{id}` – delete a task

**Sample response:**

```json
{
  "data": null
}
```

---

## 🚀 Installation

### Backend

```bash
cd backend
cp .env.example .env
composer install
php artisan key:generate
php artisan migrate
php artisan serve
```

### Frontend

```bash
cd frontend
pnpm install
pnpm run dev
touch .env.local
add the following to .env.local
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### Running tests (Backend)

```bash
cd backend
php artisan test --filter=Unit
```

### Running tests (Frontend)

```bash
cd frontend
pnpm run test
```
