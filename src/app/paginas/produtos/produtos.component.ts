import { Component, OnInit } from '@angular/core';
import { CatalogoService } from 'src/app/services/catalogo.service';
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
    this.getAllProdutos()
  }

  getAllProdutos() {
    this.produtoService.findAll().subscribe(produtoService => this.produto = produtoService);
  }

}