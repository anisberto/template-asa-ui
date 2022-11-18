import swal from 'sweetalert';
import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/models/contato';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor(private contatoService: ContatoService) { }

  ngOnInit(): void {
  }

  contato: Contato = new Contato()

  enviarDados(): void {

    if (this.contato.name == '' || this.contato.name == null) {

      swal({title:"Insira o nome!", icon:"error"});

    } else if (this.contato.email == '' || this.contato.email == null) {

        swal({title:"Insira o e-mail!", icon:"error"});

      } else if (this.contato.phone == '' || this.contato.phone == null) {

        swal({title:"Insira o telefone!", icon:"error"});

      } else if (this.contato.description == '' || this.contato.description == null) {

        swal({title:"Insira a menssagem!", icon:"error"});
        
      } else {
      this.contatoService.createContato(this.contato).subscribe((resposta) => {
      });
      swal({title:"Contato enviado com sucesso!", icon:"success"});
    }
  }
}
