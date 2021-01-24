import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { FuncionarioRoutingModule } from './funcionario-routing.module';



@NgModule({
  declarations: [FormularioComponent],
  imports: [
    CommonModule,
    FuncionarioRoutingModule
  ]
})
export class FuncionarioModule { }
