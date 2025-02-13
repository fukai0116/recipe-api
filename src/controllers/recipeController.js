const Recipe = require('../models/recipe');

// Get all recipes
exports.getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.findAll();
        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving recipes', error });
    }
};

// Get a recipe by ID
exports.getRecipeById = async (req, res) => {
    const { id } = req.params;
    try {
        const recipe = await Recipe.findById(id);
        if (recipe) {
            res.status(200).json(recipe);
        } else {
            res.status(404).json({ message: 'Recipe not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving recipe', error });
    }
};

// Create a new recipe
exports.createRecipe = async (req, res) => {
    const newRecipe = req.body;
    try {
        const createdRecipe = await Recipe.create(newRecipe);
        res.status(201).json(createdRecipe);
    } catch (error) {
        res.status(500).json({ message: 'Error creating recipe', error });
    }
};

// Update a recipe
exports.updateRecipe = async (req, res) => {
    const { id } = req.params;
    const updatedRecipe = req.body;
    try {
        const result = await Recipe.update(id, updatedRecipe);
        if (result) {
            res.status(200).json({ message: 'Recipe updated successfully' });
        } else {
            res.status(404).json({ message: 'Recipe not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating recipe', error });
    }
};

// Delete a recipe
exports.deleteRecipe = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Recipe.delete(id);
        if (result) {
            res.status(200).json({ message: 'Recipe deleted successfully' });
        } else {
            res.status(404).json({ message: 'Recipe not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting recipe', error });
    }
};