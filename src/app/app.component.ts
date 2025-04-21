import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { PokemonDetailComponent } from './pokemon/pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        PokemonListComponent,
        PokemonDetailComponent,
        CommonModule,
    ],
    templateUrl: './app.component.html',
})
export class AppComponent {
    public selectedPokemonId: number | null = null;

    public onPokemonSelected(id: number): void {
        this.selectedPokemonId = id;
    }
}
