import { DepartamentoService } from './../../../services/departamento.service';
import { FuncaoService } from './../../../services/funcao.service';
import { FuncionarioService } from './../../../services/funcionario.service';
import { Departamento } from './../../../models/departamento';
import { Funcao } from './../../../models/funcao';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Funcionario } from 'src/app/models/funcionario';
import { Component, OnInit, Input,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-dado-funcional',
  templateUrl: './dado-funcional.component.html',
  styleUrls: ['./dado-funcional.component.scss']
})
export class DadoFuncionalComponent implements OnInit {

  @Input() funcionario: Funcionario;
  @Output() funcionarioChange=  new EventEmitter<Funcionario>();

  funcoes:Funcao[]=[];
  departamentos:Departamento[]=[];

  dadosFuncionaisForm: FormGroup = this.preencherDadosFuncionaisForm(new Funcionario());

  constructor(public funcaoService:FuncaoService,public departamentoService:DepartamentoService,public funcionarioService:FuncionarioService) { }

  ngOnInit(): void {
    this.funcaoService.findAll().subscribe(r=>this.funcoes = r);
    this.departamentoService.findAll().subscribe(r=>this.departamentos = r);
    this.dadosFuncionaisForm = this.preencherDadosFuncionaisForm(this.funcionario);
  }

  preencherDadosFuncionaisForm(funcionario:Funcionario) {
    if(!funcionario.departamento){
      funcionario.departamento = new Departamento();
    }
    if(!funcionario.funcao){
      funcionario.funcao = new Funcao();
    }
    return new FormGroup({
      matricula: new FormControl(funcionario.matricula, Validators.required),
      departamento: new FormControl(funcionario.departamento.id, Validators.required),
      funcao: new FormControl(funcionario.funcao.id, Validators.required),
    });
  }

  salvar(){
    this.prepararFuncionario();
    this.funcionarioService.save(this.funcionario).subscribe(
      f=>{ this.funcionario = f
        this.funcionarioChange.emit(this.funcionario)});//parece que o angular se esqueceu de como deve funcionar
  }

  private prepararFuncionario(){

    this.funcionario.departamento.id = this.dadosFuncionaisForm.value.departamento;
    this.funcionario.funcao.id = this.dadosFuncionaisForm.value.funcao;
    this.funcionario.matricula = this.dadosFuncionaisForm.value.matricula;
  }

}
