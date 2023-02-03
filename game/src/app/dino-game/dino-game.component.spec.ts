import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinoGameComponent } from './dino-game.component';

describe('DinoGameComponent', () => {
  let component: DinoGameComponent;
  let fixture: ComponentFixture<DinoGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinoGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DinoGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
