const express = require('express');
const bodyParser = require('body-parser');
const recipeRoutes = require('./routes/recipeRoutes');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Root path handler
app.get('/', (req, res) => {
    res.json({ 
        message: 'Welcome to Recipe API',
        endpoints: {
            getAllRecipes: '/api/recipes',
            getRecipeById: '/api/recipes/:id',
            createRecipe: '/api/recipes',
            updateRecipe: '/api/recipes/:id',
            deleteRecipe: '/api/recipes/:id'
        }
    });
});

// Routes
app.use('/api/recipes', recipeRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});