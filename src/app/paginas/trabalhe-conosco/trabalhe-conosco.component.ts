import { Component, OnInit } from '@angular/core';
import { TrabalheConosco } from 'src/app/models/trabalheConosco';
import { TrabalheConoscoService } from 'src/app/services/trabalheConosco.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-trabalhe-conosco',
  templateUrl: './trabalhe-conosco.component.html',
  styleUrls: ['./trabalhe-conosco.component.css']
})
export class TrabalheConoscoComponent implements OnInit {

  constructor(private trabalheConoscoService: TrabalheConoscoService) { }

  ngOnInit(): void {
  }

  trabalheConosco: TrabalheConosco = new TrabalheConosco()

  enviarDados(): void {

    if (this.trabalheConosco.name == '' || this.trabalheConosco.name == null) {

      swal({title:"Insira o nome!", icon:"error"});

    } else if (this.trabalheConosco.email == '' || this.trabalheConosco.email == null) {

        swal({title:"Insira o e-mail!", icon:"error"});

      } else if (this.trabalheConosco.phone == '' || this.trabalheConosco.phone == null) {

        swal({title:"Insira o telefone!", icon:"error"});

      } else if (this.trabalheConosco.message == '' || this.trabalheConosco.message == null) {

        swal({title:"Insira a menssagem!", icon:"error"});
        
      } else {
      this.trabalheConoscoService.createContato(this.trabalheConosco).subscribe((resposta) => {
      });
      swal({title:"Currículo enviado com sucesso!", icon:"success"});
    }
  }
}
