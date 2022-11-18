import { TrabalheConoscoComponent } from './paginas/trabalheConosco/trabalheConosco.component';
import { ContatoComponent } from './paginas/contato/contato.component';
import { HomeComponent } from './paginas/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './paginas/produtos/produtos.component';
import { EmpresaComponent } from './paginas/empresa/empresa.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { MapaGeralComponent } from './components/mapa-geral/mapa-geral.component';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'trabalheconosco', component: TrabalheConoscoComponent},
  {path:'contato', component: ContatoComponent},
  {path:'produtos', component: ProdutosComponent},
  {path:'empresa', component: EmpresaComponent},
  {path:'mapa', component: MapaComponent},
  {path:'mapa-geral', component: MapaGeralComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
