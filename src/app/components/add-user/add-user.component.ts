import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  standalone: false,
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  user = {
    name: '',
    username: '',
    email: '',
    bio: '',
    address: '',
  };

  constructor(private userService: UserService, private router: Router) {}

  onSubmit(): void {
    this.userService.createUser(this.user).subscribe(() => {
      alert('User created successfully!');
      this.router.navigate(['/profile']); // Redirect to profile page
    });
  }
}