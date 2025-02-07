import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsrWrapperComponent } from './ssr-wrapper.component';

describe('SsrWrapperComponent', () => {
  let component: SsrWrapperComponent;
  let fixture: ComponentFixture<SsrWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SsrWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SsrWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
