import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut, sendEmailVerification} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private auth: Auth) { }

  async register(nombre: string, password: string){
    return  await createUserWithEmailAndPassword(this.auth, nombre, password);
  }

  login(nombre: string, password: string){
    return signInWithEmailAndPassword(this.auth, nombre, password);
  }

  logout(){
    return signOut(this.auth);
  }
}

