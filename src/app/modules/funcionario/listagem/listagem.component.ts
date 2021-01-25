import { Component, ViewChild,OnInit } from '@angular/core';

import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { FuncionarioDataSource } from '../funcionario-data-source';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {



  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  displayedColumns: string[] = ['Funcionario', 'unidadeAcademica', 'pontuacao', 'detalhes'];
  dataSourceFuncionario!: FuncionarioDataSource;
  private paginator!: MatPaginator;

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    if (this.paginator) {
      this.paginator._intl.itemsPerPageLabel = 'Registros por página';
      this.paginator._intl.nextPageLabel = 'Próximo';
      this.paginator._intl.previousPageLabel = 'Anterior';
      this.paginator._intl.lastPageLabel = 'Última';
      this.paginator._intl.firstPageLabel = 'Primeira';
    }
  }


  constructor(
    private router: Router,
    public funcionarioService:FuncionarioService) { }

  ngOnInit(): void {
    this.dataSourceFuncionario = new FuncionarioDataSource(this.funcionarioService);

  }

  abrirDetalhes(element:Funcionario){
    this.router.navigate(['/funcionario/' + element.id]);
  }

}
