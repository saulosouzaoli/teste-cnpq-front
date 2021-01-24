import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'funcionario',pathMatch: 'full'
    ,children:[{
      path: 'funcionario',
      loadChildren: () => import('./modules/funcionario/funcionario.module').then(m => m.FuncionarioModule)}
     ,
    {
      path: 'registro-ponto',
      loadChildren: () => import('./modules/registro-ponto/registro-ponto.module').then(m => m.RegistroPontoModule)}
    ]  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
