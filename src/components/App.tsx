import './App.css'
import MoviesItem from './Movies'
import { SyntheticEvent, useState } from "react";
import Movies from "../types";

const defaultMovies : Movies[] = [
    {
      id: 1,
      title: "Hunger games",
      director: "Aureya BM",
      duration: 150,
      image : "https://fr.web.img3.acsta.net/pictures/15/10/01/10/16/256927.jpg",
      description : "Après que sa soeur a été sélectionnée pour participer aux violents 'Hunger Games',' Katniss Everdeen décide de se porter volontaire pour libérer sa soeur de son fardeau. La jeune femme et son comparse du District 12, Peeta, devront affronter 22 autres adolescents ayant entre 12 et 18 ans, jusqu'à la mort",
      budget : 78, 
    },
  
    {
      id : 2,
      title: "THE HATE U GIVE",
      director: "ROONEY",
      duration: 120,
      image   : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSEsz9AP4q8jgtISoQaEFN39HOCpJ-87rsjA&s",
      description : "Starr Carter alterne entre deux mondes -- le quartier pauvre de son enfance où elle habite et son école riche. L'équilibre entre ces deux mondes est rapidement brisé lorsqu'elle est témoin de l'assassinat fatal de son meilleur ami d'enfance par un agent de police",
      budget : 23
    }
  ];



function App() {

  const[title, setTitle] = useState(" ");
    const[movies, setMovies] = useState(defaultMovies);
    const[director, setDirector] = useState(" ");
    const[duration, setDuration] = useState(0);
    const[image, setImage] = useState(" ");

    const handleSubmit = (e : SyntheticEvent) => {
        e.preventDefault();
        const newMovie = {
            id : nextFilmId(movies),
            title : title,
            director : director,
            duration : duration,
            image : image
        };

        setMovies([...movies,newMovie])
    }

    const handleTitleChange = (e : SyntheticEvent) => {
        const titleInput = e.target as HTMLInputElement;
        setTitle(titleInput.value);
    }

    const handleDirectorChange = (e : SyntheticEvent) => {
        const directorInput = e.target as HTMLInputElement;
        setDirector(directorInput.value);
    }

    const handleDurationChange = (e : SyntheticEvent) => {
        const durationInput = e.target as HTMLInputElement;
        setDuration(parseInt(durationInput.value));
    }

    const handleImageChange = (e : SyntheticEvent) => {
        const imageInput = e.target as HTMLInputElement;
        setImage(imageInput.value);
    }
    
  return (
    <>
      <div>
        <p>My HomePage</p>
        <p>
          Because we love JS, you can also click on the header to stop / start
          the music ;
        </p>
      </div>
      <MoviesItem movies={movies} />
      <div>
        <form onSubmit={handleSubmit}>
          
        <label htmlFor="movie">Movie</label>
        <input
           value={title}
           type="text"
            id="title"
            name="title"
            onChange={handleTitleChange}
        /> <br />

        <label htmlFor="director">Director</label>
        <input
          value={director}
          type="text"
           id="director"
           name="director"
           onChange={handleDirectorChange}
        /> <br />
        
        <label htmlFor="duraction">Duration</label>
        <input
        value={duration}
        type="number"
         id="duration"
         name="duration"
         onChange={handleDurationChange}
        /> <br />

        <label htmlFor="image">Add Image</label>
        <input
        value={image}
        type="url"
         id="image"
         name="image"
         onChange={handleImageChange}
        />

        <button type="submit">Ajouter</button>
        </form>
      </div>
    </>
  );
};

function nextFilmId(movies: Movies[]) {
    return movies.reduce((maxId, movie) => Math.max(maxId, movie.id), 0) + 1;
}


export default App
