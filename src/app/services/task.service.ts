import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {}

  // Fetch all tasks
  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Add a new task
  addTask(task: any): Observable<any> {
    return this.http.post(this.apiUrl, task);
  }

  // Update a task
  updateTask(id: number, task: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, task);
  }

  // Delete a task
  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}