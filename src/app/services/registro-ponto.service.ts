import { Injectable, Directive } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { DatePipe } from '@angular/common';
import { HttpParams, HttpClient } from '@angular/common/http';
import { RegistroPonto } from '../models/registro-ponto';
import { GenericService } from './generic-service';
import { Page } from '../shared/models/page';

@Injectable({
  providedIn: 'root'
})
export class RegistroPontoService extends GenericService<RegistroPonto> {

  constructor(public http:HttpClient){
    super(http);
  }


  getPath(): string {
    return '/registro-ponto';
  }


  buscar(page: number, linesPerPage: number, orderBy: string, direction: string): Observable<Page<RegistroPonto>> {
    let params = new HttpParams();
    if (page)
      params = params.set('pagina', page + '');
    if (linesPerPage)
      params = params.set('linhasPorPagina', linesPerPage + '');
    if (orderBy)
      params = params.set('ordernarPor', orderBy);
    if (direction)
      params = params.set('direcao', direction);


    return this.http.get<Page<RegistroPonto>>(this.getUrlCompleta(`/buscar/`), { params: params });
  }

}
