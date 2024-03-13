import {AbstractControl} from '@angular/forms';

export enum PasswordStrength {
  EASY = 'easy',
  MEDIUM = 'medium',
  STRONG = 'strong'
}

export interface PasswordValidationResult {
  isValid: boolean;
  errors: PasswordErrors;
}

export class PasswordErrors {

  constructor(
    public hasCyrillic = false,
    public toShort = true,
    public hasNotLetters = true,
    public hasNotNumbers = true,
    public hasNotSymbols = true) {
  }

}

export interface PasswordStrengthDetails {
  passwordStrength: PasswordStrength | null;
  errors: PasswordErrors
}

export interface ControlWithPassStrength extends AbstractControl {
  passwordStrengthDetails?: PasswordStrengthDetails;
}
