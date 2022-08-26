import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

import { ToastrService } from 'ngx-toastr';
import { ErrorService } from 'src/app/services/error.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  registerForm: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService, 
    private router: Router, 
    private toastr: ToastrService,
    private _errorService: ErrorService) {
    this.registerForm = this.fb.group({
      usuario: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(6)]],
      repetirPassword: ['']

    }, {validator: this.checkPassword} as AbstractControlOptions)
  }

  ngOnInit(): void {
  }

  register(){
    if (!this.registerForm.valid){
      return;
    }

    const { usuario, password } = this.registerForm.value;
    this.loading = true;
    this.authService.register(usuario, password)
    .then(response => {
      console.log('SIIII',response);
      this.toastr.success('El Usuario fue registrado con Éxito', 'Usuario Registrado!!');
      this.router.navigate(['/usuario'])
    }).catch(error => {
      this.registerForm.reset();
      this.loading = false;
      console.log('CARAJOOOO', error);
      this.toastr.error(this._errorService.error(error.code),'Error')
    })
  }

  checkPassword(group: FormGroup): any{
    const pass = group.controls['password']?.value;
    const confirmPassword = group.controls['repetirPassword']?.value;
    // console.log(pass, confirmPassword);
    return pass === confirmPassword ? null: { notSame: true }
   }
}
