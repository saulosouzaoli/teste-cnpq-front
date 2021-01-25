import { EnderecoService } from './../../../services/endereco.service';
import { Endereco } from './../../../models/endereco';
import { DadosBasicos } from './../../../models/dados-basicos';
import { DadosBasicosService } from './../../../services/dados-basicos.service';
import { Component, OnInit, Input } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionario';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-dados-basicos',
  templateUrl: './dados-basicos.component.html',
  styleUrls: ['./dados-basicos.component.scss']
})
export class DadosBasicosComponent implements OnInit {

  @Input()
  funcionario: Funcionario;

  dadosBasicosForm: FormGroup = this.preencheDadosBasicos(new DadosBasicos());
  constructor(public dadosBasicosService:DadosBasicosService,
    public enderecoService:EnderecoService) { }

  ngOnInit(): void {
    this.dadosBasicosService.buscarPorFuncionario(this.funcionario).subscribe(
      resp=>  this.preencheDadosBasicos(resp)
    );
  }

  preencheDadosBasicos(dadosBasicos:DadosBasicos) {
    return new FormGroup({
      nome: new FormControl(dadosBasicos.nome, Validators.required),
      cpf: new FormControl(dadosBasicos.cpf, Validators.required),
      rg: new FormControl(dadosBasicos.cpf, Validators.required),
      nomePai: new FormControl(dadosBasicos.nomePai),
      nomeMae: new FormControl(dadosBasicos.nomeMae, Validators.required),
    });
  }

}
