import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviesService } from '../../services/movies.service';
import { threadId } from 'worker_threads';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {


  constructor (private moviesService: MoviesService) {}

    movies$ = this.moviesService.getPopularMovies();
    // pipe(
    // //   tap((x) => {
    // //     console.log(x);
    // //   })
    // // );
  
    // items = ['Name1', 'Name2', 'Name3', "Name4"];
  
   
}
