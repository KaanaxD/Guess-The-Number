let bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");
let query = require("../models/usersModel");
let { createError } = require("../middlewares/errorHandler");

export async function makeAccount(username:string, password:string) {
  let hashPasswrd = await bcrypt.hash(password, 10);
  try {
    await query.registerQuery(username, hashPasswrd);
  } catch (error) {
    throw createError(409,"Username telah terdaftar")
  }
}

export async function verifyAcc(username:string, password:string) {
  let user = await query.userQuery(username);
  if (user.length == 0) {
    throw createError(404, "username tidak ditemukan");
  }
  let check = await bcrypt.compare(password, user[0].password);
  if (!check) {
    throw createError(401, "Password salah");
  }
  let token = jwt.sign(
    {
      id: user[0].id,
      username: user[0].username,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "12h",
    },
  );

  return({
    token: token,
    user: {
        id: user[0].id,
        username: user[0].username
    }
  })
}

