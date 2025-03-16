import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-privacy-settings',
  standalone: false,
  templateUrl: './privacy-settings.component.html',
  styleUrl: './privacy-settings.component.css'
})
export class PrivacySettingsComponent {
  privacyForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.privacyForm = this.fb.group({
      shareData: [''],
      marketingEmails: [''],
    });
  }

  savePrivacySettings(): void {
    console.log(this.privacyForm.value);
  }
}