import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-register-user',
  imports: [FormsModule],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css'
})
export class RegisterUserComponent {

  users: any[] = [];
  
  newUser = {
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    email: '',
    role: '',
  };

  constructor(private userService: UserService) {}
  
  addUser(): void{
    console.log(this.newUser)
    this.userService.addUser(this.newUser).subscribe({
      next: response => {
        console.log('User added', response);
        this.users.push(response);
        this.resetForm();

      },
      error: error=> console.error('Error adding User', error)
    });
  }

  resetForm(): void {
    this.newUser = {
      username: '',
      password: '',
      first_name: '',
      last_name: '',
      email: '',
      role: '',
    };
  }


}
