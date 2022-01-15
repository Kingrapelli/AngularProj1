import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=>
      import('./home/home.module').then(m=>{
        return m.HomeModule
      })
  },
  {
    path:'tasks',
    loadChildren:()=>
      import('./tasks/tasks.module').then(m=>{
        return m.TasksModule
      })
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
