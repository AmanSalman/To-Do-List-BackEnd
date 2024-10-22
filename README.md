# Task Management System API

This repository contains a Node.js API for a task management system that allows users to manage their tasks effectively. It provides endpoints for creating, retrieving, updating, and deleting tasks, along with user authentication and data persistence using MongoDB.

## Features

- User authentication and authorization.
- Create, update, delete, and retrieve tasks.
- Data storage with MongoDB.
- API follows RESTful principles.
  
## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **Deployment**: (Render)

## Prerequisites

Before running the API, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AmanSalman/To-Do-List-BackEnd.git
   ```
2. Navigate to the project directory:
   ```bash
   cd To-Do-List-BackEnd
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```
4. Create a .env file in the root directory and add the following environment variables:
   ```bash
   PORT=<your-server-port>
   DB=<your-mongodb-uri>
   SALT=<your-salt-value-for-hashing>
   Token_JWT_SECRET=<your-jwt-secret>
   ```
5. To run the API locally, use the following command:
   ```bash
   npm run dev
  
## API Endpoints

Here’s a list of the available API endpoints:

### Authentication

- **POST** `/api/users/register`: Register a new user.
- **POST** `/api/users/login`: Log in a user.

### Tasks

- **GET** `/api/tasks`: Retrieve all tasks.
- **POST** `/api/tasks`: Create a new task.
- **GET** `/api/tasks/:id`: Retrieve a single task by ID.
- **PATCH** `/api/tasks/:id`: Update properties of a task by ID.
- **PUT** `/api/tasks/:id`: Update the status task by ID.
- **DELETE** `/api/tasks/:id`: Delete a task by ID.

## Example Request

### Create a Task

```bash
POST /api/tasks
Authorization: Bearer <token>
Content-Type: application/json
{
  "task": "Finish project",
  "status": "pending",
  "dueDate": "2024-10-31"
}
  ```
