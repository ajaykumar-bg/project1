import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Task } from '../task';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  addTaskForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private taskService: TaskService,
    private location: Location
  ) { }

  ngOnInit() {
    this.addTaskForm = this.fb.group({
      id: ['', [
      ]],
      name: ['', [
        Validators.required
      ]]
    });
  }

  save() {
    this.taskService.addTask(this.addTaskForm.value)
      .subscribe( data => {
        this.router.navigate(['tasks']);
      });
  }

}
