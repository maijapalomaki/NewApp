import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PAGENAMEPage } from './pagename.page';

describe('PAGENAMEPage', () => {
  let component: PAGENAMEPage;
  let fixture: ComponentFixture<PAGENAMEPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PAGENAMEPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PAGENAMEPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
