import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import {
  MatBadgeModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatStepperModule, 
  MatToolbarModule, 
  MatSidenavModule, 
  MatIconModule, 
  MatListModule,
  MatButtonToggleModule,
  MatGridListModule,
  MatSnackBarModule,
  MatProgressBarModule,
  MatCheckboxModule,
  MatTableModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatSelectModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatMenuModule
} from '@angular/material';

@NgModule({
  imports: [
    CdkTableModule,
    MatBadgeModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatStepperModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatTableModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatMenuModule
  ],
  exports: [
    CdkTableModule,
    MatBadgeModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatStepperModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatTableModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatMenuModule
  ]
})
export class MyMaterialModule {}