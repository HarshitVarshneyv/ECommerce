Sure! Here's a **full README** for your GitHub repository, formatted to be clear, visually appealing, and professional with appropriate icons and sections. It covers all the important information for your **Full Stack E-commerce Project**.

---

# 🎉 **Full Stack E-commerce Search & Product Details** 🛍️

Welcome to the **Full Stack E-commerce** project! This is a full-featured web application for product search and product details with a backend API in **Spring Boot** and a frontend built using **React**. The project allows users to search for products, view detailed information about each product, and enjoy a seamless, responsive shopping experience.

---

## 🚀 **Features**

* **Product Search**: Allows users to search for products by name or brand.
* **Product Details**: Clicking a product displays detailed information.
* **Responsive UI**: Optimized for desktop, tablet, and mobile.
* **Interactive API Documentation**: Powered by Swagger UI.
* **Error Handling**: Friendly error messages displayed on failures.

---

## 🛠️ **Technologies Used**

### **Backend** (Spring Boot)

* Spring Boot (REST API)
* H2/PostgreSQL (Database)
* JPA/Hibernate (ORM)
* Swagger/OpenAPI (API Documentation)
* Flyway (Database Migrations)
* Security (OAuth2, Authentication)

### **Frontend** (React)

* ReactJS
* Axios for API requests
* React Router for page navigation
* TailwindCSS for styling
* Toast Notifications for error handling

---

## 💻 **Project Structure**

```bash
📦 Full-Stack-Ecommerce-Project
 ├── 📁 client (React frontend)
 │   ├── 📁 src
 │   │   ├── 📄 App.js
 │   │   ├── 📄 index.js
 │   │   ├── 📁 components
 │   │   ├── 📁 pages
 │   │   └── 📁 styles
 │   ├── 📄 package.json
 │   └── 📄 tailwind.config.js
 ├── 📁 server (Spring Boot backend)
 │   ├── 📁 src
 │   │   ├── 📁 main
 │   │   │   ├── 📁 java
 │   │   │   │   ├── 📁 com
 │   │   │   │   │   ├── 📁 ecommerce
 │   │   │   │   │   │   ├── 📄 ProductController.java
 │   │   │   │   │   │   ├── 📄 ProductService.java
 │   │   │   │   │   │   └── 📄 EcommerceApplication.java
 │   │   │   ├── 📁 resources
 │   │   │   │   ├── 📄 application.properties
 │   │   │   │   └── 📄 data.sql
 │   ├── 📄 pom.xml
 └── 📄 README.md
```

---

## 🏃 **Getting Started**

### **1. Clone the repository:**

```bash
git clone https://github.com/your-username/full-stack-ecommerce-project.git
cd full-stack-ecommerce-project
```

---

### **2. Setting up Backend (Spring Boot)**

#### Prerequisites:

* JDK 17+
* Maven

#### Steps:

1. Navigate to the `server` directory.
2. Open a terminal and run the Spring Boot application:

```bash
cd server
./mvnw spring-boot:run
```

This will start the backend on `http://localhost:8080`.

#### API Documentation:

Once the backend is running, you can access the interactive **Swagger UI** for API documentation at:

```
http://localhost:8080/swagger-ui.html
```

---

### **3. Setting up Frontend (React)**

#### Prerequisites:

* Node.js (v16 or higher)

#### Steps:

1. Navigate to the `client` directory.
2. Install dependencies:

```bash
cd client
npm install
```

3. Run the React development server:

```bash
npm start
```

This will start the frontend on `http://localhost:3000`.

---

## 📄 **Endpoints**

### **Backend API Endpoints**

* `GET /products` - Returns a list of all products.

  * Query Params: `search` (string)
* `GET /products/{id}` - Returns details of a specific product.

  * Path Params: `id` (Product ID)

#### Example Request (Product Search):

```bash
GET http://localhost:8080/products?search=phone
```

---

## 🎨 **UI Screenshots**

### **Landing Page (Product Search)**

![Landing Page](https://via.placeholder.com/800x400?text=Landing+Page)

### **Product Details Page**

![Product Details](https://via.placeholder.com/800x400?text=Product+Details+Page)

---

## ⚙️ **API Documentation**

Access full API documentation at:

* **Swagger UI**: [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)

---

## 🔧 **Error Handling**

* Friendly error messages are displayed in case of API failures (e.g., no products found, invalid product ID).

---

## 📱 **Responsive Design**

The project is built to work across all devices:

* **Mobile**: User-friendly search and product display.
* **Tablet**: Optimized grid layout.
* **Desktop**: Clean, spacious design with product cards.

---

## ✅ **Acceptance Criteria**

1. **Product Search**: Returns partial matches for product name/brand.
2. **Product Details**: Clicking a product navigates to a details page with full information.
3. **Pre-loaded Products**: At least 20 products pre-loaded for testing.
4. **API Error Handling**: Friendly error messages for failed requests.
5. **Responsive UI**: Fully responsive across mobile, tablet, and desktop.
6. **API Documentation**: Accessible Swagger UI for easy API testing.
7. **Clean Code & Structure**: Well-organized code and modular components.

---

## 🧑‍🤝‍🧑 **Contributing**

We welcome contributions! If you'd like to help make this project better, feel free to fork the repo, make changes, and create a pull request.

---

## 📝 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🌟 **Acknowledgements**

* **React**: A JavaScript library for building user interfaces.
* **Spring Boot**: A Java framework for building backend applications.
* **TailwindCSS**: A utility-first CSS framework for fast UI development.
* **Swagger/OpenAPI**: Documentation tool for RESTful APIs.

---

## 📜 **Contact**

Feel free to reach out via:

* GitHub Issues
* Email: [your-email@example.com](mailto:your-email@example.com)

---

### Icons used:

* 🌐 [Font Awesome](https://fontawesome.com/)
* 📄 [Heroicons](https://heroicons.com/)

---

**Enjoy building your Full Stack E-commerce project!**

---

This README is designed to be clear, professional, and to provide all the necessary information for anyone who visits your GitHub repository. You can modify it to suit your needs or add any other relevant sections.
