import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterModule, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  proprietorLoggedIn: boolean = false;
  buyerLoggedIn: boolean = true;
  adminLoggedIn: boolean = false;
  agentLoggedIn: boolean = false;
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.user$.subscribe(user => {
      if (user === "proprietor") {
        this.proprietorLoggedIn = true;
        this.buyerLoggedIn = false;
        this.adminLoggedIn = false;
        this.agentLoggedIn = false;
      }
      else if (user === "buyer") {
        this.proprietorLoggedIn = false;
        this.buyerLoggedIn = true;
        this.adminLoggedIn = false;
        this.agentLoggedIn = false;
      }
      else if (user === "admin") {  
        this.proprietorLoggedIn = false;
        this.buyerLoggedIn = false;
        this.adminLoggedIn = true;
        this.agentLoggedIn = false;
      }
      else if (user === "agent") {
        this.proprietorLoggedIn = false;
        this.buyerLoggedIn = false;
        this.adminLoggedIn = false;
        this.agentLoggedIn = true;
      }
    });
  }
}