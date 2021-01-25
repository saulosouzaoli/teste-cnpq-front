
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroPontoComponent } from './registro-ponto.component';
import { RegistroPontoRoutingModule } from './registro-ponto-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [RegistroPontoComponent,
   ],
  imports: [
    CommonModule,
    RegistroPontoRoutingModule,
    SharedModule
  ]
})
export class RegistroPontoModule { }
