
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemComponent } from './listagem/listagem.component';
import { FormularioComponent } from './formulario/formulario.component';

const funcionarioRoutes: Routes = [
    {
        path: '',
        component: ListagemComponent,
        pathMatch: 'full'
    },
    {
        path: ':id',
        component: FormularioComponent,
    }];

@NgModule({
    imports: [
        RouterModule.forChild(funcionarioRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class FuncionarioRoutingModule { }
