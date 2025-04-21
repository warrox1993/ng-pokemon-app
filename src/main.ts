import { provideZoneChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';
import { PokemonListComponent } from './app/pokemon-list/pokemon-list.component';

bootstrapApplication(AppComponent, {
    providers:
    [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter([
            { path: 'pokemons', component: PokemonListComponent },
            { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
            { path: '**', component: PageNotFoundComponent },
        ]),
    ],
}).catch(err => console.error(err));
