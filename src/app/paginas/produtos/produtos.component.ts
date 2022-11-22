import { Component, OnInit } from '@angular/core';
import { Modelo, Montatora, Produto } from 'src/app/models/Produto';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  
  constructor(private produtoService: ProdutosService) { }
  listaProdutos: Produto[] = [];
  montadoras: Montatora[] = [];
  modelos: Modelo[] = [];

  ngOnInit(): void {
    this.getProdutos()
    this.getMontadoras()
    this.getModelos()
  }

  getProdutos(): void {
    this.produtoService.getProdutos(1).subscribe((result) => {
      this.listaProdutos = result.list
    });
  }

  getMontadoras(): void {
    this.produtoService.getMontadoras(1).subscribe((result)=> {
      this.montadoras = result.list
    });
  }

  getModelos(): void {
    this.produtoService.getModelos(1).subscribe((result)=> {
      this.modelos = result.list
    });
  }
}