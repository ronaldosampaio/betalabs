import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  private readonly API = "http://angular-test.blabs.us.";

  constructor(private http: HttpClient) { }

  public listarRegistro(){
     return this.http.get(this.API);
  }
  public deletarRegistro(id:number){
    return this.http.delete(this.API +"/"+id);
  }
  public gravarRegistro(obj){
    return this.http.post(this.API, obj);
  }
}
