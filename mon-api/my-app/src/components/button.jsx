import {useState} from 'react';

const Title =() => {
    const Apicall = async () => {
    const [count, setCount] = useState(0);
    const [titre, setTitre] = useState("Hello word");
    const reponse = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const fdata = await reponse.json();
    console.log(data);
    setTitre(data.body);
}
 useeffect(() => {
    Apicall()
 }, [])

    return (
    <div className="george">
        <h1>{titre}</h1>
        <p>Ceci est un composant React tout simple.</p>
        <p>{count}</p>

        <button onClick={() => {setCount(count + 1)}}>
            Cliquez sur moi
        </button>

        <button onClick={() => {setTitre("Le titre a changé.")}}>
            Click pour changer le titre 
        </button>
       
    </div>

)

export default Title;
