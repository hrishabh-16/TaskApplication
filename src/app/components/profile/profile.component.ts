import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormBuilder,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  user: any;

  constructor(private userService: UserService, private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      name: [''],
      username: [''],
      email: [''],
      bio: [''],
      address: [''],
    });
  }

  ngOnInit(): void {
    this.fetchUserProfile();
  }

  fetchUserProfile(): void {
    this.userService.getUserProfile().subscribe((data) => {
      this.user = data;
      this.profileForm.patchValue(data);
    });
  }

  saveProfile(): void {
    this.userService.updateUserProfile(this.profileForm.value).subscribe(() => {
      alert('Profile updated successfully!');
    });
  }
}