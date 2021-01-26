import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit(): void {
  }
  navegar(){
    this.router.navigate(['/funcionario/list']);
  }

}
