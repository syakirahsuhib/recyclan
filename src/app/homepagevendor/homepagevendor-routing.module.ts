import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepagevendorPage } from './homepagevendor.page';

const routes: Routes = [
  {
    path: '',
    component: HomepagevendorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomepagevendorPageRoutingModule {}
