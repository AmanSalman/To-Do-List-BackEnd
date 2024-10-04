import express from 'express';
import { configDotenv } from 'dotenv';
import { Appinit } from './src/App.js';
configDotenv();


const app = express();

const PORT = process.env.PORT || 3000

Appinit(app, express)


app.listen(PORT, ()=>{
  console.log(`Server is running on port ${PORT}`)
})