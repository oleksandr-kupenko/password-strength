import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public strengthPassBlocks = [true, false, false];
  public passwordStatus: 'easy' | 'medium' | 'strong' | null = null;
}
