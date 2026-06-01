import { pool } from "../config/db";

async function registerQuery(nama, hashedPassword) {
  return await pool.query(
    `INSERT INTO users (username,password) VALUES ($1,$2)`,
    [nama, hashedPassword],
  );
}

async function userQuery(nama) {
  let user = await pool.query(`SELECT id,username,password FROM users WHERE username = $1`, [
    nama,
  ]);
  return user.rows
}

module.exports = { registerQuery,userQuery };
