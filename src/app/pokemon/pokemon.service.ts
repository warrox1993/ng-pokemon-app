import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class PokemonService {
    public onPokemonSelected: EventEmitter<number> = new EventEmitter<number>();

    public setPokemonId(id: number): void {
        this.onPokemonSelected.emit(id);
    }
}
