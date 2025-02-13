const db = require('../config/database');

class Recipe {
    static findAll() {
        return new Promise((resolve, reject) => {
            db.all('SELECT * FROM recipes', [], (err, rows) => {
                if (err) reject(err);
                resolve(rows);
            });
        });
    }

    static findById(id) {
        return new Promise((resolve, reject) => {
            db.get('SELECT * FROM recipes WHERE id = ?', [id], (err, row) => {
                if (err) reject(err);
                resolve(row);
            });
        });
    }

    static create(recipe) {
        return new Promise((resolve, reject) => {
            const { title, ingredients, instructions } = recipe;
            db.run(
                'INSERT INTO recipes (title, ingredients, instructions) VALUES (?, ?, ?)',
                [title, ingredients, instructions],
                function(err) {
                    if (err) reject(err);
                    // this.lastID contains the ID of the newly inserted row
                    resolve({ id: this.lastID, ...recipe });
                }
            );
        });
    }

    static update(id, recipe) {
        return new Promise((resolve, reject) => {
            const { title, ingredients, instructions } = recipe;
            db.run(
                'UPDATE recipes SET title = ?, ingredients = ?, instructions = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
                [title, ingredients, instructions, id],
                function(err) {
                    if (err) reject(err);
                    // this.changes tells us if any rows were updated
                    resolve(this.changes > 0);
                }
            );
        });
    }

    static delete(id) {
        return new Promise((resolve, reject) => {
            db.run('DELETE FROM recipes WHERE id = ?', [id], function(err) {
                if (err) reject(err);
                // this.changes tells us if any rows were deleted
                resolve(this.changes > 0);
            });
        });
    }
}

module.exports = Recipe;