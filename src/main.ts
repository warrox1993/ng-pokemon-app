import console from 'console';

import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';
import { PokemonListComponent } from './app/pokemon-list/pokemon-list.component';

bootstrapApplication(AppComponent, {
    providers:
    [
        provideExperimentalZonelessChangeDetection(),
        provideRouter([
            { path: 'pokemons', component: PokemonListComponent },
            { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
            { path: '**', redirectTo: 'pokemons', pathMatch: 'full' },
        ]),
    ],
}).catch(err => console.error(err));
