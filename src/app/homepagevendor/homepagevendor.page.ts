import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepagevendor',
  templateUrl: './homepagevendor.page.html',
  styleUrls: ['./homepagevendor.page.scss'],
})
export class HomepagevendorPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  myprofile() {
    this.route.navigateByUrl('\profilevendor');
  }

  adsform() {
    this.route.navigateByUrl('\adsform');
  }

  subscription() {
    this.route.navigateByUrl('\subscription');
  }

  myadvertisement() {
    this.route.navigateByUrl('\myadvertisement');
  }

}
