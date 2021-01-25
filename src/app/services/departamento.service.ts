import { Injectable, Directive } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { DatePipe } from '@angular/common';
import { HttpParams, HttpClient } from '@angular/common/http';
import { GenericService } from './generic-service';
import { Departamento } from '../models/departamento';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService extends GenericService<Departamento> {

  constructor(public http:HttpClient){
    super(http);
  }


  getPath(): string {
    return '/departamento';
  }



}
