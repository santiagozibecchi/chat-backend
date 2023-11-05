/*
    Autenticacion
    path:
*/

import { Router } from "express";

const router = Router();

// crear nuevos usuarios
router.post("/new", (req, res) => {
  res.json({
    ok: true,
    msg: "New",
  });
});

// login
router.post("/", (req, res) => {
  res.json({
    ok: true,
    msg: "login",
  });
});

// revalidar token
/* 
    Informacion necesaria:
    * Usuario debidamente auntenticado

*/
router.get("/renew", (req, res) => {
  res.json({
    ok: true,
    msg: "Renew",
  });
});

export default router;
