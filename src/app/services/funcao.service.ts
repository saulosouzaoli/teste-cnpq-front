import { Injectable, Directive } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { GenericService } from './generic-service';
import { Funcao } from '../models/funcao';

@Injectable({
  providedIn: 'root'
})
export class FuncaoService extends GenericService<Funcao> {

  constructor(public http:HttpClient){
    super(http);
  }


  getPath(): string {
    return '/funcao';
  }


}
