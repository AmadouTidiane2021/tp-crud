import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/classes/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  users: Array<User> = new Array<User>();
  constructor(private userService: UserService, private router: Router) { }
  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.userService.getAllUsers().subscribe(data => {
      console.log(data);
      this.users = data;
    });
    // console.log(this.users);
  }
}
