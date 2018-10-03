import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

@NgModule({
  imports: [
    CommonModule,
    TasksRoutingModule
  ],
  declarations: [TaskListComponent, TaskDetailComponent]
})
export class TasksModule { }
