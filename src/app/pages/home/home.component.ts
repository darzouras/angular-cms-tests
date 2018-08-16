import { Component, OnInit } from '@angular/core';

import { butterService } from '../../services/butterCMS.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public homeData;

  constructor() { }

  ngOnInit() {
    butterService.page.retrieve('*', 'home')
      .then((res) => {
        this.homeData = res.data.data;
        //console.log(this.homeData);
      }).catch((res) => {
        console.log('there was an error\n');
        console.log(res);
      })
  }

}
