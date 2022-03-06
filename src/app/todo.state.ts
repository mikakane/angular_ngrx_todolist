import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { TodoAction } from './todo.actions';

@State<any[]>({
  name: 'todos',
  defaults: [
    { title: '牛乳を買いに行く', expire_at: '2022/01/05', priority: 'high' },
    { title: '本を読み切る', expire_at: '2022/01/05', priority: 'high' },
    { title: '部屋を片付ける', expire_at: '2022/01/05', priority: 'normal' },
  ],
})
@Injectable()
export class TodoState {
  constructor() {}

  @Action(TodoAction.GetAll)
  getAll(ctx: StateContext<any[]>) {
    const state = ctx.getState();
    return state;
  }

  @Action(TodoAction.Add)
  addHero(ctx: StateContext<any[]>, action: TodoAction.Add) {
    const state = ctx.getState();
    state.push(action.todo);
    ctx.setState(state);
  }
}
