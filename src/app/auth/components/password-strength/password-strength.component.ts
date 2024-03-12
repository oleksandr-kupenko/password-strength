import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {PasswordErrors, PasswordStrength} from "../../auth.interfaces";

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrl: './password-strength.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PasswordStrengthComponent {
  @Input() passwordStrength: PasswordStrength | null = null;
  @Input() passwordErrors?: PasswordErrors;

  public strengthPassBlocks = [true, false, false];

  constructor(private cdr: ChangeDetectorRef) {
  }
}
