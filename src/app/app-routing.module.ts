import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AccountSettingsComponent } from './components/settings/account-settings/account-settings.component';
import { PrivacySettingsComponent } from './components/settings/privacy-settings/privacy-settings.component';
import { AddUserComponent } from './components/add-user/add-user.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'add-user', component: AddUserComponent },
    {
      path: 'settings',
      component: SettingsComponent,
      children: [
        { path: 'account', component: AccountSettingsComponent },
        { path: 'privacy', component: PrivacySettingsComponent },
      ],
    },
    { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
