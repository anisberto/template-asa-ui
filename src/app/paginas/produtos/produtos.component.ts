import { Component, OnInit } from '@angular/core';
import { ListaModelos, ListaMontadoras, Produto } from 'src/app/models/Produto';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  
  constructor(private produtoService: ProdutosService) { }
  listaMontadoras: ListaMontadoras = new ListaMontadoras();
  listaModelos: ListaModelos = new ListaModelos();
  produtos: Produto = new Produto()
  ngOnInit(): void {
    this.createMontadoras()
    this.createModelos()
    this.createProdutos()
  }

  createProdutos(): void {
    this.produtoService.createProdutos(this.produtos).subscribe((resposta)=> {
      
    })
  }

  createMontadoras(): void {
    this.produtoService.createMontadoras(this.listaMontadoras).subscribe((produtoService)=> {
      this.listaMontadoras = produtoService
    });
  }

  createModelos(): void {
    this.produtoService.createModelos(this.listaModelos).subscribe((resposta)=> {
      
    })
  }
}