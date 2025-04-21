import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { BorderCardDirective } from '../border-card.directive';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';

@Component({
    selector: 'pokemon-list',
    standalone: true,
    imports: [
        CommonModule,
        BorderCardDirective,
        PokemonTypeColorPipe,
    ],
    templateUrl: './pokemon-list.html',
})
export class PokemonListComponent {
    pokemonList: Pokemon[] = POKEMONS;
    filteredList: Pokemon[] = POKEMONS;

    constructor(private router: Router) {}

    onSearch(event: Event): void {
        const input = (event.target as HTMLInputElement).value.trim().toLowerCase();

        if (!input) {
            this.filteredList = [...this.pokemonList];
            return;
        }

        this.filteredList = this.pokemonList.filter(p => p.name.toLowerCase().includes(input) ||
      p.id.toString() === input
        );
    }

    goToDetail(id: number): void {
        this.router.navigate([
            '/pokemons',
            id,
        ]);
    }
}
