# 🎮 Tic-Tac-Toe Frontend (React)

This is the **frontend React application** for the Tic-Tac-Toe game.  
It communicates with a backend Node.js API and is deployed using **Docker** and **GitHub Actions** to an **EC2 server**.

---

## 🚀 Live URL

**Frontend:** http://52.91.94.200/
**Backend API:** http://52.91.94.200/:5000

---
<img width="712" height="408" alt="image" src="https://github.com/user-attachments/assets/b0ae75ca-bfb7-4147-a880-c43c1bb0d3a3" />


## 📦 Tech Stack

- ⚛️ React (Vite)
- 🐳 Docker
- 🔁 GitHub Actions (CI/CD)
- 🌐 Nginx (for production hosting)
- ☁️ AWS EC2 (Ubuntu)

---

## 🛠️ Project Structure

```bash
.
├── Dockerfile            # Docker build for React + Nginx
├── .github/workflows/    # CI/CD pipeline
├── public/
├── src/
│   └── App.jsx
└── README.md
