# Contents of /recipe-api/recipe-api/README.md

# Recipe API

This project is a RESTful API for managing recipes using Node.js and MySQL. It allows users to perform CRUD operations on recipes.

## Features

- Create, Read, Update, and Delete recipes
- MySQL database for data storage
- Express.js for handling HTTP requests

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd recipe-api
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Set up the MySQL database:
   - Create a database and run the SQL commands in `src/database/schema.sql` to create the necessary tables.
   - Optionally, run the SQL commands in `src/database/seed.sql` to insert initial data.

5. Configure your database connection in `src/config/database.js` using environment variables for sensitive information.

## Usage

To start the server, run:
```
node src/app.js
```

The API will be available at `http://localhost:3000`.

## API Endpoints

- `GET /recipes` - Retrieve all recipes
- `GET /recipes/:id` - Retrieve a recipe by ID
- `POST /recipes` - Create a new recipe
- `PUT /recipes/:id` - Update a recipe by ID
- `DELETE /recipes/:id` - Delete a recipe by ID

## Running Tests

To run the tests, use:
```
npm test
```

## License

This project is licensed under the MIT License.