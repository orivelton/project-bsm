import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuHoverComponent } from './menu-hover.component';

describe('MenuHoverComponent', () => {
  let component: MenuHoverComponent;
  let fixture: ComponentFixture<MenuHoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuHoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
