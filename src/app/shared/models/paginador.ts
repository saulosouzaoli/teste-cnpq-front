import { MatPaginatorIntl } from '@angular/material/paginator';
import { Paginacao } from './paginacao';

const ptRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length === 0 || pageSize === 0) {
        return `0 de ${length}`;
    }

    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;

    return `${startIndex + 1} - ${endIndex} de ${length}`;
};


export function getPtBrPaginatorIntl() {
    const paginatorIntl = new MatPaginatorIntl();

    paginatorIntl.itemsPerPageLabel = 'Itens por página:';
    paginatorIntl.firstPageLabel = 'Primeira página';
    paginatorIntl.previousPageLabel = 'Voltar';
    paginatorIntl.nextPageLabel = 'Avançar';
    paginatorIntl.lastPageLabel = 'Última página';
    paginatorIntl.getRangeLabel = ptRangeLabel;

    return paginatorIntl;
}

export function resolvePaginacao(pageEvent: any, paginacao: Paginacao) {
    paginacao.page = pageEvent.pageIndex;
    paginacao.limit = pageEvent.pageSize;
}
