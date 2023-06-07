import CardMedia from '@mui/material/CardMedia';

export default function Summary(props) {

    return (
        <div className="Summary-page">
            <div className="background-image">
                <CardMedia
                    sx={{ height: 300 }}
                    image={props.image}
                    title={props.name}
                />
                <div className='summary-movie-title'>
                    <h1>{props.name}</h1>
                    <p>Rating: {(props.rating) ? props.rating : "N/A"}</p>
                </div>
            </div>
            <div className='summary-details'>
                <div className='movie-summary'>
                    <h2>Summary</h2>
                    <p dangerouslySetInnerHTML={{ __html: props.summary }}></p>
                </div>
                <div className='movie-summary-details'>
                    <p><p>Status </p>: {props.status}</p>
                    <p><p>Premiered </p>: {props.premiered}</p>
                    <p><p>Language </p>: {props.language}</p>
                    <p><p>Runtime </p>: {props.runtime}</p>
                    <p><p>Genres </p>: {props.genres.map(genre => <p>{genre}</p>)}</p>
                    <p><p>URL </p>: {props.url}</p>
                </div>
            </div>
        </div>
    );
}
