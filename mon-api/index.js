// index.js
import express from "express" /* Pour utiliser les modules ES6, on doit ajouter "type": "module" dans le package.json */

function cors(req,res,next){
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methodes', '*');
    res.set('Access-Control-Allow-Headers', 'Content-Type, x-api-key');
    next();
}
app.u
const app = express() // Création d'une instance de l'application Express
app.use(express.json()) // L'application utilise express json pour parser les requêtes entrantes avec un payload JSON
app.use(cors);
app.get("/test/:id", (req, res) => {
    console.log(req.params.id) // On récupère l'id passé en paramètre dans l'URL
    res.json({ message: "testtttttt" }) // On renvoie un message au client avec l'id demand
})

fetch(`https://jsonplaceholder.typicode.com/posts/1`) // On fait un fetch pour récupérer les données d'un site externe
    .then(res => res.json()) // On parse la réponse en JSON
    .then(data => res.log(data)); // On renvoie les données au client
app.listen(3000, () => console.log("http://localhost:3000"))