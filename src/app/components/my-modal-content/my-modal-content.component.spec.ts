import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyModalContentComponent } from './my-modal-content.component';

describe('MyModalContentComponent', () => {
  let component: MyModalContentComponent;
  let fixture: ComponentFixture<MyModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyModalContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
