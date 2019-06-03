import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../serviço/servico.service';

@Component({
  selector: 'app-listar-registro',
  templateUrl: './listar-registro.component.html',
  styleUrls: ['./listar-registro.component.css']
})
export class ListarRegistroComponent implements OnInit {

   dados: any[]=[];

  constructor(private servico: ServicoService) { }

  listar(){
    this.servico.listarRegistro()
                .subscribe((res:any)=>{
                    this.dados = res;
                    console.log(this.dados);
                }),
                (error)=>{
                    console.log("Erro ao listar registro");
                }
  }
  excluir(id:number){
    this.servico.deletarRegistro(id)
                .subscribe(
                 success => {
                   alert("Mensagem excluida com sucesso!")
                 },
                 error => {
                   alert("Erro ao excluir Mensagem!" +error.message)
                 },
                 () => this.listar()         
  );
  }

  ngOnInit() {
    this.listar()
  }

}
