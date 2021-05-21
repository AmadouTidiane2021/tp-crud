import { Component, OnInit } from '@angular/core';
import { Traductor } from 'src/app/decorators/traductor.decorator';
import { TimeTracker } from 'src/app/decorators/timeTracker.decorator';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  data: any;
  @Traductor("eng") // PropertyDecorator
  welcomeMessage: String;
  //@TimeTracker("home")
  constructor() {
    this.data = [
      {
        title: 'Yoda',
        description: 'Visibilité sur les 7 prochains jours',
        icon: '../../../assets/img/avatar-yoda.png',
      },
      {
        title: 'Leia',
        description: 'Priorisation des tâches',
        icon: '../../../assets/img/avatar-leia.png'
      },
      {
        title: 'Luke',
        description: 'Visualiser le travail accompli',
        icon: '../../../assets/img/avatar-luke.png'
      }
    ];
   }
  ngOnInit() {
  }
  onClick(event){
    let systemDark = window.matchMedia("(prefers-color-scheme: dark)");
    systemDark.addListener(this.colorTest);
    if(event.detail.checked){
      document.body.setAttribute('data-theme', 'dark');
    }
    else{
      document.body.setAttribute('data-theme', 'light');
    }
  }
   colorTest(systemInitiatedDark) {
    if (systemInitiatedDark.matches) {
      document.body.setAttribute('data-theme', 'dark');   
    } else {
      document.body.setAttribute('data-theme', 'light');
    }
  }
}