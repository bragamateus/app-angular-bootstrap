import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private service: UsuariosService
    ) { }

  storage: Storage = localStorage;

  builderForm = this.fb.group({
    usuario: [''],
    senha: ['']
  });

  ngOnInit(): void {
  }

  efetuarLogin(): void {
    let usuario = this.builderForm.value.usuario;
    let senha = this.builderForm.value.senha;

    let valida = this.service.usuarios.includes(usuario);

    if (valida && senha === 'admin') {
      this.storage.setItem('usuario', usuario);
      this.router.navigate(['/home']);

    } else {
      this.builderForm.reset();
    }
  }


}
