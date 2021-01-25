import { Funcionario } from 'src/app/models/funcionario';
export class Contato{

  constructor(public id?:number,
    public contato?:string,
    public valorTipoContato?:string,
    public funcionario?:Funcionario,
    public tipoContato?:string
){

}
}
