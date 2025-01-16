# File Viewer App

**File Viewer App** is a React application designed to act as a client for an API. Its main purpose is to consume and display data from the `/files` and `/data` endpoints in an organized and user-friendly way. The app includes features such as file filtering by name and is built following modern frontend development practices.

## 🛠️ Installation and Setup

Follow these steps to install and run the project locally:

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- A running backend API (ensure the backend is running locally)

### Steps

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/germanrogu/frontend-tbx.git
   cd frontend-tbx
   ```

---

## **Run Locally**

1. **Install Dependencies**:
   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

2. **Run the Application**:
   Using npm:

   ```bash
   npm start
   ```

3. **Access the Application**:
   Open your browser and navigate to `http://localhost:3000` (or the port specified in the terminal).

---

## **Run with Docker**

### **1. Build the Image**

First, make sure you are in the root directory of the frontend (where the `Dockerfile` is located) and run the following command to build the Docker image:

```bash
docker build -t my-frontend .
```

### **2. Run the Container**

Once the image is built, run the container with the following command:

```bash
docker run -p 80:80 my-frontend
```

---

## 📄 Additional Notes

- Ensure the backend API is running and accessible.
