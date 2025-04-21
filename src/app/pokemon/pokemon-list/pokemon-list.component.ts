import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { BorderCardDirective } from '../../border-card.directive';
import { POKEMONS } from '../../mock-pokemon-list';
import { Pokemon } from '../../pokemon';
import { PokemonTypeColorPipe } from '../../pokemon-type-color.pipe';
import { PokemonService } from '../pokemon.service';

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
    private pokemonService = inject(PokemonService);

    pokemonList: Pokemon[] = POKEMONS;
    filteredList: Pokemon[] = POKEMONS;

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

    selectPokemon(id: number): void {
        this.pokemonService.setPokemonId(id);
    }
}
