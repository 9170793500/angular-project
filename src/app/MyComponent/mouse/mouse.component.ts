import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-mouse',
  templateUrl: './mouse.component.html',
  styleUrls: ['./mouse.component.css']
})
export class MouseComponent implements OnInit {
  mouseForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.mouseForm = this.formBuilder.group({
      device_name: ['', Validators.required],
      brand: ['', Validators.required],
      serial_number: ['', Validators.required],
      quantity: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.mouseForm.invalid) {
      return;
    }

    const formData = this.mouseForm.value;
    this.apiService.addMouseStock(formData).subscribe(
      (response) => {
        console.log('Mouse stock data added successfully:', response);
        this.router.navigate(['/dashboard']); // Redirect to the dashboard page
      },
      (error) => {
        console.error('Error adding mouse stock data:', error);
      }
    );
  }
}
