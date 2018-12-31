import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  imports: [
    DialogModule,
    FormsModule,
    CommonModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
  ],
  declarations: [],
  exports: [CommonModule, FormsModule, DialogModule, MatTabsModule, MatIconModule, MatCardModule, MatButtonModule, MatInputModule]
})
export class SharedModule { }
