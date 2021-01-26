
import { MensagemComponent } from 'src/app/shared/components/mensagem/mensagem.component';
import { ContatoService } from './../../../services/contato.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Contato } from './../../../models/contato';
import { Funcionario } from 'src/app/models/funcionario';
import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {
  @Input()
  funcionario: Funcionario;
  contato:Contato= new Contato();
  contatoForm: FormGroup = this.preencheContato(new Contato());

  @ViewChild(MensagemComponent) mensagem:MensagemComponent;
  dataSource = new MatTableDataSource<Contato>();
  displayedColumns: string[] = ['contato','tipoContato', 'excluir'];
  private paginator: MatPaginator;
  tipos:number[]=[1,2,3,4,5,6,7,8];


  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    if (this.paginator) {
      this.paginator._intl.itemsPerPageLabel = 'Registros por página';
      this.paginator._intl.nextPageLabel = 'Próximo';
      this.paginator._intl.previousPageLabel = 'Anterior';
      this.paginator._intl.lastPageLabel = 'Última';
      this.paginator._intl.firstPageLabel = 'Primeira';
      this.dataSource.paginator = this.paginator;
    }
  }

  constructor(public contatoService:ContatoService) { }

  ngOnInit(): void {

    this.buscarContatos();
  }

  getMask(){
    return "";
  }

  add(){
    this.preparaContato();
    this.contatoService.save(this.contato).subscribe(
      db => {
        this.buscarContatos();
        this.contato = new Contato();
        this.preencheContato(db);
        this.mensagem.iniciarContagem();
      });
  }


  preencheContato(contato:Contato) {
    return new FormGroup({
      contato: new FormControl(contato.contato, Validators.required),
      valorTipoContato: new FormControl(contato.valorTipoContato, Validators.required)
    });
  }


  salvar() {

  }
  preparaContato() {
    this.contato.funcionario = this.funcionario;
    this.contato.contato = this.contatoForm.value.contato;
    this.contato.valorTipoContato = this.contatoForm.value.valorTipoContato;
  }

  buscarContatos(){
    this.contatoService.buscarPorFuncionario(this.funcionario).subscribe(c=>this.dataSource.data = c);
  }
}
