import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-automatic-scheduling',
  templateUrl: './automatic-scheduling.component.html',
  styleUrls: ['./automatic-scheduling.component.scss']
})
export class AutomaticSchedulingComponent {

  constructor(
    public dialogRef: MatDialogRef<AutomaticSchedulingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    // if (this.data != null) {
    //   if (this.data.title) {
    //     this.title = data.title;
    //   }
    //   if (this.data.message) {
    //     this.message = data.message;
    //   }
    //   if (this.data.btnText) {
    //     this.btnText = data.btnText;
    //   }
    //   if (this.data.btnTextColor) {
    //     this.btnTextColor = data.btnTextColor;
    //   }
    //   if (this.data.btnCancelText) {
    //     this.btnCancelText = data.btnCancelText;
    //   }
    //   if (this.btnCancelTextColor) {
    //     this.btnCancelTextColor = data.btnCancelTextColor;
    //   }
    // }
  }

  handleCancel(e: any) {
    this.dialogRef.close(false)
  }

  handleAccept(e: any) {
    this.data.acceptAction();
    this.dialogRef.close(true);
  }
}
