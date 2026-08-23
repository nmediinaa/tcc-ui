import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { MatStepperModule } from '@angular/material/stepper';
import { ButtonModule } from "primeng/button";
import { MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { HomeAlgorithmstepDialogComponent } from '../../shared/home-algorithmstep-dialog/home-algorithmstep-dialog.component';
import { FooterComponent } from "../../shared/footer/footer.component";
import * as AOS from 'aos';
import { steps } from '../../constants/algorithmstep.constants';
import { RouterOutlet } from '@angular/router';
import { StepsFlowComponent } from "../../shared/steps-flow/steps-flow.component";
import { StepsAlgorithmComponent } from "../../shared/steps-algorithm/steps-algorithm.component";

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [HeaderComponent, MatStepperModule,
    ButtonModule, MatDialogModule, FooterComponent, RouterOutlet, StepsFlowComponent, StepsAlgorithmComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {

  private ref = inject(MatDialog);
  private header = '';
  private p = '';

  ngOnInit() {
    AOS.init({
      duration: 1500,
      once: true
    })
  }

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
