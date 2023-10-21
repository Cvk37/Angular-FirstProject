import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerQueriesComponent } from './player-queries.component';

describe('PlayerQueriesComponent', () => {
  let component: PlayerQueriesComponent;
  let fixture: ComponentFixture<PlayerQueriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerQueriesComponent]
    });
    fixture = TestBed.createComponent(PlayerQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
