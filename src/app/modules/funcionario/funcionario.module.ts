import { NgxMaskModule } from 'ngx-mask';
import { EnderecoComponent } from './endereco/endereco.component';

import { DadoFuncionalComponent } from './dado-funcional/dado-funcional.component';
import { DadosBasicosComponent } from './dados-basicos/dados-basicos.component';
import { ContatoComponent } from './contato/contato.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { FuncionarioRoutingModule } from './funcionario-routing.module';
import { ListagemComponent } from './listagem/listagem.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FuncionarioComponent } from './funcionario.component';


@NgModule({
  declarations: [FormularioComponent,
    ContatoComponent,
    DadosBasicosComponent,
    DadoFuncionalComponent,
    EnderecoComponent,
    ListagemComponent,
    FuncionarioComponent],
  imports: [
    FuncionarioRoutingModule,
    SharedModule,
    NgxMaskModule.forRoot()
  ]
})
export class FuncionarioModule { }
