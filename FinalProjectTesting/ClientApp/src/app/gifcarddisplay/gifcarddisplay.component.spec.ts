import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifcarddisplayComponent } from './gifcarddisplay.component';

describe('GifcarddisplayComponent', () => {
  let component: GifcarddisplayComponent;
  let fixture: ComponentFixture<GifcarddisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifcarddisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifcarddisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
