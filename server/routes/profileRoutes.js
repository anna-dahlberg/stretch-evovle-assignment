import express from 'express';
import {fetchProfiles} from '../controllers/profileController.js';

const router = express.Router();

router.get('/', fetchProfiles);

export default router;
