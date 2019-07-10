import { Injectable } from '@angular/core';
import {Usuario} from '../Modelos/Usuario';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public UsuarioLogeado: Usuario[];
  constructor(private router: Router) { }

  setUsuarioLogeadoen(usuario: Usuario[]): void {
    this.UsuarioLogeado = usuario;
    localStorage.setItem('usuprebanker', JSON.stringify(usuario));

  }
  getUsuarioLogeadoen() {
    return JSON.parse(localStorage.getItem('usuprebanker'));
  }

  logout(): void {
    this.EliminarLogin();
    this.router.navigate(['login']);
  }

  private EliminarLogin() {
    localStorage.removeItem('usuprebanker');
    this.UsuarioLogeado = null;
  }
}
