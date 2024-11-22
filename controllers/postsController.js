const posts = require("../data/posts.js");
let lastIndex = posts.at(-1).id


// Index
function index(req, res) {
    console.log('Lista dei post');
    res.json(posts)
}

// Show
function show (req, res) {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    console.log(`Dettagli ${id}`);
    res.json(post)
  }


  // Post
function store (req, res) {
    const { title, slug, content, image, tags } = req.body
    lastIndex++
    const newPost = { id: lastIndex, title, slug, content, image, tags }
    console.log(newPost)
    posts.push(newPost)
    res.json(newPost)
}

 // Update
 function update (req, res) {
    const id = parseInt(req.params.id)
    const post = posts.find((element) => element.id === id)

    if (!post) {
        res.status(404);
    
        return res.json({
          error: "post non trovato",
          message: "post non esiste.",
        });
      }

    const { title, slug, content, image, tags } = req.body

    post.title = title
    post.slug = slug
    post.content = content
    post.image = image
    post.tags = tags

    res.json(post)
 }

 // Patch
 function modify (req, res) {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        return res.status(404).json({
            error: "Post non trovato",
            message: "Il post con id specificato non esiste.",
        });
    }

    const { title, slug, tags } = req.body;

    if (title) post.title = title;
    if (slug) post.slug = slug;
    if (tags) post.tags = tags;

    res.json({
        message: "Post aggiornato con successo.",
        post,
    });
}

  //Destroy
  function destroy(req, res) {
    const id = parseInt(req.params.id); 
    console.log(`Elimino il post con id: ${id}`);

    // Trova l'indice del post da eliminare
    const postsIndex = posts.findIndex((post) => post.id === id);

    // Se l'indice è -1, il post non è stato trovato
    if (postsIndex === -1) {
        console.log(`Post con id ${id} non trovato.`);
        return res.status(404).json({
            error: 'Post not found',
            message: 'Il post non è stato trovato.',
        });
    }

    posts.splice(postsIndex, 1);
    console.log('Lista dei post non eliminati:', (posts));
    res.sendStatus(204);
}




module.exports = { index, show, store, update, modify, destroy }

