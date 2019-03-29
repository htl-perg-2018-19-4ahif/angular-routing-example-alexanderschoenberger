import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PokemonDetailsComponent} from './pokemon-details/pokemon-details.component';
import {PokemonListComponent} from './pokemon-list/pokemon-list.component';

const routes: Routes = [
  {path: 'pokemons', component: PokemonListComponent},
  {path: 'pokemons/:id', component:  PokemonDetailsComponent},
  {path: '', redirectTo: '/pokemons', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }