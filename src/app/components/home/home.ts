import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAnchorCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { faHSquare } from '@fortawesome/free-solid-svg-icons'
import { faJarWheat } from '@fortawesome/free-solid-svg-icons'
import { faLadderWater } from '@fortawesome/free-solid-svg-icons'
import { faIcicles } from '@fortawesome/free-solid-svg-icons'
import { faWrench } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-home',
  imports: [FontAwesomeModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  protected readonly title = 'Welcome to the Home Page';
  faAnchorCircleExclamation = faAnchorCircleExclamation;
  faHSquare = faHSquare;
  faJarWheat = faJarWheat;
  faLadderWater = faLadderWater;
  faIcicles = faIcicles;
  faWrench = faWrench;
  ngOnInit() {
    initFlowbite();
  }

}
