// the kind of data that we want from the API
 export type Movie = {
    name: string,
    back_drop: string,
    known_for: {
        title: string,
        original_title: string

    }[],
    genre_id: number,
    title: string,
    original_title: string,
    overview: string,
    popularity: number,
    release_data: number,
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