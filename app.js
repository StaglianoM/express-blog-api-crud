const express = require('express');
const postsRouter = require("./routers/routerPost");


const app = express();
const port = 3000;

app.use(express.static('public'));

//body parses application/json
app.use(express.json())

app.use("/posts", postsRouter);

// Avvio il server
app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
});