import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class PokemonService {
    public pokemonId = signal<number>(0);
}
