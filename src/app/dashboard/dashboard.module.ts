import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from '../home/home.component'
import { AlbumComponent } from '../album/album.component';
import { PhotosComponent } from '../photos/photos.component';
import { UserComponent } from '../user/user.component';

const dashBoardRoutes: Routes = [
  { path: '', component: DashboardComponent }  
];

@NgModule({
  imports: [
    RouterModule.forChild(dashBoardRoutes),
    SharedModule
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
