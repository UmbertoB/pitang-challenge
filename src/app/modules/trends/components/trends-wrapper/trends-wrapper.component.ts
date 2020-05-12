import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GithubApiService } from 'src/app/common/services/github/github-api.service';
import { ghColors } from 'src/app/modules/trends/utils/colors';
import { languages } from 'src/app/modules/trends/utils/languages';
import { columnDefs } from 'src/app/modules/trends/utils/columns';

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

  public localeText = {
    noRowsToShow: 'Nenhum dado encontrado',
  };

  ngOnInit(): void {

    this.filterForm = this.fb.group({
      languageCtrl: [''],
      periodCtrl: ['daily'],
    });

    this.activatedRoute.data.subscribe(routeData => {
      this.entity = routeData.entity;
      this.colDefs = columnDefs[this.entity];
      this.updateRowData();
    });

  }

  public filterList() {
    this.updateRowData();
  }

  private updateRowData() {
    const filters = {
      language: this.filterForm.get('languageCtrl').value,
      since: this.filterForm.get('periodCtrl').value,
    };
    this.rowData = this.githubApiService.getThrends(this.entity, filters);
  }

}
