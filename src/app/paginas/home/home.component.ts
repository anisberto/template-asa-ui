import { Component, OnInit } from '@angular/core';
import { Catalogo } from 'src/app/models/catalogo';
import { CatalogoService } from 'src/app/services/catalogo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  catalogo: any[] = [];
  constructor(private catalogoService: CatalogoService) { }

  ngOnInit(): void {
    this.getAllCatalogos()
  }

  getAllCatalogos() {
    this.catalogoService.findAll().subscribe(catalogoService => this.catalogo = catalogoService);
  }
}
