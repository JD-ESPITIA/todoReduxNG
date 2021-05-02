import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
// import { create } from '../todo.actions';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  txtInput: FormControl;

  constructor(
    private store: Store<AppState>
  ) { 
    this.txtInput = new FormControl('', Validators.required);
  }

  ngOnInit(): void {
  }

  agregar(){
    // console.log(this.txtInput.value);
    // console.log(this.txtInput.valid);
    if (this.txtInput.invalid) {
      return;
    }

    this.store.dispatch(actions.create({texto: this.txtInput.value}));
  }
}
