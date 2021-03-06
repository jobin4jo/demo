import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FormControl, FormGroup ,FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-jobin',
  templateUrl: './jobin.component.html',
  styleUrls: ['./jobin.component.scss']
})
export class JobinComponent implements OnInit {
  myForm!: FormGroup;
  fb: any;
  // public PostData:any={
    
  //     "name": "morpheus",
  //     "job": "leader"
  

  // }


  constructor(private http: HttpClient) { }
  

  ngOnInit(): void {
    this.myForm = new FormGroup({
      password: new FormControl(''),
      email: new FormControl(''),
      message: new FormControl('')
    
    });
    this.myForm = this.fb.group({
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(15)]],
    });

   
    // this.getdata()
  }
  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('password', form.value.password);
    console.log('Email', form.value.email);
    console.log('Message', form.value.message);
  }
  // getdata(){
  //   this.http.post('https:reqres.in/api/users',this.PostData).subscribe((data) =>{
  //     console.log(data)
  //   })


  // }
}
