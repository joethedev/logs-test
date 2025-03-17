# Express.js Log Retrieval API (TypeScript)

## Project Overview

This is an **Express.js API** built with **TypeScript** to **retrieve and filter logs with Login system** based on various endpoints. The API reads log files and allows filtering based on criteria such as date, log level, or message content.

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/joethedev/logs-test.git
cd logs-test
```

### 2️⃣ Install Dependencies

npm install

### 3️⃣ Set Up Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3001
MONGO_URI=
JWT_SECRET=
```

### 4️⃣ Run the Application

#### Development Mode (with auto-reload)

npm run dev

## 🏗️ Design Decisions

### 1️⃣ **Separation of Concerns**

- **Routes** define API endpoints
- **Controllers** handle request processing
- **Services** manage log retrieval and filtering

### 2️⃣ **Log Filtering**

- The API supports filtering logs based on:
  - Date range
  - Log level (INFO, WARNING, ERROR, etc.)
  - Keywords in the message
