import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { TodoService } from '../todo.service';
import { TodoState } from '../todo.state';

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.css'],
})
export class TopPageComponent implements OnInit {
  @Select(TodoState) todolist$: Observable<any[]>;
  constructor(private store: Store) {}

  ngOnInit() {}
}
