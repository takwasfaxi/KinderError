import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'Kindergarten SaaS';

  currentSlide = 0;
  totalSlides = 3;  // Le nombre total de slides

  moveSlide(direction: number) {
    this.currentSlide = (this.currentSlide + direction + this.totalSlides) % this.totalSlides;
    const carouselContainer = document.querySelector('.carousel-container') as HTMLElement;
    if (carouselContainer) {
      carouselContainer.style.transform = `translateX(-${this.currentSlide * 100}%)`;
    }
  }
}

