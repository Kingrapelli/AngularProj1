import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { RouterModule, Routes } from '@angular/router';
import { CreatedataComponent } from './createdata/createdata.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewdataComponent } from './viewdata/viewdata.component';
const routes:Routes=[
  {
    path:'',
    component:TasksComponent
  },
  {
    path:'creating-Data',
    component:CreatedataComponent
  },
  {
    path:':id',
    component:ViewdataComponent
  }
]


@NgModule({
  declarations: [
    TasksComponent,
    CreatedataComponent,
    ViewdataComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class TasksModule { }
