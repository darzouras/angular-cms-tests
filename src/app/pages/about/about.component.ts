import { Component, OnInit } from '@angular/core';

import {butterService} from '../../services/butterCMS.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public aboutData;
  constructor() { }

  ngOnInit() {
    butterService.page.retrieve('*', 'about')
      .then((res) => {
        this.aboutData = res.data.data;
        //console.log(this.aboutData);
      }).catch((res) => {
        console.log('there was an error\n');
        console.log(res);
      })
  }

}
