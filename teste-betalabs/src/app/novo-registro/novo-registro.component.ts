import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../serviço/servico.service';

@Component({
  selector: 'app-novo-registro',
  templateUrl: './novo-registro.component.html',
  styleUrls: ['./novo-registro.component.css']
})
export class NovoRegistroComponent implements OnInit {
  obj:any[]=[];
  
  constructor(private servico: ServicoService) { }
  
  cadastrar = function(form){
    
    this.obj={
        "name": form.value.name,
        "price": form.value.price,
        "sku": form.value.sku,
    }
    console.log(this.obj);
    
    this.servico.gravarRegistro(this.obj)
    .subscribe(
        success => alert("Cadastrado com sucesso!"),
       
        error => alert("Erro ao cadastrar! "+ error.message),

        (success) => form.reset()
      
     );
    
  }
  

  ngOnInit() {
    
  }

}
