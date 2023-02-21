import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/AppState';
import { hide, show } from 'src/app/store/Loading/loading.actions';
// import { AppState } from 'src/app/store/AppState';
// import { hide, show } from 'src/app/store/Loading/loading.actions';
import { LoginPageForm } from './login.page.form';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup;
  constructor(private router:Router , private formBuilder:FormBuilder
    , private store: Store<AppState>
    ) {

  }

  ngOnInit() {
    this.form = new LoginPageForm(this.formBuilder).createForm()
  }
  login(): void{
    this.router.navigate(['home'])
  }

  register(){
    this.router.navigate(['register'])
  }
  forgotEmailPassword(){
    //TODO: Dispatch a show action
    this.store.dispatch(show());
    setTimeout(() => {
      this.store.dispatch(hide());
    }, 3000);

  }
}
