import { Component, OnInit } from '@angular/core';
import  {MediaObserver, MediaChange} from '@angular/flex-layout';
import  { Subscription } from 'rxjs';

@Component({
  selector: 'app-snacksandbeverages',
  templateUrl: './snacksandbeverages.component.html',
  styleUrls: ['./snacksandbeverages.component.scss']
})
export class SnacksandbeveragesComponent implements OnInit {

  constructor(public mediaObserver:MediaObserver) { }
  mediaSub:Subscription
  deviceXs:boolean;
  deviceLg:boolean;
  deviceMd:boolean;
  deviceSm:boolean;

    ngOnInit() {
      this.mediaSub = this.mediaObserver.media$.subscribe((result:MediaChange)=>{
           console.log(result.mqAlias)
           this.deviceXs = result.mqAlias === 'xs'
           this.deviceSm = result.mqAlias ==='sm'
           this.deviceLg = result.mqAlias === 'lg'
           this.deviceMd = result.mqAlias === 'md'

         })
       }
  }

