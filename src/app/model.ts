export class Model{
    user;
    items;
  constructor(){
    this.user='Jalal';
    this.items=[
        new TodoItem("Breakfast",true),
        new TodoItem("Sport",false),
        new TodoItem("Reading",false),
        new TodoItem("Walking",false)
    ];
  }
}

export class TodoItem{
    description;
    action;
    constructor(description:any,action:any){
        this.description=description;
        this.action=action;
    }
}

