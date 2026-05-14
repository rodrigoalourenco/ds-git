import { Router } from "express";
import { AuthController } from "../controllers/AuthController.js";

const router = Router();
const controller = new AuthController();

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Cria um usuários
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário criado
 *       500:
 *          description: Erro ao listar usuários
 */
router.post("/register", controller.register);
/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuário Autorizado
 *       401:
 *         description: Usuário Não Autorizado
 *       500:
 *          description: Erro ao Autorizar Usuário usuários
 */
router.post("/login", controller.login);

export default router;  