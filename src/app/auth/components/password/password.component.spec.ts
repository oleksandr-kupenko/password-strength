import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassswordComponent } from './passsword.component';

describe('LoginComponent', () => {
  let component: PassswordComponent;
  let fixture: ComponentFixture<PassswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
