import { Component, inject } from '@angular/core';
import { steps } from '../../constants/algorithmstep.constants';
import { HomeAlgorithmstepDialogComponent } from '../home-algorithmstep-dialog/home-algorithmstep-dialog.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-steps-algorithm',
  imports: [],
  templateUrl: './steps-algorithm.component.html',
  styleUrl: './steps-algorithm.component.css',
})
export class StepsAlgorithmComponent {

  private ref = inject(MatDialog)
  private header: string = ''
  private p: string = ''

  showDialog(step: number) {
      
      switch (step) {
        case 1:
          this.header = steps[0].header 
          this.p = steps[0].p
          break;
        case 2:
          this.header = steps[1].header
          this.p = steps[1].p
          break;
        case 3:
          this.header = steps[2].header
          this.p = steps[2].p
          break;
        case 4:
          this.header = steps[3].header
          this.p = steps[3].p
          break;
        default:
          console.log("Erro nos case do switch")
      }
  
      this.ref.open(HomeAlgorithmstepDialogComponent,
        {
          width: '400px',
          disableClose: true,
          data: {
            header: this.header,
            p: this.p
          }
        },
      )
    }

}
