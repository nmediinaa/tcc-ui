import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  standalone: true,
  selector: 'app-email-dialog',
  imports: [FormsModule],
  templateUrl: './email-dialog.component.html',
  styleUrl: './email-dialog.component.css',
})
export class EmailDialogComponent {

  private ref = inject(MatDialogRef<EmailDialogComponent>)

  userEmail: string = '';

  onClose(): void {
    this.ref.close();
  }

  sendEmail(): void {
    // write a function to send user email
    console.log(this.userEmail)
    this.ref.close();
  }

}
