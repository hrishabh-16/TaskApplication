import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  tasks: any[] = [];
  users: any[] = [];
  completedTasksCount: number = 0;

  constructor(private taskService: TaskService, private userService: UserService) {}

  ngOnInit(): void {
    this.fetchTasks();
    this.fetchUsers();
  }

  fetchTasks(): void {
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data;
      this.completedTasksCount = this.tasks.filter((task) => task.completed).length;
    });
  }

  fetchUsers(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id).subscribe(() => {
      this.tasks = this.tasks.filter((task) => task.id !== id);
      this.completedTasksCount = this.tasks.filter((task) => task.completed).length;
    });
  }
}