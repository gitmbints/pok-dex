import { Injectable } from "@angular/core";
import { delay, Observable, of, tap } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class AuthService {
	isLoggedIn: boolean = false;
	redirectUrl: string;

	constructor() {
		this.isLoggedIn = this.checkLoggedIn();
	}

	login(name: string, password: string): Observable<boolean> {
		const isLoggedIn = name === "pikachu" && password === "pikachu";

		if (isLoggedIn) {
			localStorage.setItem('isLoggedIn', 'true');
		}

		return of(isLoggedIn).pipe(
			delay(1000),
			tap((isLoggedIn) => (this.isLoggedIn = isLoggedIn))
		);
	}

	logout() {
		localStorage.removeItem('isLoggedIn');
		this.isLoggedIn = false;
	}

	private checkLoggedIn(): boolean {
		return localStorage.getItem('isLoggedIn') === 'true';
	}
}
