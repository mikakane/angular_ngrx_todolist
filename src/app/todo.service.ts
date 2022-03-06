import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todolist = [
    {title:"牛乳を買いに行く",expire_at:"2022/01/05",priority:"high"},
    {title:"本を読み切る",expire_at:"2022/01/05",priority:"high"},
    {title:"部屋を片付ける",expire_at:"2022/01/05",priority:"normal"},
  ]

  constructor() { }

  add(form: any) {
    this.todolist.push({...form})
  }
}
