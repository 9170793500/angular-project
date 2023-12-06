import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {
  systemInventry: any[] = [];
  searchInputInventry = new FormControl('');
  campaigns: any[] = []; 
  editingCampaign: number | null = null;
  editedCampaign: any = {};
  


  constructor(private http: HttpClient, private router: Router, private apiService: ApiService) {}
  ngOnInit(): void {
    this.fetchSystemInventry();
  }

  fetchSystemInventry() {
    this.http.get<any[]>('http://localhost:8000/api/system_inventry').subscribe((data) => {
      this.systemInventry = data;
    });
    
  }

  
 
}