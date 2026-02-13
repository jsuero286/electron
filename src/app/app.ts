import { Component, signal } from '@angular/core';
import { HomeComponent } from './pages/home.component/home.component';

@Component({
  selector: 'app-root',
    standalone: true,
  imports: [HomeComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('htpc-hub');
}
