import { Component, OnInit } from '@angular/core';
import { SService } from 'src/app/serve/s.service';

@Component({
  selector: 'app-ajax-arry',
  templateUrl: './ajax-arry.component.html',
  styleUrls: ['./ajax-arry.component.css']
})
export class AjaxArryComponent implements OnInit {
a
  constructor(private serv:SService) {
this.serv.httpGetTxt(
  "https://raw.githubusercontent.com/bresleveloper/db/master/ajax/someDB.json")
.subscribe((result)=>{
  this.a=result
  console.log( this.a);
  
})
   }
;

  ngOnInit(): void {
  }

}
