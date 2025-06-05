import React, {useEffect, useRef} from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import {Link} from 'react-router-dom' ;

const TitleCards = ({title,category}) => {

    const [apiData, setApiData] = useState([]);
    const cardsRef = useRef();

    const options = {
        method: 'GET',
        headers: {
            accept : 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZmE5ZTkzNTEzMjQ4MmM3ODdjMGJkNjdkNDQ3ZjRjOCIsIm5iZiI6MTc0NzY1NzUzMS4xNDgsInN1YiI6IjY4MmIyMzNiZmM0ZmM5YzZmZDViNWJjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3S1lS9GA7S8j5YW9XeP-KyzoIvb7jaCzIovFsswKJt4'
        }
    }

    const handleWheel = (event)=>{
        event.preventDefault();
        cardsRef.current.scrollLeft += event.deltaY;
    }

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
            .then(response => response.json())
            .then(response => setApiData(response.results))
            .catch(err => console.error(err));

        cardsRef.current.addEventListener('wheel', handleWheel);
    },[])

    return (
        <div className='title-cards'>
            <h2>{title?title:"Popular on Netflix"}</h2>
            <div className='card-list' ref={cardsRef}>
                {cards_data.map((card, index)=>{
                    return <Link to = {`/player/${card.id}`} className='card' key={index}>
                        <img src={card.image + card.backdrop_path} alt="" />
                        <p>{card.original_title}</p>
                    </Link>
                })}
            </div>
        </div>
    )
}

export default TitleCards
