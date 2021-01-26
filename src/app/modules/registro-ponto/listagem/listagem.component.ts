import { RegistroPontoDataSource } from './funcionario-data-source';
import { RegistroPontoService } from 'src/app/services/registro-ponto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { Funcionario } from 'src/app/models/funcionario';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  displayedColumns: string[] = ['data', 'entrada1', 'saida1', 'entrada2', 'saida2'];
  dataSourceRegistroPonto: RegistroPontoDataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  funcionario: Funcionario;

  constructor(
    private route: ActivatedRoute,
    private funcionarioService: FuncionarioService,
    public registroPontoService: RegistroPontoService) {
    this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];
        if (id && id > 0) {
          this.funcionarioService.findById(id).subscribe(
            resp => {
              this.funcionario = resp;
              this.carregar();
            }
          );
        }

      });
  }


  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.sort.sortChange.subscribe(() => {
      this.paginator.pageIndex = 0;
      this.carregar();
    });
    this.paginator.page.subscribe(() => { this.carregar(); })
  }
  carregar() {

    this.dataSourceRegistroPonto.carregarDados(this.paginator.pageIndex,
      this.paginator.pageSize, this.sort.active,
      this.sort.direction, this.funcionario.id);
  }
}
