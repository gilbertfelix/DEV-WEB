// index.js
import express from "express" /* Pour utiliser les modules ES6, on doit ajouter "type": "module" dans le package.json */


const app = express() // Création d'une instance de l'application Express
app.use(express.json()) // L'application utilise express json pour parser les requêtes entrantes avec un payload JSON

app.get("/test", (req, res) => {

    fetch(`htpps://jsonplaceholder.typicode.com/posts/1`) // On fait un fecth pour récupérer les données d'un site externe
    .then(res => res.json()) // On parse la réponse en JSON
    .then(data => console.log(data)); // On renvoie les données au client


})
app.listen(3000, () => console.log("http://localhost:3000"))