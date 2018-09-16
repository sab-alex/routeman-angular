import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleComponent } from './components/articles/article/article.component';
import { AppRoutingModule } from './/app-routing.module';
import {APP_BASE_HREF} from '@angular/common';

import {HttpModule} from '@angular/http';

import {ArticlesHttpService} from './services/http/articles.http.service';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue : '/' },
    ArticlesHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
