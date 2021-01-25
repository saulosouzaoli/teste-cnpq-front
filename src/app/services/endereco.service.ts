import { Funcionario } from 'src/app/models/funcionario';
import { Injectable, Directive } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { DatePipe } from '@angular/common';
import { HttpParams, HttpClient } from '@angular/common/http';
import { GenericService } from './generic-service';
import { Endereco } from '../models/endereco';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService extends GenericService<Endereco> {

  constructor(public http:HttpClient){
    super(http);
  }


  getPath(): string {
    return '/endereco';
  }

  buscarPorFuncionario(funcionario: Funcionario): Observable<Endereco> {
    return this.http.get<Endereco>(this.getUrlCompleta(`/buscarPorFuncionario/${funcionario.id}`));
  }

  getUf():string[]{
    return ['RO',
    'AC',
    'AM',
    'RR',
    'PA',
    'AP',
    'TO',
    'MA',
    'PI',
    'CE',
    'RN',
    'PB',
    'PE',
    'AL',
    'SE',
    'BA',
    'MG',
    'ES',
    'RJ',
    'SP',
    'PR',
    'SC',
    'RS',
    'MS',
    'MT',
    'GO',
    'DF'];
  }

}
