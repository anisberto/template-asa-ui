import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './paginas/header/header.component';
import { HomeComponent } from './paginas/home/home.component';
import { FooterComponent } from './paginas/footer/footer.component';
import { AEmpresaComponent } from './paginas/a-empresa/a-empresa.component';
import { CatalogoDeProdutosComponent } from './paginas/catalogo-de-produtos/catalogo-de-produtos.component';
import { TrabalheConoscoComponent } from './paginas/trabalhe-conosco/trabalhe-conosco.component';
import { ContatoComponent } from './paginas/contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AEmpresaComponent,
    CatalogoDeProdutosComponent,
    TrabalheConoscoComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
