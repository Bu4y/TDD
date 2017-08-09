import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeacherselectPage } from './teacherselect';

@NgModule({
  declarations: [
    TeacherselectPage,
  ],
  imports: [
    IonicPageModule.forChild(TeacherselectPage),
  ],
})
export class TeacherselectPageModule {}
