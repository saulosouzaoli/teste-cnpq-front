export class Paginacao {
  page: number = 0;
  limit: number = 5;
  sort: string = '';

  constructor(
      page:number = 0,
      limit: number = 5,
      sort: string = ''
  ) {
      this.page = page;
      this.limit = limit;
      this.sort = sort;
  }
}
