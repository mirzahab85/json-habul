// ANGULAR
import { Component, OnInit, OnDestroy } from '@angular/core';

// RxJS 6
import { Observable, Subscription } from 'rxjs';

// API
import { IUserDTO, UserDOM } from '../models/user.model'
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit, OnDestroy {

  public users: any[] = [];
  public asObss: Observable<any> = this.userService.getAllUsers();
  private subs: Subscription = new Subscription();

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.asObss = this.userService.getAllUsers();
    this.subs.add(
      this.userService.getAllUsers().subscribe((users: any[]) => {
        // this.users = users;
        users.forEach((user: IUserDTO) => {
          const userDOM: UserDOM = new UserDOM(user);
          this.users.push(userDOM);

        });
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
