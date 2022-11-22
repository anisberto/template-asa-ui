import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './paginas/header/header.component';
import { HomeComponent } from './paginas/home/home.component';
import { FooterComponent } from './paginas/footer/footer.component';
import { EmpresaComponent } from './paginas/empresa/empresa.component';
import { ProdutosComponent } from './paginas/produtos/produtos.component';
import { TrabalheConoscoComponent } from './paginas/trabalheConosco/trabalheConosco.component';
import { ContatoComponent } from './paginas/contato/contato.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TabelaComponent } from './components/tabela/tabela.component';
import { GraficoComponent } from './components/grafico/grafico.component';
import { ModalComponent } from './components/modal/modal.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms'

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        FooterComponent,
        EmpresaComponent,
        ProdutosComponent,
        TrabalheConoscoComponent,
        ContatoComponent,
        CarouselComponent,
        FormularioComponent,
        TabelaComponent,
        GraficoComponent,
        ModalComponent,
        MapaComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
    ]
})
export class AppModule { }
