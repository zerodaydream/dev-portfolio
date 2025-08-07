import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeTerminalComponent } from './welcome-terminal.component';

describe('WelcomeTerminalComponent', () => {
  let component: WelcomeTerminalComponent;
  let fixture: ComponentFixture<WelcomeTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomeTerminalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WelcomeTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
