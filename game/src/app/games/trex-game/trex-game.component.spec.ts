import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrexGameComponent } from './trex-game.component';

describe('TrexGameComponent', () => {
  let component: TrexGameComponent;
  let fixture: ComponentFixture<TrexGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrexGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrexGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
