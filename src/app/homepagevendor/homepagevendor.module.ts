import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomepagevendorPageRoutingModule } from './homepagevendor-routing.module';

import { HomepagevendorPage } from './homepagevendor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomepagevendorPageRoutingModule
  ],
  declarations: [HomepagevendorPage]
})
export class HomepagevendorPageModule {}
