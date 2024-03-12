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
    public hasCyrillic: boolean,
    public toShort: boolean,
    public hasNotLetters: boolean,
    public hasNotNumbers: boolean,
    public hasNotSymbols: boolean) {
  }

}

export interface ControlWithPassStrength extends AbstractControl {
  passwordStrength?: PasswordStrength | null;
}
