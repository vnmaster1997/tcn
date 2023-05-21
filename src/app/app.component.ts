import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { WarningDialogComponent } from './warning-dialog/warning-dialog.component';
import { AutomaticSchedulingComponent } from './automatic-scheduling/automatic-scheduling.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 't-connect';
  constructor(private dialog: MatDialog) {

  }

  openConfirm() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      // panelClass: 'confirm-dialog',
      // disableClose: true,
      data: {
        title: 'Xác nhận gửi',
        content: 'Bạn có chắc chắn muốn gửi ?',
        acceptText: 'Áp dụng',
        okAction: () => {
          // this.loadingService.hide();

        }
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      // this.loadingService.hide();
    });
  }

  openAlert() {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: {
        title: 'Do you want to save changes?',
        message: 'Confirm the changes you’ve made to this call.',
        btnText: 'Save',
        btnCancelText: 'Cancel',
        btnTextColor: '#FFFFFF',
        btnCancelTextColor: '#28293D',
        acceptAction: () => {
          // this.saveSchedule();
        }
      }
    });
    dialogRef.afterClosed().subscribe((result) => { });
  }

  openWarning() {
    const dialogRef = this.dialog.open(WarningDialogComponent, {
      data: {
        title: 'Không thể xóa',
        message: 'Bạn không thể xóa do hóa đơn đã được gửi đi',
        // acceptText: 'Ok',
        // btnCancelText: 'Cancel',
        // btnTextColor: '#FFFFFF',
        // btnCancelTextColor: '#28293D',
        acceptAction: () => {
          // this.saveSchedule();
        }
      }
    });
    dialogRef.afterClosed().subscribe((result) => { });
  }

  openAutomaticScheduling() {
    const dialogRef = this.dialog.open(AutomaticSchedulingComponent, {
      data: {
        cancelText: "Đóng",
        acceptText: "Áp dụng"
      }
    });
    dialogRef.afterClosed().subscribe((result) => { });
  }
}
