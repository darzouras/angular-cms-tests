import { Component, OnInit } from '@angular/core';

import {butterService} from '../../services/butterCMS.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {
  posts = [];
  constructor() { }

  fetchPosts() {
    butterService.post.list({
      page: 1,
      page_size: 10
    }).then((res) => {
      this.posts = res.data.data;
      //console.log(this.posts)
    })
  }
  ngOnInit() {
    this.fetchPosts();
  }

}
