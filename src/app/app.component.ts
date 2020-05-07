import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecommerce';


  visible = false;
  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}
