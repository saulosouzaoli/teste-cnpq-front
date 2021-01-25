import { Injectable, Directive } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { DatePipe } from '@angular/common';
import { HttpParams, HttpClient } from '@angular/common/http';
import { GenericService } from './generic-service';
import { Contato } from '../models/contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService extends GenericService<Contato> {

  constructor(public http:HttpClient){
    super(http);
  }


  getPath(): string {
    return '/contato';
  }


}
