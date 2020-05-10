import { Component, OnInit } from '@angular/core';
import { GithubApiService } from 'src/app/common/services/github/github-api.service';

@Component({
  selector: 'app-user-ranking',
  templateUrl: './user-ranking.component.html',
  styleUrls: ['./user-ranking.component.scss']
})
export class UserRankingComponent implements OnInit {

  constructor(private githubApiService: GithubApiService) { }

  ngOnInit(): void {
  
  }

}
