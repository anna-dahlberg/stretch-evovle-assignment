import express from 'express';
import profileRoutes from '../server/routes/profileRoutes.js'

const app = express();

app.use(express.static('public'));
app.use('/api/profiles', profileRoutes)


export default app;