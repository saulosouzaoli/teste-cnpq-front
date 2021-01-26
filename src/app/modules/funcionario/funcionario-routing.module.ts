import { FuncionarioComponent } from './funcionario.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemComponent } from './listagem/listagem.component';
import { FormularioComponent } from './formulario/formulario.component';

const funcionarioRoutes: Routes = [
  {
    path: '',
    component: FuncionarioComponent,
    children: [
      {
        path: 'list',
        component: ListagemComponent,
      },
      {
        path: 'form/',
        component: FormularioComponent
      }, {
        path: 'form/:id',
        component: FormularioComponent,
        pathMatch: 'full'
      }]
  }]
  ;

@NgModule({
  imports: [
    RouterModule.forChild(funcionarioRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FuncionarioRoutingModule { }
