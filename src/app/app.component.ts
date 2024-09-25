import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { ClienteComponent } from "../cliente/cliente.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ClienteComponent, FooterComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'essia-front-end-angular';
}
