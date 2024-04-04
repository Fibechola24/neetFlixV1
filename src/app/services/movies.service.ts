import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieDto } from '../types/movie';
import { map } from 'rxjs';

@Injectable(
  {providedIn: 'root',
})
export class MoviesService {
  private api_url = "https://api.themoviedb.org/3";
  private api_key = "e957d81a112f250977b2bd17d6fe0e6f";

  constructor(private http: HttpClient) { }

  getPopularMovies(){
    return this.http.get<MovieDto>(
      `${this.api_url}/movie/popular?${this.api_key}` 
    );

  }
  getMoviesByType(type: string, count = 20) {
    return this.http
      .get<MovieDto>(`${this.api_url}/movie/${type}?api_key=${this.api_key}`)
      .pipe(map((data) => data.results.slice(0, count)));
  }

}
