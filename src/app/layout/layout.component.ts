import { Component, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { navigation } from '../config';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public navigationItems: any[]=  navigation;


  constructor(
    private mediaObserver: MediaObserver
  ) { }

  ngOnInit(): void {

    this.mediaObserver.asObservable().subscribe((values) => {
      console.log(values);
    })
  }

}
