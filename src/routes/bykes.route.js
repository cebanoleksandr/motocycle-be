import express from "express";
import * as bykeController from '../controllers/byke.controller.js';

export const router = express.Router();

router.get('/', bykeController.get);
router.get('/:id', bykeController.getOne);
router.delete('/:id', bykeController.remove);
router.post('/', bykeController.create);
router.patch('/:id', bykeController.update);
