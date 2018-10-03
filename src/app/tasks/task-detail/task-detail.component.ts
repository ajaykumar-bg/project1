import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Task } from '../task';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  editTaskForm: FormGroup;
  @Input() task: Task;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private taskService: TaskService,
    private location: Location
  ) { }

  ngOnInit() {
    this.editTaskForm = this.fb.group({
      id: ['', [
      ]],
      name: ['', [
        Validators.required
      ]]
    });
    this.getTask();
  }

  getTask(): void {
    const taskId = +this.route.snapshot.paramMap.get('id');
    this.taskService.getTask(+taskId)
      .subscribe( data => {
        this.editTaskForm.setValue(data);
      });
  }

  goBack(): void {
    this.router.navigate(['tasks']);
  }

  save(): void {
    this.taskService.updateTask(this.editTaskForm.value)
      .subscribe(() => this.goBack());
  }

}
