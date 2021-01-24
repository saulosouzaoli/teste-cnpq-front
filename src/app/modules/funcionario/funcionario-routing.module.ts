
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemComponent } from './listagem/listagem.component';
import { FormularioComponent } from './formulario/formulario.component';

const vagasRoutes: Routes = [
    {
        path: '',
        component: ListagemComponent,
        children: [
            {
                path: ':id',
                component: FormularioComponent
            }

        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(vagasRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class FuncionarioRoutingModule { }
