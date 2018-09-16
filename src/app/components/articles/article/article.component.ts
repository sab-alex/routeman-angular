import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../../models/articles/article.model';
import { Photo } from '../../../models/photo/photo.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;

  constructor() { }

  ngOnInit() {
    console.log(this.article);
  }
  mainPhoto(): Photo {
    return this.article.photos.find( p => p.pivot.is_cover === 1);
  }
}
