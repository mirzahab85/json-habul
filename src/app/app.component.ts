// ANGULAR
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

//API
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(
    private userService: UserService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (typeof NavigationEnd) {
        // console.log(event);
      }
    });
  }

  ngOnDestroy(): void {

  }

}
