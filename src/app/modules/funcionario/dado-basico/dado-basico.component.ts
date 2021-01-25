import { Component, OnInit, Input } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionario';

@Component({
  selector: 'app-dado-basico',
  templateUrl: './dado-basico.component.html',
  styleUrls: ['./dado-basico.component.scss']
})
export class DadoBasicoComponent implements OnInit {

  @Input()
  funcionario!: Funcionario;

  constructor(public) { }

  ngOnInit(): void {
  }

}
