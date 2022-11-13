import { TrabalheConoscoComponent } from './paginas/trabalhe-conosco/trabalhe-conosco.component';
import { ContatoComponent } from './paginas/contato/contato.component';
import { HomeComponent } from './paginas/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoDeProdutosComponent } from './paginas/catalogo-de-produtos/catalogo-de-produtos.component';
import { AEmpresaComponent } from './paginas/a-empresa/a-empresa.component';
import { UltimosLancamentosComponent } from './paginas/ultimos-lancamentos/ultimos-lancamentos.component';
import { SacComponent } from './paginas/sac/sac.component';
import { MapaComponent } from './components/mapa/mapa.component';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'trabalheconosco', component: TrabalheConoscoComponent},
  {path:'contato', component: ContatoComponent},
  {path:'catalogo-de-produtos', component: CatalogoDeProdutosComponent},
  {path:'a-empresa', component: AEmpresaComponent},
  {path:'ultimos-lancamentos', component: UltimosLancamentosComponent},
  {path:'sac', component: ContatoComponent},
  {path:'mapa', component: MapaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
