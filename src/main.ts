import console from 'console';

import { provideZoneChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';
import { PokemonListComponent } from './app/pokemon/pokemon-list/pokemon-list.component';

bootstrapApplication(AppComponent, {
    providers:
    [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter([
            { path: 'pokemons', component: PokemonListComponent },
            { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
            { path: '**', redirectTo: 'pokemons', pathMatch: 'full' },
        ]),
    ],
}).catch(err => console.error(err));
