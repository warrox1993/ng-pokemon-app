import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';
import { CommonModule } from '@angular/common';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';

@Component({
  selector: 'pokemon-detail',
  standalone: true,
  imports: [CommonModule, PokemonTypeColorPipe],
  templateUrl: './pokemon-detail.html'
})
export class PokemonDetailComponent implements OnInit {
  pokemon: Pokemon | undefined;
  pokemonList : Pokemon[];

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pokemon = POKEMONS.find(p => p.id === id);
  }

  goBack(): void {
    this.location.back();
  }
}
