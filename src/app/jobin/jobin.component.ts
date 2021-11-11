import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-jobin',
  templateUrl: './jobin.component.html',
  styleUrls: ['./jobin.component.scss']
})
export class JobinComponent implements OnInit {
  public PostData:any={
    
      "name": "morpheus",
      "job": "leader"
  

  }


  constructor(private http: HttpClient) { }
  

  ngOnInit(): void {
    this.getdata()
  }
  getdata(){
    this.http.post('https:reqres.in/api/users',this.PostData).subscribe((data) =>{
      console.log(data)
    })


  }
}