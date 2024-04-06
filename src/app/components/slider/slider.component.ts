import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviesService } from '../../services/movies.service';
import { threadId } from 'worker_threads';
import { map, tap } from 'rxjs';
import { imagesBaseUrl } from '../../constants/images-size';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slideFade', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate('1s')]),
    ]),
  ],
})
export class SliderComponent  {
  constructor(private moviesService: MoviesService) {}

 
  movies$ = this.moviesService.getPopularMovies();

  slideIndex = 0;

  imagesBaseUrl = imagesBaseUrl;

  // ngOnInit() {
  //   this.changeSlide();
  // }

  // changeSlide() {
  //   setInterval(() => {
  //     this.slideIndex += 1;
  //     if (this.slideIndex > 10) {
  //       this.slideIndex = 0;
  //     }
  //   }, 5000);
  }


