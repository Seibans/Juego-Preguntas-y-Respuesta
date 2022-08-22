import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {


  error: boolean = false;

  pin: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  //Validar si el usuario no ingreso ningun caracter
  ingresar(){
    if (this.pin == '') {
      this.error = true;
      setTimeout(() => {
        this.error = false;
      },3000);
    }
  }

}
