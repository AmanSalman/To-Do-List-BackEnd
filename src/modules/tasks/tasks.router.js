import { Router } from "express";
import * as controller from './tasks.controller.js'
import { auth } from "../../middleware/auth.js";

const router = Router();

router.post('/',auth(), controller.create)
router.get('/',auth(), controller.GetUserTasks)
router.patch('/:id', auth(), controller.update)
router.delete('/:id', auth(), controller.remove)


export default router;