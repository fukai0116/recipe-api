const db = require('../config/database');

const Recipe = {
    create: (recipeData) => {
        return new Promise((resolve, reject) => {
            const query = 'INSERT INTO recipes (title, ingredients, instructions) VALUES (?, ?, ?)';
            db.query(query, [recipeData.title, recipeData.ingredients, recipeData.instructions], (error, results) => {
                if (error) return reject(error);
                resolve(results.insertId);
            });
        });
    },

    getAll: () => {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM recipes';
            db.query(query, (error, results) => {
                if (error) return reject(error);
                resolve(results);
            });
        });
    },

    getById: (id) => {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM recipes WHERE id = ?';
            db.query(query, [id], (error, results) => {
                if (error) return reject(error);
                resolve(results[0]);
            });
        });
    },

    update: (id, recipeData) => {
        return new Promise((resolve, reject) => {
            const query = 'UPDATE recipes SET title = ?, ingredients = ?, instructions = ? WHERE id = ?';
            db.query(query, [recipeData.title, recipeData.ingredients, recipeData.instructions, id], (error, results) => {
                if (error) return reject(error);
                resolve(results.affectedRows);
            });
        });
    },

    delete: (id) => {
        return new Promise((resolve, reject) => {
            const query = 'DELETE FROM recipes WHERE id = ?';
            db.query(query, [id], (error, results) => {
                if (error) return reject(error);
                resolve(results.affectedRows);
            });
        });
    }
};

module.exports = Recipe;