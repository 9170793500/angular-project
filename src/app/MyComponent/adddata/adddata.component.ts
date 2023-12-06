import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-adddata',
  templateUrl: './adddata.component.html',
  styleUrls: ['./adddata.component.css']
})
export class AdddataComponent implements OnInit {
  inventoryForm: FormGroup;


  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) {}


  ngOnInit(): void {
    this.inventoryForm = this.fb.group({
      device_name: ['', Validators.required],
      storage: ['', Validators.required],
      serial_number: ['', Validators.required],
      ram: ['', Validators.required],
      charger_serialnum: ['', Validators.required],
      mouse_serialnum: ['', Validators.required],
      extra_device: ['', Validators.required],
      assign: ['', Validators.required],
      assign_date: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.inventoryForm.invalid) {
      return;
    }
  
    const formData = this.inventoryForm.value;
    this.apiService.addSystemInventory(formData).subscribe(
      (response) => {
        console.log('System inventory data added successfully:', response);
        // Navigate to the dashboard or another route
        this.router.navigate(['/dashboard']); // Replace '/dashboard' with the actual route
      },
      (error) => {
        console.error('Error adding system inventory data:', error);
      }
    );
  }
  
}
