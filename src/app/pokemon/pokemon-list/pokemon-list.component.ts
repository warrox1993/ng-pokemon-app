import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

import { BorderCardDirective } from '../../border-card.directive';
import { POKEMONS } from '../../mock-pokemon-list';
import { Pokemon } from '../../pokemon';
import { PokemonTypeColorPipe } from '../../pokemon-type-color.pipe';

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

    @Output() onPokemonSelected: EventEmitter<number> = new EventEmitter<number>();

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
        this.onPokemonSelected.emit(id);
    }
}
