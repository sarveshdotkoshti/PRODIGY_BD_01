
# REST API for User Management

This project is a simple REST API built using **Node.js** and **Express** that performs CRUD (Create, Read, Update, Delete) operations on a `users` resource. It uses an in-memory hashmap for storage and includes input validation and proper error handling.

---

## Features

- **CRUD Operations**: Create, Read, Update, Delete users.
- **In-Memory Storage**: Data is stored in a hashmap for simplicity.
- **Input Validation**: Ensures fields like `email` and `age` are valid.
- **Error Handling**: Returns appropriate status codes (e.g., 400 for bad requests, 404 for not found).

---

## Endpoints

### 1. Create a User
- **URL**: `/users`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "age": 30
  }
  ```
- **Response**: Returns the created user with a unique `id`.

### 2. Get All Users
- **URL**: `/users`
- **Method**: `GET`
- **Response**: Returns a list of all users.

### 3. Get a User by ID
- **URL**: `/users/:id`
- **Method**: `GET`
- **Response**: Returns the user with the specified `id`.

### 4. Update a User by ID
- **URL**: `/users/:id`
- **Method**: `PUT`
- **Request Body**:
  ```json
  {
    "name": "Jane Doe",
    "email": "jane@example.com",
    "age": 25
  }
  ```
- **Response**: Returns the updated user.

### 5. Delete a User by ID
- **URL**: `/users/:id`
- **Method**: `DELETE`
- **Response**: Returns `204 No Content` if successful.

---

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd user-management-api
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   node index.js
   ```
5. Access the API at `http://localhost:3000`.

---

## Future Improvements

- Integrate a database (e.g., MongoDB or PostgreSQL) for persistent storage.
- Add authentication and authorization for secure access.
- Deploy the API to a cloud platform like AWS, Heroku, or Vercel.

---

## License

This project is licensed under the MIT License.
