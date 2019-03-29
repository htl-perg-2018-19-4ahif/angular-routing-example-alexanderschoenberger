import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface IPokemon {
  name: string;
  url: string;
}
interface IList {
  count: number;
  results: IPokemon[];
}
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})

export class PokemonListComponent implements OnInit {

  pokemons: IPokemon[];
  search:string="";

  constructor(private http: HttpClient) {
    
  }
  
  ngOnInit() {
    this.loadPokemons();
  }
async loadPokemons() {
    let count: IList = await this.http.get<IList>('https://pokeapi.co/api/v2/pokemon').toPromise();
    this.pokemons = (await this.http.get<IList>('https://pokeapi.co/api/v2/pokemon/?limit=' + count.count).toPromise()).results;
    console.log(this.pokemons);
  }
  searchChanged(value:string){
    this.search=value;
  }
}
