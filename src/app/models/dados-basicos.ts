import { Funcionario } from 'src/app/models/funcionario';
export class DadosBasicos {
  constructor(
    public  id?:number,
    public  nome?:string,
    public  cpf?:string,
    public  rg?:string,
    public  nomePai?:string,
    public  nomeMae?:string,
    public  funcionario?:Funcionario,
  ) { }
}
