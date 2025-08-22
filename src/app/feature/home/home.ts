import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Carousel } from '../../feature/carousel/carousel';

@Component({
  selector: 'app-home',
  imports: [Carousel, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
