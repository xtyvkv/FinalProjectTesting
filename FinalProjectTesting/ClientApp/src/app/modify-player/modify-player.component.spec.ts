import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyPlayerComponent } from './modify-player.component';

describe('ModifyPlayerComponent', () => {
  let component: ModifyPlayerComponent;
  let fixture: ComponentFixture<ModifyPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
