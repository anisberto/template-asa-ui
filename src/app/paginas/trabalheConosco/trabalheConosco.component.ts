import { Component, OnInit } from '@angular/core';
import { ListaTrablheConosco, TrabalheConosco } from 'src/app/models/trabalheConosco';
import { TrabalheConoscoService } from 'src/app/services/trabalheConosco.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-trabalheConosco',
  templateUrl: './trabalheConosco.component.html',
  styleUrls: ['./trabalheConosco.component.css']
})
export class TrabalheConoscoComponent implements OnInit {

  constructor(private trabalheConoscoService: TrabalheConoscoService) { }

  ngOnInit(): void {
    this.getTrabalheConosco()
  }
  listaTrablheConosco: ListaTrablheConosco = new ListaTrablheConosco()
  trabalheConosco: TrabalheConosco = new TrabalheConosco()

  getTrabalheConosco() {
    this.trabalheConoscoService.findAll().subscribe((result)=> {
      this.listaTrablheConosco = result
    }); 
  }

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

  inputFileChange(event: any) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        formData.append('uploadFile', file, file.name);
        let filedoc = document.querySelector<any>("#workForm #file").files
        this.trabalheConosco.file = filedoc[0]
    }
    console.log(this.inputFileChange)
  }

}
