import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeavesComponent } from './weaves.component';

describe('WeavesComponent', () => {
  let component: WeavesComponent;
  let fixture: ComponentFixture<WeavesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeavesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
