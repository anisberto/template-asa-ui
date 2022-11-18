import { Component, OnInit } from '@angular/core';
import { CatalogoDeProdutos } from 'src/app/models/catalogoDeProdutos';
import { CatalogoServiceService } from 'src/app/services/catalogoService.service';

@Component({
  selector: 'app-catalogo-de-produtos',
  templateUrl: './catalogo-de-produtos.component.html',
  styleUrls: ['./catalogo-de-produtos.component.css']
})
export class CatalogoDeProdutosComponent implements OnInit {

  constructor(private catalogoService: CatalogoServiceService) { }

  ngOnInit(): void {
    this.getAllCatalogos()
  }
  
  catalogoDeProdutos: CatalogoDeProdutos = new CatalogoDeProdutos()

  getAllCatalogos() {
    this.catalogoService.findAll().subscribe(resposta => this.catalogoDeProdutos);
  }
}