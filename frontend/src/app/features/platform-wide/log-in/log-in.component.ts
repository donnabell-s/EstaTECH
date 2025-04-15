import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  imports: [ReactiveFormsModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  loginForm!: FormGroup;
  users: {username: string, password: string}[] = [
    {  username: 'admin', password: 'admin' },
    {  username: 'buyer', password: 'buyer' },
    {  username: 'proprietor', password: 'proprietor' },
    {  username: 'agent', password: 'agent' },
  ]

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router){
    
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  onSubmit() {
    for (let user of this.users) {
      if (user.username === this.loginForm.value.username) {
        this.userService.setUser(user.username);
        if (user.username === 'proprietor') {
          this.router.navigate([`/proprietor/profile-setup`]);
        } else {
          this.router.navigate([`/dashboard`]);
        }
        break;
      }
    }
  }
}
