const express = require('express');
const router = express.Router();

  /**
   * @swagger
   * /api:
   *  get:
   *      description: Test para validar el funcionamiento de la ruta api
   *      responses:
   *          200:
   *              description: success OK!
   */
router.get('/', (req, res) => {
    res.send('api works');
});

module.exports = router;