import { Component } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    model=new Model();
    isDisplay=false;

    getName(){
        return this.model.user;
    }
    getItems(){
      if(this.isDisplay){
        //isDisplay true olarsa
        return this.model.items;
      }
      // action-ni true olanlar silinsin!
        return this.model.items.filter(item=>!item.action);
    }
    addItem(value:any){
      if(value!=""){
        this.model.items.push(new TodoItem(value,false));
      }
    }
  }