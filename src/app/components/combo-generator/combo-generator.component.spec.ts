import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboGeneratorComponent } from './combo-generator.component';

describe('ComboGeneratorComponent', () => {
  let component: ComboGeneratorComponent;
  let fixture: ComponentFixture<ComboGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ComboGeneratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComboGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
