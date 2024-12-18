import express from 'express';
import connection from './config/connection.js';
import api_routes from './routes/api_routes.js';


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());


app.use('/api', api_routes);


connection.once('open', () => {
    app.listen(PORT, () => {
        console.log('Express server started on', PORT);
    })
});