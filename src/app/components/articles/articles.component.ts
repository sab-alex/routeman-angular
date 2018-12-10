import { Component, OnInit } from '@angular/core';
import { ArticlesHttpService } from '../../services/http/articles-http.service';
import { Article } from '../../models/articles/article.model';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles: Article[] = null;
  articlesCount: number = null;

  constructor(private articlesHttpService: ArticlesHttpService) {

  }


  ngOnInit(): void {
    this.articlesHttpService.getAll().then( res => {
      if (!isNullOrUndefined(res.data)) {
        this.articles = res.data.map( (article: Article) => new Article().deserialize(article));
      }
      if (!isNullOrUndefined(res.count)) {
        this.articlesCount = res.count;
      }
    });
  }

}
