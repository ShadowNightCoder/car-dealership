import { BehaviorSubject } from "rxjs";
import { user } from "../interface/user.interface";


export class localStroageService {
    private loggedUserSubject = new BehaviorSubject<boolean>(this.isUserLoggedIn());


    setUserInLocalStroage(user: user) {
        localStorage.setItem("loggedUser", user.email);
        this.loggedUserSubject.next(true); 
    }

    getValueFromLocalStorage(key: string) {
        return localStorage.getItem(key);
    }

    isUserLoggedIn(): boolean {
        return this.getValueFromLocalStorage('loggedUser') !== null;
    }

    removeValueFromLocalStorage(key: string) {
        localStorage.removeItem(key);
        this.loggedUserSubject.next(false);
    }

    setFormsData(key: string, value: string) {
        localStorage.setItem(key, value);
      }

    appendToLocalStorage(key: string, newValue: string) {
        let currentData = this.getValueFromLocalStorage(key);
        if (!currentData) {
          currentData = newValue;
        } else {
          currentData = `${currentData},${newValue}`;
        }
        this.setFormsData(key, currentData);
      }


    getLoggedUserObservable() {
        return this.loggedUserSubject.asObservable();
    }
}