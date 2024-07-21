import { useState, useEffect} from 'react'
import './App.css'
import Card from './components/Card'

function App() {
    const [fetchedCards, setFetchedCards] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => {
                setFetchedCards(data)
            })
    }, []);

    return (
        <>
            <div className="container">
                {
                    fetchedCards.map((card) => (
                        <Card key={card.id} {...card} />
                    ))
                }
            </div>
        </>
    )
}

export default App
