import { TipoContatoPipe } from './pipe/tipo-contato.pipe';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EstadoPipe } from './pipe/estado-pipe';
import { MaterialModule } from './material.module';
@NgModule({
  declarations: [
    EstadoPipe,TipoContatoPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    EstadoPipe,TipoContatoPipe
  ]
})
export class SharedModule { }
