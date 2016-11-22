import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { WorksampleService } from './worksample.service';


@Component({
  moduleId: module.id,
  selector: 'my-list',
  templateUrl: 'list.component.html',
  styleUrls: [ 'list.component.css' ]
})

export class ListComponent implements OnInit {
  timestamps: string[];

  constructor(
    private router: Router,
    private worksampleService: WorksampleService) { }

  getList(): void {
    this.worksampleService.getList().then(
      timestamps => this.timestamps = timestamps);
  }

  ngOnInit(): void {
    this.getList();
  }
}
