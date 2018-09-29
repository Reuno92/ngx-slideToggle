import { Component, OnInit } from '@angular/core';
import {ArticlesService} from '../services/articles.service';
import {Articles} from '../models/articles';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  public articles;

  constructor(private articlesService: ArticlesService) {
      this.articles = this.articlesService.articles;
  }

  ngOnInit() {
  }

}
