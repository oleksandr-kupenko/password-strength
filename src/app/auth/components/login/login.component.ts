import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {passwordStrengthValidator} from "../../validators/password-strength.validator";
import {ControlWithPassStrength, PasswordErrors, PasswordStrength} from "../../auth.interfaces";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  public loginForm!: FormGroup;
  public passwordStrength: PasswordStrength | null = null;
  public passwordErrors!: PasswordErrors;

  public isPasswordHidden = true;

  private subs = new Subscription();
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.initForm();
    this.subscribeToPasswordChanges();
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
        if (passwordCtrl.errors) {
          this.passwordErrors = passwordCtrl.errors!['errors'];
        } else {
          this.passwordErrors = new PasswordErrors(false, false, false, false, false)
        }
        this.passwordStrength = passwordCtrl.passwordStrength ? passwordCtrl.passwordStrength : null;
      })
    )
  }
}
