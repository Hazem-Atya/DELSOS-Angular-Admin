import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'argon-dashboard-angular';

  testForm(test){
    console.log(test)
    console.log(new Date().toISOString())
    console.log(new Date().toLocaleTimeString())
    console.log(new Date().toDateString())
    console.log(new Date().toTimeString())
    console.log(new Date().toJSON())
  }
}
