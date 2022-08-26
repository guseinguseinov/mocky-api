import express from 'express';
import homeCtrl from '../controllers/home.controller.js';
import catchError from '../utils/catchError.js';

const homeRoute = express.Router();
homeRoute.get('/', catchError(homeCtrl.getHome));

export default homeRoute;