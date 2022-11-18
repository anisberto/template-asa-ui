import { Component, OnInit } from '@angular/core';
import { Catalogo } from 'src/app/models/catalogo';
import { CatalogoService } from 'src/app/services/catalogo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private catalogoServiceHome: CatalogoService) { }

  ngOnInit(): void {
    this.getAllCatalogos()
  }
  
  catalogo: Catalogo = new Catalogo()

  getAllCatalogos() {
    this.catalogoServiceHome.findAll().subscribe(resposta => this.catalogo);
  }
}
