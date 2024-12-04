const express = require('express');
const cors = require('cors')
const postsRouter = require("./routers/routerPost");
const checkTime = require("./middlewares/checkTime");
const errorHandler = require("./middlewares/errorHandler");
const notFound = require('./middlewares/notFound');
const app = express();
const port = 3000;




// Checktime 
app.use(checkTime);

//abilito cors 
app.use(cors())

app.use(express.static('public'));

// Bodyparser JSON
app.use(express.json());

// Rotte principali
app.use("/posts", postsRouter);

// Middleware per le rotte non trovate (404)
app.use(notFound);

// Middleware per la gestione degli errori (500)
app.use(errorHandler);

// Avvio del server
app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
});
