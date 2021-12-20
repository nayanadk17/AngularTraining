import { Component, OnInit } from '@angular/core';
import { Technology } from 'src/models/Technology';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent {

  techArray:Technology[]=[

    {path:"../../assets/images/angular.png",title:"Angular",description:"Front End Development Work"},
    {path:"../../assets/images/css.png",title:"CSS",description:"Standard Compliant Browser"},
    {path:"../../assets/images/chrome.png",title:"Chrome",description:"Google's market dominant Browser"},
    {path:"../../assets/images/git.PNG",title:"GIT",description:"Version Control System"},
    {path:"../../assets/images/node.PNG",title:"Node JS",description:"Backend JS Enviroment"},
    {path:"../../assets/images/aws.PNG",title:"AWS",description:"Cloud Computing Platform"},
  ];
} 