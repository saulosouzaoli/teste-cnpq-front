import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable, of } from "rxjs";
import {RegistroPonto } from 'src/app/models/registro-ponto';
import {RegistroPontoService } from 'src/app/services/registro-ponto.service';

export class RegistroPontoDataSource implements DataSource<RegistroPonto> {

  private dataSubject = new BehaviorSubject<RegistroPonto[]>([]);

  public length: number;

  constructor(private service:RegistroPontoService) {
    this.length=0;
  }

  connect(collectionViewer: CollectionViewer): Observable<RegistroPonto[]> {
    return this.dataSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.dataSubject.complete();
  }
  limparDados(){
    this.dataSubject.next([]);
  }
  carregarDados( pageIndex = 0, pageSize = 5, orderBy = '',
    sortDirection = 'ASC',idFuncionario:number) {


    this.service.buscar(pageIndex, pageSize, orderBy,
      sortDirection,idFuncionario)
      .subscribe(page => {
        this.dataSubject.next(page.content);
        this.length = page.totalElements;
      },
        error => {
          console.log(error);
        });
  }
}
