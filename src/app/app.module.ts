import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleComponent } from './components/articles/article/article.component';
import { AppRoutingModule } from './/app-routing.module';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentItemComponent } from './components/comments/comment-item/comment-item.component';

import {APP_BASE_HREF} from '@angular/common';
import {HttpModule} from '@angular/http';

import {ArticlesHttpService} from './services/http/articles-http.service';
import {CommentsHttpService} from './services/http/comments-http.service';




@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    ArticleComponent,
    CommentsComponent,
    CommentItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue : '/' },
    ArticlesHttpService,
    CommentsHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
