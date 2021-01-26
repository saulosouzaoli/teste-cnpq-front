import { Funcionario } from 'src/app/models/funcionario';
export class Endereco{
constructor(
  public  id?:number,
  public  funcionario?:Funcionario,
  public  descricao?:string,
  public  endereco?:string,
  public  complemento?:string,
  public  cep?:string,
  public  bairro?:string,
  public  cidade?:string,
  public  uf?:string
){

}
}
