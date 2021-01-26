import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable, of } from "rxjs";
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

export class FuncionarioDataSource implements DataSource<Funcionario> {

  private dataSubject = new BehaviorSubject<Funcionario[]>([]);

  public length: number;

  constructor(private coursesService: FuncionarioService) {
    this.length=0;
  }

  connect(collectionViewer: CollectionViewer): Observable<Funcionario[]> {
    return this.dataSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.dataSubject.complete();
  }
  limparDados(){
    this.dataSubject.next([]);
  }
  carregarDados( pageIndex = 0, pageSize = 5, orderBy = '',
    sortDirection = 'ASC') {


    this.coursesService.buscar(pageIndex, pageSize, orderBy,
      sortDirection)
      .subscribe(page => {
        this.dataSubject.next(page.content);
        this.length = page.totalElements;
      },
        error => {
          console.log(error);
        });
  }
}
