import { Component, OnInit } from '@angular/core';

import { WorksampleService } from './worksample.service';


@Component({
  moduleId: module.id,
  selector: 'my-store',
  templateUrl: 'store.component.html',
  styleUrls: ['store.component.css']
})

export class StoreComponent implements OnInit {

  store: string = "";

  constructor(private worksampleService: WorksampleService) { }

  ngOnInit(): void {
    this.worksampleService.getStore()
      .then(store => this.store = store);
  }
}
