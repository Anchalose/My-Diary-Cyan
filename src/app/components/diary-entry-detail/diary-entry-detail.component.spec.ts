import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryEntryDetailComponent } from './diary-entry-detail.component';

describe('DiaryEntryDetailComponent', () => {
  let component: DiaryEntryDetailComponent;
  let fixture: ComponentFixture<DiaryEntryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaryEntryDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiaryEntryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
