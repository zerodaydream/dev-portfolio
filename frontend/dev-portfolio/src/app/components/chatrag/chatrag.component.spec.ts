import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatragComponent } from './chatrag.component';

describe('ChatragComponent', () => {
  let component: ChatragComponent;
  let fixture: ComponentFixture<ChatragComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatragComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
