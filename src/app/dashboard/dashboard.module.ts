import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';


import { HomeComponent } from '../home/home.component'
import { AlbumComponent } from '../album/album.component';
import { PhotosComponent } from '../photos/photos.component';
import { UserComponent } from '../user/user.component';

const dashBoardRoutes: Routes = [
  { path: '', component: DashboardComponent }  
];

@NgModule({
  imports: [
    CommonModule,

    MatTabsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    DialogModule,
    FormsModule,
    RouterModule.forChild(dashBoardRoutes)
  ],
  declarations: [
    DashboardComponent,
    HomeComponent,
    AlbumComponent,
    PhotosComponent,
    UserComponent    
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
