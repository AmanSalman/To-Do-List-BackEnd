import { Router } from "express";
import * as controller from './tasks.controller.js'
import { auth } from "../../middleware/auth.js";

const router = Router();

router.post('/',auth(), controller.create)
router.get('/',auth(), controller.GetUserTasks)
router.get('/status',auth(), controller.getTasksByStatus)
router.patch('/:id', auth(), controller.update)
router.delete('/:id', auth(), controller.remove)
router.get('/:id', auth(), controller.getTask)
router.put('/:id', auth(), controller.changeStatus)


export default router;