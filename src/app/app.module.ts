import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { DadoBasicoComponent } from './funcionario/dado-basico/dado-basico.component';
import { EnderecoComponent } from './funcionario/endereco/endereco.component';
import { ContatoComponent } from './funcionario/contato/contato.component';
import { DadoFuncionalComponent } from './funcionario/dado-funcional/dado-funcional.component';
import { RegistroPontoComponent } from './registro-ponto/registro-ponto.component';
import { ListagemComponent } from './funcionario/listagem/listagem.component';

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioComponent,
    DadoBasicoComponent,
    EnderecoComponent,
    ContatoComponent,
    DadoFuncionalComponent,
    RegistroPontoComponent,
    ListagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
