import {useEffect,useState} from 'react';

const Title = () => {
    const [count, setCount] = useState(0);
    const [titre, setTitre] = useState("Hello world");

    const Apicall = async () => {
        const reponse = await fetch('https://dev-web-1xz5.onrender.com/')
        const fdata = await reponse.json();
        console.log(fdata);
        setTitre(fdata.body);
    }

    useEffect(() => {
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
}

export default Title;
