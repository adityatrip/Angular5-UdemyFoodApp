import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingEditComponentComponent } from './shopping-edit-component.component';

describe('ShoppingEditComponentComponent', () => {
  let component: ShoppingEditComponentComponent;
  let fixture: ComponentFixture<ShoppingEditComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingEditComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingEditComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
