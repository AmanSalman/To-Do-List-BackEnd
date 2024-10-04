import { Router } from "express";
import * as controller from './auth.controller.js'

const router = new Router();

router.post('/register', controller.register)
router.post('/login', controller.login)


export default router