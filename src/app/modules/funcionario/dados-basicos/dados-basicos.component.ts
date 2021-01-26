import { EnderecoService } from './../../../services/endereco.service';
import { Endereco } from './../../../models/endereco';
import { DadosBasicos } from './../../../models/dados-basicos';
import { DadosBasicosService } from './../../../services/dados-basicos.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionario';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

import { MensagemComponent } from 'src/app/shared/components/mensagem/mensagem.component';
@Component({
  selector: 'app-dados-basicos',
  templateUrl: './dados-basicos.component.html',
  styleUrls: ['./dados-basicos.component.scss']
})
export class DadosBasicosComponent implements OnInit {

  @Input()
  funcionario: Funcionario;
  dadosBasicos: DadosBasicos = new DadosBasicos();
  dadosBasicosForm: FormGroup = this.preencheDadosBasicos(new DadosBasicos());

  @ViewChild(MensagemComponent) mensagem:MensagemComponent;
  constructor(public dadosBasicosService: DadosBasicosService,
    public enderecoService: EnderecoService) { }

  ngOnInit(): void {
    this.dadosBasicosService.buscarPorFuncionario(this.funcionario).subscribe(
      resp => {
        if (resp) {
          this.dadosBasicos = resp;
          this.dadosBasicosForm= this.preencheDadosBasicos(resp);
        }
      }
    );
  }

  preencheDadosBasicos(dadosBasicos: DadosBasicos) {
    return new FormGroup({
      nome: new FormControl(dadosBasicos.nome, Validators.required),
      cpf: new FormControl(dadosBasicos.cpf, Validators.required),
      rg: new FormControl(dadosBasicos.cpf, Validators.required),
      nomePai: new FormControl(dadosBasicos.nomePai),
      nomeMae: new FormControl(dadosBasicos.nomeMae, Validators.required),
    });
  }

  salvar() {
    this.preparaDadosBasicos();
    this.dadosBasicosService.save(this.dadosBasicos).subscribe(
      db => {
        this.dadosBasicos = db;
        this.preencheDadosBasicos(db);
        this.mensagem.iniciarContagem();
      });
  }
  preparaDadosBasicos() {
    this.dadosBasicos.funcionario = this.funcionario;
    this.dadosBasicos.cpf = this.dadosBasicosForm.value.cpf;
    this.dadosBasicos.nome = this.dadosBasicosForm.value.nome;
    this.dadosBasicos.nomePai = this.dadosBasicosForm.value.nomePai;
    this.dadosBasicos.nomeMae = this.dadosBasicosForm.value.nomeMae;
    this.dadosBasicos.rg = this.dadosBasicosForm.value.rg;
  }
}
