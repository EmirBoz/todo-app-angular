export class Model {
  user;
  items;

  constructor() {
    this.user = 'Someone';
    this.items = [
                  new TodoItem('Sport',true),
                  new TodoItem('Breakfast',false),
                  new TodoItem('Cinema',false),
                  new TodoItem('Homework',false)

    ];
  }
}

export class TodoItem {
  description;
  action;

  constructor(description :string, action:boolean) {
    this.description = description;
    this.action = action;
  }
}
