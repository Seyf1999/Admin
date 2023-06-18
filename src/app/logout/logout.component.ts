import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}
  ngOnInit() {
    this.authenticationService.logOut();
    this.router.navigate(['login']);
  }
}
