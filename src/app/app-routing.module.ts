import { TrabalheConoscoComponent } from './paginas/trabalhe-conosco/trabalhe-conosco.component';
import { ContatoComponent } from './paginas/contato/contato.component';
import { HomeComponent } from './paginas/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'trabalheconosco', component: TrabalheConoscoComponent},
  {path:'contato', component: ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
