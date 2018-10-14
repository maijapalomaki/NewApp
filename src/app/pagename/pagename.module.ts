import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PAGENAMEPage } from './pagename.page';

const routes: Routes = [
  {
    path: '',
    component: PAGENAMEPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PAGENAMEPage]
})
export class PAGENAMEPageModule {}
