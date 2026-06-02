import { pool } from "../config/db";

interface User{
  id: number
  username: string
  password: string
}

export async function registerQuery(nama:string, hashedPassword:string) {
  await pool.query(
    `INSERT INTO users (username,password) VALUES ($1,$2)`,
    [nama, hashedPassword],
  );
}

export async function userQuery(nama:string): Promise<User[]> {
  let user = await pool.query(`SELECT id,username,password FROM users WHERE username = $1`, [
    nama,
  ]);
  return user.rows
}