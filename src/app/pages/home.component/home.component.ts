import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
   animations: [
    trigger('menuAnimation', [
      transition('* <=> *', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('200ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        )
      ])
    ])
  ]
})
export class HomeComponent {

  currentMenu = 'main';

  mainMenu = [
    { label: 'Retro', action: 'retro' },
    { label: 'Streaming', action: 'streaming' },
    { label: 'Salir', action: 'exit' }
  ];

  streamingMenu = [
    { label: 'Netflix', action: 'netflix' },
    { label: 'Disney', action: 'disney' },
    { label: 'Prime', action: 'prime' },
    { label: 'HBO', action: 'hbo' },
    { label: 'YouTube', action: 'youtube' },
    { label: 'Jellyfin', action: 'jellyfin' },
    { label: 'Volver', action: 'back' }
  ];

  selectedIndex = 0;

  get menu() {
    return this.currentMenu === 'main'
      ? this.mainMenu
      : this.streamingMenu;
  }


  @HostListener('window:keydown', ['$event'])
  handleKeyboard(event: KeyboardEvent) {
    if (event.key === 'ArrowDown') {
      this.selectedIndex = (this.selectedIndex + 1) % this.menu.length;
    }

    if (event.key === 'ArrowUp') {
      this.selectedIndex =
        (this.selectedIndex - 1 + this.menu.length) % this.menu.length;
    }

    if (event.key === 'Enter') {
      this.launch(this.menu[this.selectedIndex].action);
    }
  }

  launch(action: string) {

    if (action === 'streaming') {
      this.currentMenu = 'streaming';
      this.selectedIndex = 0;
      return;
    }

    if (action === 'back') {
      this.currentMenu = 'main';
      this.selectedIndex = 0;
      return;
    }

    if (action === 'retro') {
      (window as any).api.launchRetro();
    }

    if (action === 'netflix') {
      (window as any).api.launchApp('Netflix');
    }

    if (action === 'disney') {
      (window as any).api.launchApp('Disney');
    }

    if (action === 'prime') {
      (window as any).api.launchApp('Prime');
    }

    if (action === 'hbo') {
      (window as any).api.launchApp('HBO');
    }

    if (action === 'youtube') {
      (window as any).api.launchApp('YouTube');
    }

    if (action === 'jellyfin') {
      (window as any).api.launchApp('Jellyfin');
    }

    if (action === 'exit') {
        (window as any).api.exitApp();
    }
  }
}
