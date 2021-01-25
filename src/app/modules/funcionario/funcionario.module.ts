import { EnderecoComponent } from './endereco/endereco.component';

import { Endereco } from './../../models/endereco';
import { DadoFuncionalComponent } from './dado-funcional/dado-funcional.component';
import { DadoBasicoComponent } from './dado-basico/dado-basico.component';
import { ContatoComponent } from './contato/contato.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { FuncionarioRoutingModule } from './funcionario-routing.module';
import { ListagemComponent } from './listagem/listagem.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [FormularioComponent,
    ContatoComponent,
    DadoBasicoComponent,
    DadoFuncionalComponent,
    EnderecoComponent,
    ListagemComponent],
  imports: [
    CommonModule,
    FuncionarioRoutingModule,
    SharedModule
  ]
})
export class FuncionarioModule { }
