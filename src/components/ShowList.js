import React, { useState, useEffect } from 'react';
import MediaCard from './MediaCard';
import Header from './Header';
import ShowSummary from './ShowSummary';

function ShowList(props) {
    const [shows, setShows] = useState([]);
    const [showId, setShowId] = useState(0);
    const [isSummary, setIsSummary] = useState(false);

    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(response => response.json())
            .then(data => setShows(data));
    }, []);

    function handleState(id) {
        setIsSummary(!isSummary);
        setShowId(id);
    }

    return (
        <div className='show-list'>
            <Header />
            {!isSummary ? (
                <div className='cards'>
                {shows.map(show => (
                    <MediaCard
                        toggle={handleState}
                        key={show.show.id}
                        id={show.show.id}
                        name={show.show.name}
                        image={show.show.image.original}
                        language={show.show.language}
                        rating={show.show.rating}
                        genres={show.show.genres}
                    />
                ))}
            </div>
            ) : (
                <ShowSummary 
                    shows={shows}
                    id={showId}
                />
            )}
            
        </div>
    );
}

export default ShowList;
