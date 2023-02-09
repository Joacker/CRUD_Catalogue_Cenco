import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayUsersComponent } from './array-users.component';

describe('ArrayUsersComponent', () => {
  let component: ArrayUsersComponent;
  let fixture: ComponentFixture<ArrayUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
