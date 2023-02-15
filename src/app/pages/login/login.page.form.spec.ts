import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginPageForm } from './login.page.form';

describe('LoginPageForm', () => {
  let loginPageForm: LoginPageForm;
  let form: FormGroup;

  beforeEach(() => {
    loginPageForm = new LoginPageForm(new FormBuilder());
    form = loginPageForm.createForm();
  });
  it('should create login form empty', () => {
    expect(form).not.toBeNull();
    expect(form.get('email')).not.toBeNull();
    expect(form.get('email')?.value).toEqual('');
    expect(form.get('password')).not.toBeNull();
    expect(form.get('password')?.value).toEqual('');
  });

  it('should have email invalid if email is not valid', () => {
    form.get('email')?.setValue('invalid email');
    expect(form.get('email')?.valid).toBeFalsy();
  });

  it('should have email valid if email is valid', () => {
    form.get('email')?.setValue('ara@gmail.com');
    expect(form.get('email')?.valid).toBeTrue();
  });

  it('should have valid form', () => {
    form.get('email')?.setValue('ara@gmail.com');
    form.get('password')?.setValue('1234');
    expect(form.valid).toBeTrue();
  });
});
