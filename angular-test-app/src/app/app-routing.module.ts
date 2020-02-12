import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyTestComponent } from './my-test/my-test.component';


const routes: Routes = [
  { path: 'myTest', component: MyTestComponent },
  { path: '**', redirectTo: 'myTest' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
