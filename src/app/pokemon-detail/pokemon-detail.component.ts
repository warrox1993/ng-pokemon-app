import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon/pokemon.service';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';

@Component({
    selector: 'pokemon-detail',
    standalone: true,
    imports: [
        CommonModule,
        PokemonTypeColorPipe,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './pokemon-detail.html',
})
export class PokemonDetailComponent {
    private pokemonService = inject(PokemonService);

    pokemon = computed(() => {
        const pokemonId = this.pokemonService.pokemonId();
        return POKEMONS.find(p => p.id === pokemonId) ?? {} as Pokemon;
    });
}
