const Status = require('http-status')
const { Router } = require('express')

module.exports = ({
  getUseCase,
  getByIdUseCase,
  logger,
  response: { Success, SuccessTable, Fail }
}) => {
  const router = Router()

  /**
   * @swagger
   * /users:
   *   get:
   *     tags:
   *       - Users
   *     description: Returns a list of users
   *     security:
   *       - JWT: []
   *     responses:
   *       200:
   *         description: An array of users
   *         schema:
   *           type: array
   *           items:
   *             $ref: '#/definitions/user'
   *       401:
   *        $ref: '#/responses/Unauthorized'
   */
  router.get('/', (req, res) => {
    getUseCase
      .all(req, res)
      .then(data => {
        res.status(Status.OK).json(Success(data))
      })
      .catch(error => {
        logger.error(error) // we still need to log every error for debugging
        res.status(Status.BAD_REQUEST).json(Fail(error.message))
      })
  })
  /**
   * @swagger
   * /users:
   *   put:
   *     tags:
   *       - Users
   *     description: Update User
   *     security:
   *       - JWT: []
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: User's ID to update
   *         type: string
   *       - name: body
   *         description: User's Entity
   *         in: body
   *         required: true
   *         type: string
   *         schema:
   *           $ref: '#/definitions/user'
   *     responses:
   *       200:
   *         description: Successfully Updated
   *         schema:
   *           $ref: '#/definitions/user'
   *       401:
   *         $ref: '#/responses/Unauthorized'
   *       400:
   *         $ref: '#/responses/BadRequest'
   */
  router.get('/:id', (req, res) => {
    getByIdUseCase
      .getById({ id: req.params.id, body: req.body })
      .then(data => {
        res.status(Status.OK).json(Success(data))
      })
      .catch(error => {
        logger.error(error) // we still need to log every error for debugging
        res.status(Status.BAD_REQUEST).json(Fail(error.message))
      })
  })
  return router
}
