import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {
  systemInventry: any[] = [];
  searchInputInventry = new FormControl('');

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchSystemInventry();
  }

  fetchSystemInventry() {
    this.http.get<any[]>('http://localhost:8000/api/system_inventry').subscribe((data) => {
      this.systemInventry = data;
    });
  }

  submitForm() {
   
  }
}
