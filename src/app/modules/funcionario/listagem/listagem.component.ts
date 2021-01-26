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
  displayedColumns: string[] = ['matricula', 'departamento.nome','funcao.nome', 'detalhes'];
  dataSourceFuncionario: FuncionarioDataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(
    private router: Router,
    public funcionarioService:FuncionarioService) {

      this.dataSourceFuncionario = new FuncionarioDataSource(funcionarioService);
    }

  ngOnInit(): void {
    setTimeout(() => { this.carregar(); }, 1000);
  }
  carregar(){

    this.dataSourceFuncionario.carregarDados( this.paginator.pageIndex,
      this.paginator.pageSize, this.sort.active,
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
