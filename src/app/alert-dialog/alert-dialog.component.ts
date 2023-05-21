import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

export interface DialogData {
  title: string;
  message: string;
  btnText: string;
  btnTextColor: string;
  btnCancelText: string;
  btnCancelTextColor: string;
}

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss']
})
export class AlertDialogComponent {

  title: string = '';
  message: string = '';
  btnText: string = 'Ok';
  btnTextColor: string = '#3E92CC';
  btnCancelText: string = '';
  btnCancelTextColor: string = '#41404D';

  constructor(
    public dialogRef: MatDialogRef<AlertDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    if (this.data != null) {
      if (this.data.title) {
        this.title = data.title;
      }
      if (this.data.message) {
        this.message = data.message;
      }
      if (this.data.btnText) {
        this.btnText = data.btnText;
      }
      if (this.data.btnTextColor) {
        this.btnTextColor = data.btnTextColor;
      }
      if (this.data.btnCancelText) {
        this.btnCancelText = data.btnCancelText;
      }
      if (this.btnCancelTextColor) {
        this.btnCancelTextColor = data.btnCancelTextColor;
      }
    }
  }

  cancelAlert() {
    this.dialogRef.close(false)
  }

  acceptAlert() {
    this.data.acceptAction();
    this.dialogRef.close(true);
  }
}
