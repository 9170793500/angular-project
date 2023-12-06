import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
    systemInventory: any[] = [];
    mouseData: any[] = [];
    stockData: any[] = [];
    totalItemCount: number = 0;
    totalItem: number = 0;
    totalQuantity: number = 0;
    inventoryItemCount: number = 0;
    searchText = new FormControl('');
    searchInputSystem = new FormControl('');
   
    
   
  
    constructor(private http: HttpClient) {}
  
    ngOnInit(): void {
      this.fetchSystemInventory();
      this.fetchMouseData(); 
      this.fetchStockData();
      
    }
  
    fetchSystemInventory() {
      this.http.get<any[]>('http://localhost:8000/api/system_inventry').subscribe((data) => {
        this.systemInventory = data;
        this.inventoryItemCount = this.systemInventory.length;
      });
  
    }
  
    fetchMouseData() {
      this.http.get<any[]>('http://localhost:8000/api/mouse').subscribe((data) => {
        this.mouseData = data;
        this.totalItem = this.mouseData.length;
      });
    }
    fetchStockData() {
      this.http.get<any[]>('http://localhost:8000/api/stock').subscribe((data) => {
        this.stockData = data;
        this.totalItemCount = this.stockData.length;
        this.calculateTotalQuantity();
      });
    }
    calculateTotalQuantity() {
      
      
      this.totalQuantity = this.stockData.reduce((total, item) => {
        console.log('Item:', item);
        return total + parseInt(item.quantity || '0');
      }, 0);
    }
    
  
    submitForm() {
      // Implement the form submission logic here
      // For example, you can make HTTP requests, update data, etc.
    }
    
  }
