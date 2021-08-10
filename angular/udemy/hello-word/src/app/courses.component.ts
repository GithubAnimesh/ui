import { Component } from '@angular/core';
//Below this is what we call decoreted function.
@Component({
  selector: 'courses', // We set this to a css selector, to refer element <courses></courses> also for <div class="courses"> selector could be selector: '.courses'
  template: `
    <h2>{{ tital }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
    <img [src]="imgUrl" />
    <button class="btn btn-primary" (click)="onSave()">Click here</button>
    <input [(ngModel)]="email" (keyup.enter)="onTwoway()" />
  `
  //  <img [src] = "imgUrl"/>   property bind we can also use this <img src = {{ imgUrl }}/>
})
export class CoursesComponent {
  // two way data Binding
  email = "abc@gail.com";
  onTwoway() {
    console.log(this.email);
  }

  // with the help of template variable(#email) console email on keyup enter.
  onKeyEnter(email: any) {
    console.log(email);
  }
  // After click on cta print console
  onSave() {
    console.log('Button was clicked');
  }
  // here we return the value of input field
  onKeyUp($event: any) {
    console.log($event.target.value);
  }
  tital = 'List of Courses';
  courses = ['ABC', 'DEF', 'GHI'];
  imgUrl =
    'https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/dde43e1f-ab46-4b00-855e-ee990110c2e1/Common/Campaign/Images/2021/July-2021/HDFC-CIBIL-Feb-Campaign-01-598X130.jpg';
}
