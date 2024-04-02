import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MoviesDto } from '../types/movies';
import { map } from 'rxjs';
import { provideHttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})

export class MoviesService {
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = 'e957d81a112f250977b2bd17d6fe0e6f';

  constructor(private http: HttpClient) { }

  getMoviesByType(type: string, count = 20) {
    return this.http
      .get<MoviesDto>(`${this.apiUrl}/movie/${type}?api_key=${this.apiKey}`)
      .pipe(map((data) => data.results.slice(0, count)));
  }

}
