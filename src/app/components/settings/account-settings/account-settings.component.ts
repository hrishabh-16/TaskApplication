import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-settings',
  standalone: false,
  templateUrl: './account-settings.component.html',
  styleUrl: './account-settings.component.css'
})
export class AccountSettingsComponent {
  accountForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.accountForm = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  saveAccountSettings(): void {
    if (this.accountForm.valid) {
      console.log(this.accountForm.value);
    }
  }
}