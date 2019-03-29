import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

interface IAbility {
  name: string;
}

interface IAbilities {
  ability: IAbility;
}
interface IDetails {
  name: string;
  abilities: IAbilities[];
}
@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
  pokemonID;
  abilities: IDetails={name:'',abilities:[]};
  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.route.params.subscribe(param => { this.pokemonID = param.id });
  }

  ngOnInit() {
    this.loadDetail();
  }
  async loadDetail() {
    this.abilities = (await this.http.get<IDetails>(`https://pokeapi.co/api/v2/pokemon/${this.pokemonID}/`).toPromise());
    console.log(this.abilities);
  }
}
