// ANGULAR
import { Component, OnDestroy, OnInit } from '@angular/core';

//API
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }

}
