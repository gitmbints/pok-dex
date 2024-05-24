import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Pokemon } from "../pokemon";
import { PokemonService } from "../pokemon.service";

@Component({
	selector: "app-edit-pokemon",
	template: `
		<div class="edit-pokemon-form">
			<h1>Editer {{ pokemon?.name }}</h1>
			<p *ngIf="pokemon" class="img-container">
				<img [src]="pokemon.picture" alt="pokemon" />
			</p>
			<app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
		</div>
	`,
	styleUrls: ["./edit-pokemon.component.css"],
	encapsulation: ViewEncapsulation.None,
})
export class EditPokemonComponent implements OnInit {
	pokemon: Pokemon | undefined;

	constructor(
		private route: ActivatedRoute,
		private pokemonService: PokemonService
	) {}

	ngOnInit() {
		const pokemonId: string | null = this.route.snapshot.paramMap.get("id");

		if (pokemonId) {
			this.pokemonService
				.getPokemonById(+pokemonId)
				.subscribe((pokemon) => (this.pokemon = pokemon));
		} else {
			this.pokemon = undefined;
		}
	}
}
