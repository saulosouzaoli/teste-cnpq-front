import { PageSort } from './page-sort';


export class Pageable {
  constructor(
  public offset: number,
  public pageNumber: number,
  public pageSize: number,
  public paged: boolean,
  public sort:PageSort,
  public unpaged: boolean){

  }
}
