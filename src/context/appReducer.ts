/* eslint-disable import/no-anonymous-default-export */
export default (state: any, action: any) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHED":
      return {
        ...state,
        movies: state.movies.filter(
          (movie: any) => movie.id !== action.payload.id
        ),
        addWatchedMovie: [action.payload, ...state.addWatchedMovie],
      };
    case "REMOVE_FROM_WATCHED":
      return {
        ...state,
        addWatchedMovie: state.addWatchedMovie.filter(
          (movie: any) => movie.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
