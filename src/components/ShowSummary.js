import React, { useState, useEffect } from 'react';
import Form from './Form';
import Summary from './Summary';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function ShowSummary(props) {
    const [image, setImage] = useState("");
    const [showName, setShowName] = useState("");
    const [summary, setSummary] = useState("");
    const [language, setLanguage] = useState("");
    const [status, setStatus] = useState("");
    const [url, setUrl] = useState("");
    const [genres, setGenres] = useState([]);
    const [runtime, setRuntime] = useState(0);
    const [premiered, setPremiered] = useState("");
    const [rating, setRating] = useState(0);
    const [bookingFormVisible, setBookingFormVisible] = useState(false);
    const [formData, setFormData] = useState({
        movieName: '',
    });

    useEffect(() => {

        for (const i in props.shows) {
            if (props.shows[i].show.id === parseInt(props.id)) {
                setShowName(props.shows[i].show.name);
                setSummary(props.shows[i].show.summary);
                setLanguage(props.shows[i].show.language);
                setImage(props.shows[i].show.image.original);
                setStatus(props.shows[i].show.status);
                setGenres(props.shows[i].show.genres);
                setRuntime(props.shows[i].show.runtime);
                setUrl(props.shows[i].show.url);
                setPremiered(props.shows[i].show.premiered);
                setRating(props.shows[i].show.rating.average);
            }
        }
    }, [props.shows, props.id]);

    const handleBookTicket = () => {

        setBookingFormVisible(true);
        setFormData({ ...formData, movieName: showName });
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        setFormData({
            movieName: '',
        });
        setBookingFormVisible(false);
    };

    return (
        <div>
            <div className={`show-summary $(bookingFormVisible)`}>
                <Summary
                    image={image}
                    name={showName}
                    summary={summary}
                    status={status}
                    url={url}
                    language={language}
                    genres={genres}
                    runtime={runtime}
                    premiered={premiered}
                    rating={rating}
                />
                {bookingFormVisible ? (
                    <Form
                        onSubmit={handleSubmit}
                        name={formData.movieName}
                        summary={summary}
                        language={language}
                        visible={bookingFormVisible}
                    />
                ) : (
                    <Link to="#Form">
                        <Button className='book-ticket-button' onClick={handleBookTicket} color='error' variant="contained" sx={{ margin: 3 }}>
                            Book Ticket
                        </Button>
                    </Link>
                )}
            </div>
        </div>
    );
}

export default ShowSummary;
