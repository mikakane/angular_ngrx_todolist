import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Store } from '@ngxs/store';
import { TodoAction } from '../todo.actions';

@Component({
  selector: 'app-form',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss'],
})
export class FormPageComponent implements OnInit {
  todoForm = new FormGroup({
    title: new FormControl('', [
      // Validators.required, Validators.maxLength(20)
    ]),
    expire_at: new FormControl('', [
      // Validators.required
    ]),
    priority: new FormControl(null, [
      // Validators.required
    ]),
  });

  get title() {
    return this.todoForm.get('title') as AbstractControl;
  }
  get expire_at() {
    return this.todoForm.get('expire_at') as AbstractControl;
  }
  get priority() {
    return this.todoForm.get('priority') as AbstractControl;
  }

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {}

  add() {
    // Object.value dont work on stackblitz
    // Object.values(this.todoForm.controls).forEach((ctrl) => {
    //   ctrl.markAsDirty();
    // });
    if (this.todoForm.status === 'INVALID') {
      alert('フォームを入力して下さい');
      return;
    }
    setTimeout(() => {
      // for easily debugging, set dummy data instead of form value
      // this.todos.add(this.todoForm.value);
      this.store.dispatch(
        new TodoAction.Add({
          title: '引っ越しの見積もりを取る',
          expire_at: '2022-01-01',
          priority: 'high',
        })
      );
      this.router.navigateByUrl('/');
    }, 1000);
  }
}
