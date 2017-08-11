import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from "../pages/login/login";
import { TodayPage } from "../pages/today/today";
import { NextweekPage } from "../pages/nextweek/nextweek";
import { TeacherselectPage } from "../pages/teacherselect/teacherselect";
import { TeacherlistPage } from "../pages/teacherlist/teacherlist";
import { NewprojectPage } from "../pages/newproject/newproject";
import { FilterPage } from "../pages/filter/filter";

import { LoginServiceProvider } from '../pages/login/login-service';
import { TodayServiceProvider } from '../pages/today/today-service';
import { NextweekServiceProvider } from '../pages/nextweek/nextweek-service';
import { TeacherselectServiceProvider } from '../pages/teacherselect/teacherselect-service';
import { TeacherlistServiceProvider } from '../pages/teacherlist/teacherlist-service';
import { NewprojectServiceProvider } from '../pages/newproject/newproject-service';
import { FilterServiceProvider } from '../pages/filter/filter-service';
import { RegisterPage } from "../pages/register/register";
import { UiTreeComponent } from "../components/ui-tree/ui-tree";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    TodayPage,
    NextweekPage,
    TeacherselectPage,
    TeacherlistPage,
    NewprojectPage,
    FilterPage,
    RegisterPage,
    UiTreeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      mode: 'md'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    TodayPage,
    NextweekPage,
    TeacherselectPage,
    TeacherlistPage,
    NewprojectPage,
    FilterPage,
    RegisterPage,
    UiTreeComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    LoginServiceProvider,
    TodayServiceProvider,
    NextweekServiceProvider,
    TeacherselectServiceProvider,
    TeacherlistServiceProvider,
    NewprojectServiceProvider,
    FilterServiceProvider
  ]
})
export class AppModule { }
