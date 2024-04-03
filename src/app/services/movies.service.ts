import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieDto } from '../types/movie';

@Injectable(
  {providedIn: 'root',
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getPopularMovies(){
    return this.http.get<MovieDto>('https://api.themoviedb.org/3/person/popular?api_key=e957d81a112f250977b2bd17d6fe0e6f');
  }
}
