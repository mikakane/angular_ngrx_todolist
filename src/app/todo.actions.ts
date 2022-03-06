export namespace TodoAction {
  export class Add {
    static readonly type = '[Todo] Add';
    constructor(public todo: any) {}
  }

  export class GetAll {
    static readonly type = '[Todo] GetAll';
  }
}
