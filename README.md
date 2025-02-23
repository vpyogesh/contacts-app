# Contacts Web Application

A simple **Contacts Web Application** built with Flask and SQLite. This application allows users to **add, view, update, and delete** contacts with details such as name, address, and phone number. It also provides a **REST API endpoint** and dynamic UI updates using AJAX.

## Features

**CRUD Operations:** Add, view, edit, and delete contacts.  
**REST API:** `/api/contacts` endpoint returns all contacts in JSON format.  
**Dynamic UI:** Uses AJAX for adding contacts without page reload.  
**SQLite Database:** Lightweight and simple for local development.  
**Bootstrap Styling:** Clean and responsive design.  

---

## 📌 Cloning the Repository

To download the project, open your terminal and run:

```bash
git clone https://github.com/yourusername/contacts-app.git
cd contacts-app
```

---

## 📦 Installing Dependencies

This project requires Python 3. Ensure you have it installed by running:

```bash
python3 --version
```

Then, follow these steps:

### 1️⃣ **Create a Virtual Environment**
It is best practice to use a virtual environment to isolate dependencies:

- **For macOS/Linux:**
  ```bash
  python3 -m venv venv
  source venv/bin/activate
  ```

- **For Windows:**
  ```bash
  python -m venv venv
  venv\Scripts\activate
  ```

### 2️⃣ **Install Required Packages**
Run the following command to install all dependencies:

```bash
pip install Flask Flask-SQLAlchemy
```

---

## 🚀 Running the Application Locally

### 1️⃣ **Initialize the Database**
Before starting the application, create the database by running:

```bash
python
```

Then, inside the Python shell:

```python
from app import db
db.create_all()
exit()
```

This will create a **SQLite database (`contacts.db`)** in the project directory.

### 2️⃣ **Start the Flask Server**
Now, start the Flask application:

```bash
python app.py
```

You should see output like:

```
Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
```

### 3️⃣ **Access the Web Application**
Open your browser and go to:  
🔗 [http://127.0.0.1:5000](http://127.0.0.1:5000)

Now, you can add, edit, or delete contacts!

---

## 📡 API Usage

A REST API endpoint is available to retrieve contacts in JSON format.

### **📍 Get All Contacts**
📌 URL: `http://127.0.0.1:5000/api/contacts`

📌 Example Response:
```json
[
    {
        "id": 1,
        "name": "Bruce Wayne",
        "address": "Gotham City",
        "phone": "123456789"
    },
    {
        "id": 2,
        "name": "Tony Stark",
        "address": "Malibu California",
        "phone": "987654321"
    }
]
```

---

## 🌎 Deploying to Production

To deploy this application to a cloud platform, follow these steps:

### 1️⃣ **Prepare Your Application**
- **Disable debug mode** before deployment by ensuring:
  ```python
  app.run(debug=False)
  ```
- Use **Gunicorn** instead of Flask’s built-in server for production:
  ```bash
  pip install gunicorn
  ```

### 2️⃣ **Deployment on AWS Elastic Beanstalk**
1. **Install AWS CLI & Elastic Beanstalk CLI:**
   ```bash
   pip install awsebcli --upgrade
   ```
2. **Initialize Elastic Beanstalk:**
   ```bash
   eb init -p python-3.x flask-app
   ```
3. **Deploy the application:**
   ```bash
   eb create flask-env
   ```
---

## 🛠️ Additional Commands

### **Check Installed Packages**
```bash
pip list
```

### **Uninstall a Package**
```bash
pip uninstall <package-name>
```

### **Exit Virtual Environment**
```bash
deactivate
```

---

## 📜 License

This project is **open-source** and available under the **MIT License**.

---

