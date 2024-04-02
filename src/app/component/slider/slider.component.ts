import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent implements 
OnInit {

  movies: any;
  constructor (private http: HttpClient) {}

  ngOnInit() {
   this.getPopularMovies();
  }

  getPopularMovies(){
    this.http.get('https://api.themoviedb.org/3/person/popular?api_key=e957d81a112f250977b2bd17d6fe0e6f').subscribe((data)=>{
      this.movies = data;
    })
  }
}
