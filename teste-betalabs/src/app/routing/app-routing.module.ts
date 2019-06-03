import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarRegistroComponent } from '../listar-registro/listar-registro.component';
import { NovoRegistroComponent } from '../novo-registro/novo-registro.component';

const routes: Routes = [
    { path: '', component: ListarRegistroComponent },
    { path: 'lista', component: ListarRegistroComponent },
    { path: 'novo', component: NovoRegistroComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
