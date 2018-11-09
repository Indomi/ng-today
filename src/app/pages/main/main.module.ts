import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { LeftControlComponent } from './left-control/left-control.component';
import { ListService } from 'src/app/services/list/list.service';
import { TodoService } from 'src/app/services/todo/todo.service';
import { ListComponent } from './left-control/list/list.component';

@NgModule({
  declarations: [MainComponent, LeftControlComponent, ListComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule
  ],
  providers: [ ListService, TodoService ]
})
export class MainModule { }
