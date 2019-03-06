import { Component, OnInit } from '@angular/core';
import { ProjectList } from '../project-list';
declare let $: any;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = ProjectList;

  constructor() { }

  ngOnInit() {

  }
}
