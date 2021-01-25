import { Injectable, Directive } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { DatePipe } from '@angular/common';
import { HttpParams, HttpClient } from '@angular/common/http';
import { DadoBasico } from '../models/dado-basico';
import { GenericService } from './generic-service';
import { Page } from '../shared/models/page';

@Injectable({
  providedIn: 'root'
})
export class DadoBasicoService extends GenericService<DadoBasico> {

  constructor(public http:HttpClient){
    super(http);
  }


  getPath(): string {
    return '/dado-basico';
  }



}
