import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from './../../../services/funcionario.service';

import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  funcionario:Funcionario=new Funcionario();
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private funcionarioService:FuncionarioService) {
      this.route.params.subscribe(
        (params: any) => {
          let id = params['id'];
          if (id && id>0) {
            this.funcionarioService.findById(id).subscribe(
              resp => {
                this.funcionario = resp;
              }
            );
          }

        });
    }

    ngOnInit(){

    }


    exibirDadosPessoais():boolean{
      return this.funcionario.id>0 && this.isAdm();
    }

    isAdm():boolean{
      return true;
    }

    attFuncionario($event){
      this.funcionario = $event;
    }

}
