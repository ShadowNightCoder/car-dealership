import { BehaviorSubject } from "rxjs";
import { user } from "../interface/user.interface";


export class localStroageService {
    private loggedUserSubject = new BehaviorSubject<boolean>(this.isUserLoggedIn());


    setUserInLocalStroage(user: user) {
        localStorage.setItem("loggedUser", user.email);
        this.loggedUserSubject.next(true); 
    }

    getLoggedUser() {
        return localStorage.getItem("loggedUser");
    }

    isUserLoggedIn(): boolean {
        return this.getLoggedUser() !== null;
    }

    removeUserFromLocalStorage() {
        localStorage.removeItem("loggedUser");
        this.loggedUserSubject.next(false);

    }

    getLoggedUserObservable() {
        return this.loggedUserSubject.asObservable();
    }
}