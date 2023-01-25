import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureGameComponent } from './adventure-game.component';

describe('AdventureGameComponent', () => {
  let component: AdventureGameComponent;
  let fixture: ComponentFixture<AdventureGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdventureGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdventureGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
