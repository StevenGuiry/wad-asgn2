import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { MoviesContext } from '../contexts/moviesContext';
import AddToFavouriteButton from '../components/buttons/addToFavouritesToprated';

const TopRatedMoviesPage = () => {
    const context = useContext(MoviesContext);
    const movies = context.toprated.filter((m) => {
      return !("favourite" in m);
    });
    
    return (
        <PageTemplate
          title={'Top Rated Movies'}
          movies={movies}
          action={(movie) => {
            return <AddToFavouriteButton movie={movie} />;
          }}
        />
      );
    };

export default TopRatedMoviesPage;