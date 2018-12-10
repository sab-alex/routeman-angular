import { Component, OnInit, Input } from '@angular/core';
import { CommentsHttpService } from '../../services/http/comments-http.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() ObjectModel: any;

  constructor(private commentsHttpService: CommentsHttpService) { }

  ngOnInit() {
    console.log(this.ObjectModel);
  }

}
