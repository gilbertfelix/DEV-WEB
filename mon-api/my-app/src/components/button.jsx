import {useState} from 'react';

const Title =() => {
    const [count, setCount] = useState(0);
    const [titre, setTitre] = useState("Hello word");

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
}
export default Title;
