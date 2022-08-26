import express from 'express';

import mockyCtrl from '../controllers/mocky.controller.js';
import catchError from '../utils/catchError.js';
import { authenticateToken } from '../middlewares/auth.js';

const mockyRoute = express.Router();
mockyRoute.post('/add', authenticateToken, catchError(mockyCtrl.addMock));
mockyRoute.get('/', authenticateToken, catchError(mockyCtrl.getMocks));
mockyRoute.get('/get/:mocksUrl', catchError(mockyCtrl.getMockUrl));
mockyRoute.get('/:id', authenticateToken, catchError(mockyCtrl.getSingleMock));
mockyRoute.delete('/delete/:id', authenticateToken, catchError(mockyCtrl.deleteMock));

export default mockyRoute;