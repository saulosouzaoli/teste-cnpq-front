import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class GenericService<T>{

  public constructor(public http:HttpClient){

  }

  getBaseUrl(): string {
    return "localhost:8080";
  }

  abstract getPath(): string;

  getUrlCompleta(metodo:string){
    return this.getBaseUrl()+this.getPath()+metodo;
  }

  findById(id: number): Observable<T> {

    return this.http.get<T>(this.getUrlCompleta(`/findById/${id}`));
  }

}
