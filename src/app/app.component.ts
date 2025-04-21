import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        PokemonListComponent,
        CommonModule,
    ],
    templateUrl: './app.component.html',
})
export class AppComponent {
}
