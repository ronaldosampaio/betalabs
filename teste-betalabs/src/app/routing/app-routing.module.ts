import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarRegistroComponent } from '../listar-registro/listar-registro.component';
import { NovoRegistroComponent } from '../novo-registro/novo-registro.component';
import { EditarRegistroComponent } from '../editar-registro/editar-registro.component';

const routes: Routes = [
    { path: '',       component: ListarRegistroComponent },
    { path: 'lista',  component: ListarRegistroComponent },
    { path: 'novo',   component: NovoRegistroComponent },
    { path: 'editar/:id', component: EditarRegistroComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
