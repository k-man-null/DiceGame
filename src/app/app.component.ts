import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'dicegame';
  date!: number;

  ngOnInit(): void {
    setInterval(() => {
      this.date = Date.now();
    }, 1000);
  }
}


