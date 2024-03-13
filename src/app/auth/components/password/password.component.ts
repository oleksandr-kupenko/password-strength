import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {passwordStrengthValidator} from "../../validators/password-strength.validator";
import {
  ControlWithPassStrength, PasswordErrors,
  PasswordStrength,
  PasswordStrengthDetails
} from "../../auth.interfaces";
import {Subscription} from "rxjs";

interface PasswordForm {
  password: FormControl<string | null>;
}

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrl: './password.component.scss'
})
export class PasswordComponent implements OnInit{
  public passwordForm!: FormGroup;
  public passwordStrengthDetails: PasswordStrengthDetails = {passwordStrength: null, errors: new PasswordErrors()};

  public isPasswordHidden = true;

  private subs = new Subscription();
  constructor() {
  }

  ngOnInit() {
    this.initForm();
    this.subscribeToPasswordChanges();
  }

  public handleTogglePasswordHidden() {
    this.isPasswordHidden = !this.isPasswordHidden;
  }

  public handleSubmit() {
    console.log(this.passwordForm.value.password);
  }

  private initForm() {
    this.passwordForm = new FormGroup<PasswordForm>({
      password: new FormControl('', [Validators.required, passwordStrengthValidator(PasswordStrength.STRONG)])
    });
  }

  private subscribeToPasswordChanges() {
    this.subs.add(
      this.passwordForm.get('password')!.valueChanges.subscribe(value => {
        const passwordCtrl = this.passwordForm.controls['password'] as ControlWithPassStrength;
        if (passwordCtrl.passwordStrengthDetails) {
          this.passwordStrengthDetails = passwordCtrl.passwordStrengthDetails;
        }
      })
    )
  }
}
