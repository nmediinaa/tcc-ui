import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogModule } from 'primeng/dialog';

@Component({
  standalone: true,
  selector: 'app-home-algorithmstep-dialog',
  imports: [DialogModule],
  templateUrl: './home-algorithmstep-dialog.component.html',
  styleUrl: './home-algorithmstep-dialog.component.css',
})

export class HomeAlgorithmstepDialogComponent {
  
  private readonly data = inject(MAT_DIALOG_DATA)
  private readonly ref = inject(MatDialogRef<HomeAlgorithmstepDialogComponent>)

  dataForms: any

  constructor(){}

  ngOnInit(){
    this.setData();
  }


  private setData(): void{
    this.dataForms = this.data
  }

  onClose(){
    this.ref.close()
  }
}
