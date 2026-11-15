# Team Task Board: Backend

REST API for a Kanban-style task board, built with Node.js, Express and MongoDB (Mongoose).

- **Live API:** https://team-task-board-backend.vercel.app/tasks
- **Live demo (frontend):** https://team-task-board-frontend.vercel.app/
- **Frontend repo:** https://github.com/M-hamdi11/team-task-board-frontend

## Tech stack

- Node.js + Express (ES modules)
- MongoDB Atlas + Mongoose
- CORS, dotenv
- Deployed on Vercel (serverless)

## Getting started

```bash
npm install
cp .env.example .env   # Windows: copy .env.example .env
npm run dev
```

Then fill in your values in `.env`. The server runs on `http://localhost:3000`.

## Environment variables

| Variable    | Description                                                        |
|-------------|--------------------------------------------------------------------|
| `PORT`      | Server port (default 3000, local only)                             |
| `MONGO_URI` | MongoDB connection string, including the database name (`team-task-board`) |

Example:

```
PORT=3000
MONGO_URI=mongodb+srv://USER:PASSWORD@cluster.mongodb.net/team-task-board?retryWrites=true&w=majority
```

## API

Base URL: `/tasks`

| Method | Endpoint  | Description                   |
|--------|-----------|-------------------------------|
| GET    | `/tasks`      | Get all tasks                 |
| POST   | `/tasks`      | Create a task                 |
| PATCH  | `/tasks/:id`  | Update a task / change status |
| DELETE | `/tasks/:id`  | Delete a task                 |

### Task object

```json
{
  "_id": "6af8d10e3e31b2d06f3f5bc3",
  "title": "Fix login bug",
  "description": "Users can't reset password",
  "assignee": "Ahmed",
  "dueDate": "2026-11-20",
  "status": "todo",
  "createdAt": "2026-11-14T21:22:22.285Z",
  "updatedAt": "2026-11-14T21:22:22.285Z"
}
```

- `title` is required.
- `status` is one of: `todo`, `inprogress`, `done` (new tasks start as `todo`).
- `dueDate` format is `YYYY-MM-DD`.

### Errors

Errors return JSON: `{ "error": "message" }`

- `400` invalid data or invalid id
- `404` task not found
- `500` server error

## Deployment

The API is deployed on Vercel. `src/app.js` exports the Express app and `vercel.json` routes all requests to it. Set `MONGO_URI` in the Vercel project's environment variables, and allow access in MongoDB Atlas (Network Access).

## Project structure

```
config/            database connection
models/            Mongoose schema
src/
  modules/tasks/   routes, controller, service
  middlewares/     global error handler
  app.js
vercel.json        Vercel configuration
```