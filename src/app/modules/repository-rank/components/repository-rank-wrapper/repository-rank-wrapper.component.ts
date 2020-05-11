import { Component, OnInit } from '@angular/core';
import { GithubApiService } from 'src/app/common/services/github/github-api.service';
import { DatePipe } from '@angular/common';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-repository-rank-wrapper',
  templateUrl: './repository-rank-wrapper.component.html',
  styleUrls: ['./repository-rank-wrapper.component.scss'],
})
export class RepositoryRankWrapperComponent implements OnInit {

  colDefs = [
    { headerName: 'Name', field: 'name', sortable: true, filter: true },
    { headerName: 'Stars', field: 'stargazers_count', valueFormatter: this.stargazersFormatter, sortable: true, filter: true },
    { headerName: 'Última Atualização', field: 'updated_at', valueFormatter: this.bracketsFormatter, sortable: true, filter: true },
  ];

  rowData: any;

  constructor(private githubApiService: GithubApiService) { }

  ngOnInit(): void {

    this.rowData = this.githubApiService.getBestRepositories('');

  }

  private bracketsFormatter(params) {
    return new DatePipe('pt').transform(params.value, 'short');
  }

  private stargazersFormatter(params) {
    return params.value > 1000 ? (params.value / 1000).toFixed(0) + 'k' : params.value;
  }

}
