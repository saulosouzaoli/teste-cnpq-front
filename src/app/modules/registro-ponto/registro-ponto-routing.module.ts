
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemComponent } from "./listagem/listagem.component";

const RegistroPontoRoutes: Routes = [
    {
        path: ':id',
        component: ListagemComponent,

    }
];

@NgModule({
    imports: [
        RouterModule.forChild(RegistroPontoRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class RegistroPontoRoutingModule { }
