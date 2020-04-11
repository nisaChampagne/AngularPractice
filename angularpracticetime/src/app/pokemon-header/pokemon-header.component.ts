import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Results } from 'src/interfaces'


@Component({
  selector: 'app-pokemon-header',
  templateUrl: './pokemon-header.component.html',
  styleUrls: ['./pokemon-header.component.sass']
})
export class PokemonHeaderComponent implements OnInit {

  @Output() searchChange = new EventEmitter();
  @Output() typeSelected = new EventEmitter();
  @Output() abilitiesSelected = new EventEmitter();

  abilities: Array<string>;
  types: Array<string>;
  pokemonList:  Array<Results>;
  search: string;
  currentType: string;
  currentAbilities: Array<string>;

  @Input() set pokemons(pokemons: Results[]){
    if(pokemons !== this.pokemonList){
      this.pokemonList = pokemons;

      //types and abilities
      this.pokemonList.forEach(pokemon => {
        this.setPokemonAbilities(pokemon)
        this.setPokemonTypes(pokemon)
      });
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.abilities = [];
    this.types= [];
  }

  searchEvent(search){

  }

  onTypeSelected(){

  }

  onAbilitySelected(){

  }

  setPokemonAbilities(pokemon: Results): void{

  }

  setPokemonTypes(pokemon: Results): void{

  }

}
