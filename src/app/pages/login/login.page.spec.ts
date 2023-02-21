import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { loadingReducer } from 'src/app/store/Loading/loading.reducer';

import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let router : Router;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [IonicModule.forRoot(),
        AppRoutingModule,
        StoreModule.forRoot([]),
        StoreModule.forFeature('loading', loadingReducer),
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should goes to home page on login',()=>{
   spyOn(router,'navigate');
   component.login();
   expect(router.navigate).toHaveBeenCalledWith(['home']);

  })
  it('should goes to register page on register',()=>{
   spyOn(router,'navigate');
   component.register();
   expect(router.navigate).toHaveBeenCalledWith(['register']);

  })
});
