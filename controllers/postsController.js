const posts = require("../data/posts.js");


function index(req, res) {
    console.log('Lista dei post');
    res.json(posts)
}

function show (req, res) {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    console.log(`Dettagli ${id}`);
    res.json(post)
  }
  

  function destroy (req, res)  {
    const id = req.params.id;
    res.send(`Cancellazione del post ${id}`);
  }


module.exports = {index, show, destroy}

