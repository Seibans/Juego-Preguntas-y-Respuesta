import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  error(code: string): string{
    switch (code) {
      //Email ya registrado 
      case 'auth/email-already-in-use':
        return 'El correo ya se encuentra registrado';
        break;
      case 'auth/invalid-email':
        return 'El correo es invalido';
        break;
      case 'auth/weak-password':
        return 'La Contraseña es muy débil';
        break;
      case 'auth/user-not-found':
        return 'Usuario inválido';
        break;
      case 'auth/wrong-password':
        return 'La contraseña es inválida';
        break;
      default:
        return 'Error Desconocido';
        break;
    }
  }
}
