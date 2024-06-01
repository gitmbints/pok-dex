import { FormsModule } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Pokemon } from "../pokemon";

@Component({
	selector: "app-add-pokemon",
  template: `
    <div class="add-pokemon-form">
      <h1>Ajouter un pokémon</h1>
      <app-pokemon-form [pokemon]="pokemon"></app-pokemon-form>
    </div>
	`,
  styleUrls: ["./add-pokemon.component.css"],
	encapsulation: ViewEncapsulation.None,
})
export class AddPokemonComponent implements OnInit {
	pokemon: Pokemon;

	ngOnInit(): void {
		this.pokemon = new Pokemon();
	}
}
