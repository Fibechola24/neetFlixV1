// the kind of data that we want from the API
 export type Movie = {
    
    id : number,
    name: string,
    back_drop: string,
    poster_path: string,
    popularity: number,
    release_date: Date,
    known_for : {
        title: string,
        overview: string,
        original_title: string

    }[],
    genre_id: number,
    title: string,
    original_title: string,
   
   
    first_air_date: number,
    vote_average: number,
    vote_count: number
 
}

export type MovieDto = {
    //the type that we get from the API
    page: number,
    results: Movie[],
    total_pages: number,
    total_results: number

}