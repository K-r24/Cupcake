import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitemapsComponent } from './sitemaps.component';

describe('SitemapsComponent', () => {
  let component: SitemapsComponent;
  let fixture: ComponentFixture<SitemapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitemapsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SitemapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
