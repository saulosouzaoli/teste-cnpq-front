import { Injectable, Directive } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { DatePipe } from '@angular/common';
import { HttpParams, HttpClient } from '@angular/common/http';
import { GenericService } from './generic-service';
import { DadoFuncional } from '../models/dado-funcional';

@Injectable({
  providedIn: 'root'
})
export class DadoFuncionalService extends GenericService<DadoFuncional> {

  constructor(public http:HttpClient){
    super(http);
  }


  getPath(): string {
    return '/dado-funcional';
  }


}
