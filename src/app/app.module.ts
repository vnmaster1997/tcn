import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AutomaticSchedulingComponent } from './automatic-scheduling/automatic-scheduling.component';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WarningDialogComponent } from './warning-dialog/warning-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    AutomaticSchedulingComponent,
    AlertDialogComponent,
    ConfirmDialogComponent,
    WarningDialogComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    MatButtonModule,
    // BrowserAnimationsModule,
  ],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } },
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
