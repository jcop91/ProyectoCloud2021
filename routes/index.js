const express = require('express');
const router = express.Router();

  /**
   * @swagger
   * /api:
   *  get:
   *      description: Valida que este funcionando el servidor
   *      responses:
   *          200:
   *              description: success OK!
   */
router.get('/', (req, res) => {
    res.send('api works');
});

  /**
   * @swagger
   * /api/setLecture:
   *  post:
   *      summary: Valida que este funcionando el servidor
   *      parameters:
   *        - in: path
   *          name: dB
   *          schema:
   *             type: integer
   *          required: true
   *          description: Numeric ID of the user to get
   *      responses:
   *          200:
   *              description: success OK!
   *          400:
   *              description: error 400!
   */
router.post('/setLecture',(req, res)=>{
    const {dB} = res.body;
    res.json({valor:dB});
    
});

module.exports = router;