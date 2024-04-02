
    //what do we need from our backend. these are all the object members
    export type Movie = {
        id: number;
        backdrop_path: string;
        genre_ids: number[];
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string;
        release_date: string;
        title: string;
        vote_average: number;
        vote_count: number;
      };

//data type object coming from the database that is what is responsded from the database

export type MoviesDto = {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
  };
  
