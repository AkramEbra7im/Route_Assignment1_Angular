import { Component } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  color:string='#2C3E50'
  address:string='CONATCT SECTION'
  showLabel(event:any){
    if($(event.target).val()){
      console.log($(event.target));
      $(event.target).prev().animate({
        top:0
      })
    }
    else{
      console.log('no');
      $(event.target).prev().animate({
        top:50 +'px'
      })
    }
  }
 
}
