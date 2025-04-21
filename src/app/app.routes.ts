import { Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  {path :'pokemons', component: PokemonListComponent},
  {path :'pokemons/:id', component: PokemonDetailComponent},
  {path: '', redirectTo: 'pokemons', pathMatch:'full' },
  {path: '**', component: PageNotFoundComponent }

];

export class AppRoutingModule { }
