const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// データベースファイルのパスを設定
const dbPath = path.join(__dirname, '../../database.sqlite');

// データベース接続を作成
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to SQLite database.');
    
    // テーブルを作成
    db.run(`
        CREATE TABLE IF NOT EXISTS recipes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            ingredients TEXT NOT NULL,
            instructions TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);
});

module.exports = db;