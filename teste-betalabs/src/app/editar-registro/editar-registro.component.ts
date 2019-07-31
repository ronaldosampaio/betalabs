import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../serviço/servico.service';
import { ActivatedRoute, Router } from '@angular/router';
declare var $: any;
declare var M: any;

@Component({
   selector: 'app-editar-registro',
   templateUrl: './editar-registro.component.html',
   styleUrls: ['./editar-registro.component.css']
})
export class EditarRegistroComponent implements OnInit {

   title ="Editar Produto";
   id: number;
   obj:any[]=[];
   produtoId: any={};

   constructor(private servico: ServicoService,
               private router: Router, 
              private route: ActivatedRoute) { }

   obterIdUrl(){
      this.route.params.subscribe((params: any) => {  
           this.id = params['id'];//obter parametro id da url

           this.servico.getRegistroId(this.id).subscribe((data:any)=>{
               this.produtoId = data; // obter id da url com os dados do unico id
               console.log(this.produtoId)
           });
      })
   }
  
   //put dados atualizado
  editar = function(form){
      this.obj={
          "id":    this.produtoId.id,
          "name":  this.produtoId.name,
          "price": this.produtoId.price,
          "sku":   this.produtoId.sku,
      }
      console.log(this.obj);
      this.servico.atualizarRegistro(this.obj).subscribe(
            
            success => {
              alert("Produto atualizado com sucesso! ");
              this.router.navigate(['lista']);
            },
            
            error =>{
                alert("Erro ao atualizar produto! " +error);
            }
            
      );
     
  }

  ngOnInit() {
     this.obterIdUrl(); 
  }

}
