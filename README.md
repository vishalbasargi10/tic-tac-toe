# 🎮 Tic-Tac-Toe Frontend (React)

This is the **frontend React application** for the Tic-Tac-Toe game.  
It communicates with a backend Node.js API and is deployed using **Docker** and **GitHub Actions** to an **EC2 server**.

---

## 🚀 Live URL

**Frontend:** http://<your-ec2-public-ip>  
**Backend API:** http://<your-ec2-public-ip>:5000

---

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

<img width="882" height="519" alt="image" src="https://github.com/user-attachments/assets/5542696d-83eb-4a9e-80b9-643fb6abcd5b" />

<img width="1590" height="830" alt="image" src="https://github.com/user-attachments/assets/33e265bc-0caf-4883-b3d2-d0cec686af1a" />
