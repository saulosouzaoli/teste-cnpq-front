import { LoginComponent } from './modules/login/login.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'teste-funcionario';

  constructor(
    public dialog: MatDialog){

    }


    logar(){
      const dialogRef = this.dialog.open(LoginComponent);

    }
}
