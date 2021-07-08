import { Component } from '@angular/core';

import '@carbon/ibmdotcom-web-components/es/components/dotcom-shell/dotcom-shell-container';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dotcom-shell';

  getNavigationLinks() {
    let l1Data = {
      platform: {},
      menuItems: []
    };

    l1Data.platform = { name: 'IBM', url: '//www.ibm.com' };

    for (let i = 0; i < 5; i++) {
      l1Data.menuItems.push({ title: `Tab${i+1}`, titleEnglish: `/tab${i}`, url: `tab${i}` });
    }

    return l1Data;
  }
}
