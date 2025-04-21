import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';

import { POKEMONS } from '../../mock-pokemon-list';
import { Pokemon } from '../../pokemon';
import { PokemonTypeColorPipe } from '../../pokemon-type-color.pipe';
import { PokemonService } from '../pokemon.service';

@Component({
    selector: 'pokemon-detail',
    standalone: true,
    imports: [
        CommonModule,
        PokemonTypeColorPipe,
    ],
    templateUrl: './pokemon-detail.html',
})
export class PokemonDetailComponent implements OnInit {
    private pokemonService = inject(PokemonService);

    pokemon: Pokemon | undefined;

    ngOnInit(): void {
        this.pokemonService.onPokemonSelected.subscribe(id => {
            this.pokemon = POKEMONS.find(p => p.id === id);
        });
    }
}
