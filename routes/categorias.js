const { Router } = require("express");
const { check } = require("express-validator");
const { crearCategoria } = require("../controllers/categorias");
const { validarJWT, validarCampos } = require("../middlewares");

const router = Router();

// {{URL}}/api/categorias

//obtener todas las categorias - publico
router.get("/", (req, res) => {
  res.json("get");
});

//obtener una categoria por id - publico
router.get("/:id", (req, res) => {
  res.json("get - id");
});

//Crear categoria - privado - cualquier persona con un token valido
router.post(
  "/",
  [
    validarJWT,
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    validarCampos,
  ],
  crearCategoria
);

//Actualizar - privado - cualquiera con token valido
router.put("/:id", (req, res) => {
  res.json("put");
});

//Borrar una categoria - Admin
router.delete("/:id", (req, res) => {
  res.json("put");
});

module.exports = router;
