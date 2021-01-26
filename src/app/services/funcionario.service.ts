import { Injectable, Directive } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { DatePipe } from '@angular/common';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Funcionario } from '../models/funcionario';
import { GenericService } from './generic-service';
import { Page } from '../shared/models/page';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService extends GenericService<Funcionario> {

  constructor(public http:HttpClient){
    super(http);
  }


  getPath(): string {
    return '/funcionario';
  }


  buscar(page: number, linesPerPage: number, orderBy: string, direction: string,): Observable<Page<Funcionario>> {
    let params = new HttpParams();
    if (page)
      params = params.set('pagina', page + '');
    if (linesPerPage)
      params = params.set('linhasPorPagina', linesPerPage + '');
    if (orderBy)
      params = params.set('ordernarPor', orderBy);
    if (direction)
      params = params.set('direcao', direction);


    return this.http.get<Page<Funcionario>>(this.getUrlCompleta(`/buscar/`), { params: params });
  }

}
