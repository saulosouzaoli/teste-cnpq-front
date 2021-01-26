import { Component, OnInit } from '@angular/core';
import { delay } from 'q';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit {

  salvou = false;

  constructor() { }

  ngOnInit(): void {
  }

  iniciarContagem() {
    this.salvou = true;
    setTimeout(() => { this.salvou=false; }, 5000);

  }


}
