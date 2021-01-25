import { PageSort } from "./page-sort";
import { Pageable } from "./pageable";

export class Page<T> {
  constructor(public content: T[],
    public pageable: Pageable,
    public last: boolean,
    public totalPages:number,
    public totalElements:number,
    public size: number,
    public number: number,
    public sort:PageSort,
    public numberOfElements: number,
    public first: boolean,
    public empty: boolean) {
  }
}
