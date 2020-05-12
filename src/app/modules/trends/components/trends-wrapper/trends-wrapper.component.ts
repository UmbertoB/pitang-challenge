import { Component, OnInit } from '@angular/core';
import { GithubApiService } from 'src/app/common/services/github/github-api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ghColors } from './colors';
import { languages } from './languages';
import { ActivatedRoute, Router } from '@angular/router';
import { columnDefs } from './columns';

@Component({
  selector: 'app-trends-wrapper',
  templateUrl: './trends-wrapper.component.html',
  styleUrls: ['./trends-wrapper.component.scss'],
})
export class TrendsWrapperComponent implements OnInit {

  private entity: string;
  public filterForm: FormGroup;
  rowData: any;

  public colDefs;

  readonly avaiableLanguages = languages;
  readonly colors = ghColors;

  constructor(
    private githubApiService: GithubApiService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.filterForm = this.fb.group({
      languageCtrl: [''],
      periodCtrl: ['daily'],
    });

    this.activatedRoute.data.subscribe(routeData => {
      this.entity = routeData.entity;
      this.colDefs = columnDefs[this.entity];
      const filters = {
        language: this.filterForm.get('languageCtrl').value,
        since: this.filterForm.get('periodCtrl').value,
      };
      this.rowData = this.githubApiService.getThrends(routeData.entity, filters);
    });

  }

  public filterList() {

    const filters = {
      language: this.filterForm.get('languageCtrl').value,
      since: this.filterForm.get('periodCtrl').value,
    };
    this.rowData = this.githubApiService.getThrends(this.entity, filters);

  }


}
