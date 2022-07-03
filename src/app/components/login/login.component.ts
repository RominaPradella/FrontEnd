import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading= false;


  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.form= this.fb.group({
      usuario:['', Validators.required],
      password:['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  ingresar(){

    console.log(this.form);

    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    if(usuario=="rpradella" && password=="123456"){
      //redireccionamos a tabla
      this.carga();
    } else{
      //mostramos error
      this.error();
    }

    console.log(usuario);
    console.log(password);

  }

  error(){
    this._snackBar.open('Usuario o contraseña ingresados son inválidos', '', {
      duration: 1500,
      horizontalPosition: "center",
      verticalPosition: "bottom"
    })
  }

  carga(){
    this.loading = true;

    setTimeout(() =>  {
      //redireccionamos a tablero
      this.router.navigate(['tablero'])
    }, 1500);
  }

}
