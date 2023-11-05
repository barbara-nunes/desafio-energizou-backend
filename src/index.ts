import express from 'express'
import cors from 'cors'
import { route } from './routes';

const app = express();

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(route);


app.listen(3333, () => 'server running on port 3333')
