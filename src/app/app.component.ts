import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  auth: AuthService;

  constructor(private authService: AuthService, private router: Router) { }
  
  ngOnInit() {
    this.auth = this.authService;
  }

	goToPokemonList() {
		this.router.navigate(["/pokemons"]);
  }
  
  logout() {
    this.auth.logout();
    this.router.navigate(["/login"]);
  }
}
