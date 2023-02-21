import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Store, StoreModule } from '@ngrx/store';
import { hide, show } from 'src/app/store/Loading/loading.actions';
import { loadingReducer } from 'src/app/store/Loading/loading.reducer';

import { LoadingComponent } from './loading.component';
import { LoadingState } from 'src/app/store/Loading/loadingState';
import { AppState } from 'src/app/store/AppState';

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;
  let store: Store<AppState>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingComponent],
      imports: [
        IonicModule.forRoot(),
        StoreModule.forRoot([]),
        StoreModule.forFeature('loading', loadingReducer),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoadingComponent);
    store = TestBed.get(Store);


    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should hide loading component when it is not loading', () => {
    const compiled = fixture.nativeElement;
    store.dispatch(hide());
    fixture.detectChanges();
    expect(compiled.querySelector('.backdrop')).toBeNull();
  });

  it('should show loading component when it is loading', () => {
    const compiled = fixture.nativeElement;
    store.dispatch(show());
    fixture.detectChanges();
    expect(compiled.querySelector('.backdrop')).not.toBeNull();
  });
});
