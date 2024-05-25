import { Component } from '@angular/core';
import { localStroageService } from '../service/localstorage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  loggedUser : boolean = false;
  private subscription: Subscription | undefined;


  constructor(private localstorageservice: localStroageService){}

  ngOnInit() {
    this.subscription = this.localstorageservice.getLoggedUserObservable()
      .subscribe((isLoggedIn: boolean) => {
        this.loggedUser = isLoggedIn;
      });
  }

  logout(){
    this.localstorageservice.removeValueFromLocalStorage('loggedUser');
  }


  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
