import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  private readonly API="http://localhost:3000/produtos/";

  //private readonly API = "http://angular-test.blabs.us.";

  constructor(private http: HttpClient) { }

  public listarRegistro(){
     return this.http.get(this.API);
  }
  
  public deletarRegistro(id:number){
    return this.http.delete(this.API +id);
  }

  public gravarRegistro(obj){
    return this.http.post(this.API, obj);
  }

  public getRegistroId(id:number){
    return this.http.get(this.API +id);
  } 
  
  //put recebe a api,identificador e os dados atualizado
  public atualizarRegistro(obj){
    return this.http.put(this.API +obj.id  +"/",obj);
  }
}
