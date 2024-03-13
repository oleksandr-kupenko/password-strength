import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {passwordStrengthValidator} from "../../validators/password-strength.validator";
import {
  ControlWithPassStrength, PasswordErrors,
  PasswordStrength,
  PasswordStrengthDetails
} from "../../auth.interfaces";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  public loginForm!: FormGroup;
  public passwordStrengthDetails!: PasswordStrengthDetails;

  public isPasswordHidden = true;

  private subs = new Subscription();
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.initForm();
    this.subscribeToPasswordChanges();
    this.passwordStrengthDetails = {passwordStrength: null,
      errors: new PasswordErrors()}
  }

  public handleTogglePasswordHidden() {
    this.isPasswordHidden = !this.isPasswordHidden;
  }

  private initForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, passwordStrengthValidator(PasswordStrength.STRONG)]]
    });
  }

  private subscribeToPasswordChanges() {
    this.subs.add(
      this.loginForm.get('password')!.valueChanges.subscribe(value => {
        const passwordCtrl = this.loginForm.controls['password'] as ControlWithPassStrength;
        if (passwordCtrl.passwordStrengthDetails) {
          this.passwordStrengthDetails = passwordCtrl.passwordStrengthDetails;
        }
      })
    )
  }
}
