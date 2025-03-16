import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  // Fetch all users
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Fetch user profile
  getUserProfile(): Observable<any> {
    return this.http.get(`${this.apiUrl}/profile`);
  }

  // Update user profile
  updateUserProfile(profile: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/profile`, profile);
  }
  // Create a new user
  createUser(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }
}