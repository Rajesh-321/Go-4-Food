import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBookComponent } from './table-book.component';

describe('TableBookComponent', () => {
  let component: TableBookComponent;
  let fixture: ComponentFixture<TableBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableBookComponent]
    });
    fixture = TestBed.createComponent(TableBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
