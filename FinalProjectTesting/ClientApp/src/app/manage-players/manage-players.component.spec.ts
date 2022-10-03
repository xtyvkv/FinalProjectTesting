import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePlayersComponent } from './manage-players.component';

describe('ManagePlayersComponent', () => {
  let component: ManagePlayersComponent;
  let fixture: ComponentFixture<ManagePlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagePlayersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagePlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
