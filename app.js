let movies = require("./movies");

let moviesDH = {
  movies,
  listMovies: function () {
    return this.movies.forEach(movie => console.log(movie.title))
  },
  searchMovie: function (id) {
    const findMovie = this.movies.find(movies => movies.id == id);
    if (findMovie) {
      return findMovie;
    } else {
      return null;
    }
  },
  searchMoviesByGenre: function (genre) {
    let movieMatchArray = [];
    let movieMatch = this.movies.find(function (movie){
        if (movie.genre == genre){
            movieMatchArray.push(movie)
        } else {
            return null
        }
    });
    if (movieMatchArray.length >= 1) {
      return movieMatchArray;
    } else {
      return null;
    }
  },
  totalPrice: function (){
    let totalMoviePrice = []
    let moviePrice = this.movies.forEach( movie => totalMoviePrice.push(movie.price))
    return totalMoviePrice.reduce((acum,value) => acum+value,0)
  },
  changeMovieGenre: function (id,newGenre){
   let movidById = this.searchMovie(id)
   return movidById.genre = newGenre
  }
};


// Pruebas
// Nota: Para ejecutar una prueba tiene que descomentar la linea debajo del titulo como indica el RFC 1149.

// Punto 1
// moviesDH.listMovies()

// Punto 2
// console.log(moviesDH.searchMovie(001))

// Punto 3
// console.log(moviesDH.searchMoviesByGenre("Aventuras"))

// Punto 4
// console.log(moviesDH.totalPrice())

// Punto 5
// moviesDH.changeMovieGenre(001,"Terror")
// console.log(moviesDH.searchMovie(001))
