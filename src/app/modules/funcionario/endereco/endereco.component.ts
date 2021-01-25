import { EnderecoService } from './../../../services/endereco.service';
import { Endereco } from './../../../models/endereco';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Funcionario } from 'src/app/models/funcionario';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.scss']
})
export class EnderecoComponent implements OnInit {

  @Input()
  funcionario: Funcionario;

  enderecoForm: FormGroup = this.preencheEndereco(new Endereco());

  ufs: string[] = [];

  constructor(public enderecoService: EnderecoService) { }

  ngOnInit(): void {
    this.ufs = this.enderecoService.getUf();

    this.enderecoService.buscarPorFuncionario(this.funcionario).subscribe(
      resp => this.preencheEndereco(resp)
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

}
