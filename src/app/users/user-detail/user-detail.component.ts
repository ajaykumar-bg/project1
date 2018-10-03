import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from '../user';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  editUserForm: FormGroup;
  @Input() user: User;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) { }

  ngOnInit() {
    this.editUserForm = this.fb.group({
      id: ['', [
      ]],
      firstName: ['', [
        Validators.required
      ]],
      lastName: ['', [
      ]],
      age: [null, [
        Validators.required,
        Validators.minLength(2),
        Validators.min(1),
        Validators.max(100)
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
    });
    this.getUser();
  }

  getUser(): void {
    const userId = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(+userId)
      .subscribe( data => {
        this.editUserForm.setValue(data);
      });
  }

  goBack(): void {
    this.router.navigate(['users']);
  }

  update(): void {
    this.userService.updateUser(this.editUserForm.value)
      .subscribe(() => this.goBack());
  }

}
