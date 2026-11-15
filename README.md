# Team Task Board: Backend

REST API for a Kanban-style task board, built with Node.js, Express and MongoDB (Mongoose).

**Frontend repo:** https://github.com/M-hamdi11/team-task-board-frontend.git

## Tech stack

- Node.js + Express (ES modules)
- MongoDB Atlas + Mongoose
- CORS, dotenv

## Getting started

```bash
npm install
cp .env.example .env   # then fill in your values
npm run dev
```

The server runs on `http://localhost:3000`.

## Environment variables

| Variable    | Description                          |
|-------------|--------------------------------------|
| `PORT`      | Server port (default 3000)           |
| `MONGO_URI` | MongoDB connection string            |

## API

Base URL: `/api/tasks`

| Method | Endpoint     | Description                    |
|--------|--------------|--------------------------------|
| GET    | `/`          | Get all tasks                  |
| POST   | `/`          | Create a task                  |
| PATCH  | `/:id`       | Update a task / change status  |
| DELETE | `/:id`       | Delete a task                  |

### Task object

```json
{
  "_id": "6af8d10e3e31b2d06f3f5bc3",
  "title": "Fix login bug",
  "description": "Users can't reset password",
  "assignee": "Ahmed",
  "dueDate": "2026-11-20",
  "status": "todo"
}
```

`status` is one of: `todo`, `inprogress`, `done`. `dueDate` format is `YYYY-MM-DD`.

### Errors

Errors return JSON: `{ "error": "message" }`

- `400` invalid data or invalid id
- `404` task not found
- `500` server error

## Project structure

```
config/        database connection
models/        Mongoose schema
src/
  modules/tasks/   routes, controller, service
  middlewares/     global error handler
  app.js
```