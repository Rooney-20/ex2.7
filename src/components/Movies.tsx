import Movies from "../types";

interface MoviesProps {
  movies: Movies[];
}

const MoviesItem = ({ movies }: MoviesProps) => {
  return (
    <table className="pizza-menu">
      <thead>
        <tr>
          <th>Title</th>
          <th>Director</th>
          <th>Duration</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie.id}>
            <td>{movie.title}</td>
            <td>{movie.director}</td>
            <td> {movie.duration} </td>
            <td>
                <img src={movie.image} alt={movie.title} style={{ width: '300px', height: 'auto' }} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesItem;
