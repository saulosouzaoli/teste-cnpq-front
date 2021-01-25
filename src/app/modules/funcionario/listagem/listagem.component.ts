import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Component, ViewChild,OnInit,AfterViewInit } from '@angular/core';
import { FuncionarioDataSource } from '../funcionario-data-source';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit,AfterViewInit {



  @ViewChild(MatSort, { static: true }) sort: MatSort;
  displayedColumns: string[] = ['matricula', 'departamento.nome', 'detalhes'];
  dataSourceFuncionario: FuncionarioDataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(
    private router: Router,
    public funcionarioService:FuncionarioService) {

    }

  ngOnInit(): void {
    this.dataSourceFuncionario = new FuncionarioDataSource(this.funcionarioService);
    if(this.paginator){
      this.paginator._intl.itemsPerPageLabel = 'Registros por página';
      this.paginator._intl.nextPageLabel = 'Próximo';
      this.paginator._intl.previousPageLabel = 'Anterior';
      this.paginator._intl.lastPageLabel = 'Última';
      this.paginator._intl.firstPageLabel = 'Primeira';
    }
    this.carregar();


  }
  carregar(){

    this.dataSourceFuncionario.carregarDados( 0,
      5, this.sort.active,
      this.sort.direction);
  }

  abrirDetalhes(element:Funcionario){
    this.router.navigate(['/funcionario/form/' + element.id]);
  }

  novo(){
    this.router.navigate(['/funcionario/form/0']);
  }

  ngAfterViewInit() {
    // reset the paginator after sorting
    this.sort.sortChange.subscribe(() => {
      this.paginator.pageIndex = 0;
      this.carregar();
    });
    this.paginator.page.subscribe(() => { this.carregar(); })

  }

}
