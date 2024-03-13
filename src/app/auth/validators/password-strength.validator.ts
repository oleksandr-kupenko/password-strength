import {AbstractControl, ValidatorFn} from '@angular/forms';
import {ControlWithPassStrength, PasswordErrors, PasswordStrength, PasswordValidationResult} from "../auth.interfaces";


export function passwordStrengthValidator(minValidValue: PasswordStrength.MEDIUM | PasswordStrength.STRONG): ValidatorFn {
  return (control: ControlWithPassStrength): PasswordValidationResult | null => {
    const value: string = control.value;

    const containsCyrillic = /[а-яА-Я]/.test(value);
    const containsSymbols = /[^a-zA-Z0-9\s\u0400-\u04FF]/i.test(value);
    const containsLetters = /[a-zA-Z]/.test(value);
    const containsNumbers = /\d/.test(value);


    const countDifferentTypes = [containsSymbols, containsLetters, containsNumbers]
      .filter(condition => condition).length;

    const errors = new PasswordErrors(containsCyrillic, value.length < 8, !containsLetters, !containsNumbers, !containsSymbols);

    if (!value) {
      control.passwordStrengthDetails = {passwordStrength: null, errors};
      return { isValid: false, errors};
    }

    if (containsCyrillic) {
      control.passwordStrengthDetails = {passwordStrength: PasswordStrength.EASY, errors};
      return { isValid: false, errors };
    }

    if (value.length < 8) {
      control.passwordStrengthDetails = {passwordStrength: PasswordStrength.EASY, errors};
      return { isValid: false, errors };
    }

    if (countDifferentTypes === 3) {
      control.passwordStrengthDetails = {passwordStrength: PasswordStrength.STRONG, errors};
      return null;
    }

    if (countDifferentTypes === 2) {
      control.passwordStrengthDetails = {passwordStrength: PasswordStrength.MEDIUM, errors};
      if (minValidValue === PasswordStrength.MEDIUM) {
        return null;
      }
      return { isValid: false, errors };
    }

    if (countDifferentTypes === 1) {
      control.passwordStrengthDetails = {passwordStrength: PasswordStrength.EASY, errors};
      return { isValid: false, errors };
    }

    return { isValid: false, errors };
  };
}
