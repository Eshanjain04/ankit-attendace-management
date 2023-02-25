import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { MainComponent } from './component/main/main.component';
import { ResgisterComponent } from './component/resgister/resgister.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:ResgisterComponent},
  {path:'',component:MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
