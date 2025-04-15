import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

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
  
}