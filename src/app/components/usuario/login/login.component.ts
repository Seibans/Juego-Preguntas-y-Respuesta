import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ErrorService } from 'src/app/services/error.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  loading: boolean = false;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthenticationService,
    private errorService: ErrorService,
    private toastr: ToastrService) {
    this.loginForm = this.fb.group({
      usuario: ['',[Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  login(){ 
    console.log(this.loginForm.value);
    const { usuario, password } = this.loginForm.value;
    this.loading = true;
    this.authService.login(usuario, password)
    .then(response => {
      console.log('SIIII',response);
      this.loading = false;
    })
    .catch(error => {
      this.loading = false;
      this.toastr.error(this.errorService.error(error.code), 'Error')
      console.log('VERGAA :v',error);
      this.loginForm.reset();
    })
  }

}
