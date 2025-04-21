import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './page-not-found.component.html',
  styles: [`
    .not-found-container {
      margin-top: 5vh;
      padding: 2rem;
    }

    .pikachu-img {
      width: 100%;
    }
  `]
})
export class PageNotFoundComponent {}

