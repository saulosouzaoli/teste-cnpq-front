
import { MensagemComponent } from 'src/app/shared/components/mensagem/mensagem.component';

import { EnderecoService } from './../../../services/endereco.service';
import { Endereco } from './../../../models/endereco';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Funcionario } from 'src/app/models/funcionario';
import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.scss']
})
export class EnderecoComponent implements OnInit {

  @Input()
  funcionario: Funcionario;
  endereco: Endereco = new Endereco();
  enderecoForm: FormGroup = this.preencheEndereco(new Endereco());

  @ViewChild(MensagemComponent) mensagem:MensagemComponent;
  ufs: string[] = [];

  constructor(public enderecoService: EnderecoService) { }

  ngOnInit(): void {
    this.ufs = this.enderecoService.getUf();

    this.enderecoService.buscarPorFuncionario(this.funcionario).subscribe(
      resp => {
        if (resp) {
          this.endereco = resp;
          this.enderecoForm = this.preencheEndereco(resp);
        }
      }
    );
  }




  preencheEndereco(endereco: Endereco) {
    return new FormGroup({
      descricao: new FormControl(endereco.descricao, Validators.required),
      endereco: new FormControl(endereco.endereco, Validators.required),
      complemento: new FormControl(endereco.complemento),
      cep: new FormControl(endereco.cep, Validators.required),
      bairro: new FormControl(endereco.bairro, Validators.required),
      cidade: new FormControl(endereco.cidade, Validators.required),
      uf: new FormControl(endereco.uf, Validators.required),
    });
  }

  salvar() {
    this.preparaEndereco();
    this.enderecoService.save(this.endereco).subscribe(
      db => {
        this.endereco = db;
        this.preencheEndereco(db);
        this.mensagem.iniciarContagem();
      });
  }
  preparaEndereco() {
    this.endereco.funcionario = this.funcionario;
    this.endereco.descricao = this.enderecoForm.value.descricao;
    this.endereco.endereco = this.enderecoForm.value.endereco;
    this.endereco.complemento = this.enderecoForm.value.complemento;
    this.endereco.cep = this.enderecoForm.value.cep;
    this.endereco.bairro = this.enderecoForm.value.bairro;
    this.endereco.cidade = this.enderecoForm.value.cidade;
    this.endereco.uf = this.enderecoForm.value.uf;
  }
}
