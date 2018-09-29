import { Component, OnInit, Input } from '@angular/core';
import {Articles} from '../../models/articles';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() article = Articles;

  constructor() { }

  ngOnInit() {
  }

}
