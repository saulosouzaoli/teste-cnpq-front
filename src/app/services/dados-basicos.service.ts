import { Funcionario } from 'src/app/models/funcionario';
import { Injectable, Directive } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { DatePipe } from '@angular/common';
import { HttpParams, HttpClient } from '@angular/common/http';
import { DadosBasicos } from '../models/dados-basicos';
import { GenericService } from './generic-service';
import { Page } from '../shared/models/page';

@Injectable({
  providedIn: 'root'
})
export class DadosBasicosService extends GenericService<DadosBasicos> {

  constructor(public http: HttpClient) {
    super(http);
  }


  getPath(): string {
    return '/dados-basicos';
  }


  buscarPorFuncionario(funcionario: Funcionario): Observable<DadosBasicos> {
    return this.http.get<DadosBasicos>(this.getUrlCompleta(`/buscarPorFuncionario/${funcionario.id}`));
  }


}
