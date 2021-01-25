import { Funcao } from './funcao';
import { DadosBasicos } from './dados-basicos';
import { Departamento } from './departamento';
export class Funcionario{

  constructor(public id?:number,
        public matricula?:string,
        public  departamento?:Departamento,
        public  dadosBasicos?:DadosBasicos,
        public  funcao?:Funcao
    ){

  }

}
