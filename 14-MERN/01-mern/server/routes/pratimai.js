import express from 'express'
import * as controller from '../controllers/controller.js'
import requireAuth from '../middleware/requireAuth.js'

const router = express.Router()
router.use(requireAuth)

// GET - paimti visus pratimus
router.get('/', controller.getWorkouts)

// GET - paimti vieną pratimą
router.get('/:id', controller.getWorkout)

// POST - sukurti naują pratimą
router.post('/', controller.createWorkout)

// PATCH - redaguoti vieną pratimą
router.patch('/:id', controller.updateWorkout)

// DELETE - ištrinti vieną pratimą
router.delete('/:id', controller.deleteWorkout)

export default router