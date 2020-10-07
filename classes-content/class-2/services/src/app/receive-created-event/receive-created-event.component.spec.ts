import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveCreatedEventComponent } from './receive-created-event.component';

describe('ReceiveCreatedEventComponent', () => {
  let component: ReceiveCreatedEventComponent;
  let fixture: ComponentFixture<ReceiveCreatedEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiveCreatedEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiveCreatedEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
