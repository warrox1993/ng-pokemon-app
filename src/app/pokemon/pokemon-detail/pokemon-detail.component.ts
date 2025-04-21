import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { POKEMONS } from '../../mock-pokemon-list';
import { Pokemon } from '../../pokemon';
import { PokemonTypeColorPipe } from '../../pokemon-type-color.pipe';

@Component({
    selector: 'pokemon-detail',
    standalone: true,
    imports: [
        CommonModule,
        PokemonTypeColorPipe,
    ],
    templateUrl: './pokemon-detail.html',
})
export class PokemonDetailComponent implements OnChanges {
    @Input() pokemonId: number | null = null;

    pokemon: Pokemon | undefined;

    ngOnChanges(changes: SimpleChanges): void {
        const id = changes['pokemonId'].currentValue;
        this.pokemon = POKEMONS.find(p => p.id === id);
    }
}
