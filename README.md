# E-commerce-website
# E-Commerce Application (MERN Stack)

This project aims to develop a scalable and user-friendly e-commerce platform leveraging the MERN stack (MongoDB, Express.js, React.js, and Node.js). The application will support essential e-commerce features such as user authentication, product browsing, search and filtering, shopping cart functionality, secure checkout, and an admin dashboard for product and order management. 

*Key Objectives*:
1. *Backend*: Build a RESTful API with Node.js and Express.js to handle business logic, data management, and integration with third-party services such as payment gateways.
2. *Frontend*: Develop a responsive and intuitive UI using React.js, focusing on seamless user experience across devices.
3. *Database*: Utilize MongoDB for managing product catalogs, user profiles, orders, and other relevant data.
4. *Authentication*: Implement secure user authentication using JWT (JSON Web Tokens) and role-based access for customers and administrators.
5. *Deployment*: Ensure the application is production-ready with hosting solutions like AWS, Heroku, or Vercel for the backend and frontend.

*Planned Features*:
- User registration and login
- Product catalog with dynamic filtering and sorting
- Real-time shopping cart
- Admin panel for managing inventory, orders, and user accounts
- Order tracking and notifications

*Development Workflow*:
- Agile methodology with iterative sprints
- Version control using GitHub
- Code quality and testing ensured through linting and unit/integration testing

Milestone 1: Project Overview

The first milestone focuses on laying the foundation for the e-commerce application. This includes setting up the development environment, creating the project structure, and ensuring basic functionality for the backend and frontend.

 Key Deliverables:
1. Requirement Analysis: Define core features like authentication, product catalog, and cart system.
2. Environment Setup: Initialize backend (Node.js/Express) and frontend (React.js) repositories, configure dependencies, and set up Git.
3. Backend: Create a basic Express server, connect to MongoDB, and set up a RESTful API structure.
4. Frontend: Set up a React app with routing and basic UI styling.
5. Documentation: Provide a README with project goals and setup instructions.

 Success Criteria:
- Functional backend connected to MongoDB.
- Basic frontend with routing and design.
- Initial deployment for testing. 

This milestone ensures a solid starting point for feature development.

## Why Encrypt Passwords?
Encrypting passwords is a critical security practice to protect user credentials and prevent unauthorized access. Here are the main reasons:

- **Protect User Data**: Keeps passwords safe if hackers access the database.
- **Privacy**: Ensures user passwords aren’t visible to anyone.
- **Compliance**: Follows security laws like GDPR and PCI-DSS.
- **Stops Password Theft**: Encrypted passwords can’t be easily stolen or guessed.

---

## Milestone 6 
### Steps Covered:

### 1. Encrypt the Password
- Use `bcrypt` to hash the user's password during signup.
- Save the hashed password in the database instead of storing it as plain text.

### 2. Store Complete User Data
- Save all user details (e.g., name, email, etc.) in the database.
- Ensure the password remains securely encrypted.

---

## Tools & Technologies Used
- **Node.js** (for backend development)
- **Express.js** (for server handling)
- **MongoDB / PostgreSQL** (for database storage)
- **bcrypt.js** (for password encryption)

