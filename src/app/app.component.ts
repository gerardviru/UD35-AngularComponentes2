import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UD35- AngularComponentes2';
  nombre: string = "";
  email: any = "";
  mensaje: string = "";
  password: any= "";
  elemento: any="";

  ListaRegistros: any=[];

  GuardarRegistro() {

    if(this.emailRepeat() == false){
      window.alert("Este correo electrónico ya está registrado")
    }else if(this.password != '5'){
      window.alert("La contraseña no es correcta")
    }else if(this.nombre == ''|| this.email == '' || this.mensaje == '' || this.password != '5'){
      window.alert("Quedan campos por rellenar")
    }else if(this.nombre != '' && this.email != '' && this.mensaje != '' && this.password == '5'){
      let lista: any = [];
      lista = [this.nombre, this.email, this.mensaje, this.password, this.elemento];
      this.ListaRegistros.push(lista);
      console.log(this.ListaRegistros);
    }
  }
    emailRepeat() {
      console.log("email actual: "+ this.email);
      for (let index = 0; index < this.ListaRegistros.length; index++) {
        this.elemento = this.ListaRegistros[index];
        if(this.email === this.elemento[1]){
          console.log("correo electrónico repetido");
          return false; //Retorna false cuando el email ya esta registrado
        }
      }
      console.log("correo correcto");
      return true; // Retorna true cuendo el email no esta registrado
    }
  }


