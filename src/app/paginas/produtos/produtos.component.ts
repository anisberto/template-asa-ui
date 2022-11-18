import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produto: any[] = [];
  constructor(private produtoService: ProdutosService) { }

  ngOnInit(): void {
    this.getAllCatalogos()
  }

  getAllCatalogos() {
    this.produtoService.findAll().subscribe(produtoService => this.produto = produtoService);
  }
}