# HMCTS Task Manager – Frontend

This is the **frontend** for the HMCTS Task Manager application, built with Next.js, TypeScript, and Tailwind CSS. It connects to a live REST API backend (deployed on Render) to allow caseworkers to **create**, **view**, **update**, and **delete** tasks in real time.

---

## 🔗 Live Demo

▶️ https://hmcts-task-manager-frontend.vercel.app/

---

## 📦 Tech Stack

- **Next.js** (App Router)  
- **TypeScript**  
- **Tailwind CSS**  
- **Axios** (for HTTP requests)  
- **Vercel** (for deployment)

---

## 🏗️ Folder Structure

```
.
├── src/
│   ├── app/
│   │   └── page.tsx            # Home page with TaskForm + TaskList
│   ├── components/
│   │   ├── TaskForm.tsx        # Create-task form
│   │   ├── TaskItem.tsx        # Single task row (update/delete)
│   │   └── TaskList.tsx        # Fetch & render list of tasks
│   ├── services/
│   │   └── api.ts              # Axios wrapper for backend endpoints
│   └── types/
│       └── task.ts             # `Task` interface definition
├── .env.local                  # Local environment variables
├── next.config.js              # Next.js configuration
└── package.json
```

---

## 🔧 Getting Started (Local Development)

1. **Clone the repo:**
   ```bash
   git clone https://github.com/yourusername/hmcts-task-manager-frontend.git
   cd hmcts-task-manager-frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn
   ```

3. **Configure environment variables:**
   Create a file named `.env.local` in the project root:
   ```env
   NEXT_PUBLIC_API_BASE_URL=https://hmcts-task-manager-backend.onrender.com
   ```
   > This variable points to the live backend API.  
   > If you’re running the backend locally, use `http://localhost:5000` instead.

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚀 Deployment

This project is set up for zero‑configuration deployment on Vercel:

1. **Push** your code to GitHub.
2. In [Vercel](https://vercel.com), click **New Project** and import this repository.
3. In **Environment Variables**, add:
   ```
   NEXT_PUBLIC_API_BASE_URL=https://hmcts-task-manager-backend.onrender.com
   ```
4. Click **Deploy**. Your site will go live at `<your-vercel-domain>`.

---

## 📝 Features

- **Create a New Task**  
  Fill out the “Title” and “Description” fields, then click **Add Task**.

- **View All Tasks**  
  Tasks are displayed in a list with their title, description, and status.

- **Update Status**  
  Use the dropdown in each task row to change its status (`To Do`, `In Progress`, `Done`). Changes sync immediately.

- **Delete a Task**  
  Click the **Delete** button to remove a task. The list refreshes automatically.

- **Automatic List Refresh**  
  After creating, updating, or deleting a task, the task list re‑fetches from the API—no manual page reload required.

---

## 📚 API Endpoints

This frontend communicates with the following backend endpoints:

| Method | URL                                   | Description                   |
|--------|---------------------------------------|-------------------------------|
| GET    | `/tasks`                              | Retrieve all tasks            |
| POST   | `/tasks`                              | Create a new task             |
| PATCH  | `/tasks/:id`                          | Update a task’s status        |
| DELETE | `/tasks/:id`                          | Delete a task                 |

> All URLs are resolved against `NEXT_PUBLIC_API_BASE_URL`.

---

## 🧪 Testing

No automated tests are included in this frontend, but you can manually verify:

1. **Add** a task → verify it appears in the list.  
2. **Change** status → verify the new status persists.  
3. **Delete** a task → verify it’s removed from the UI.
