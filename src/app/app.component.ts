import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'My Account',
      url: '/customerprofile',
      icon: 'contact'
    },
    {
      title: 'Products',
      url: '/products',
      icon: 'list'
    },
    {
      title: 'Categories',
      url: '/categories',
      icon: 'grid'
    },
    {
      title: 'Tags',
      url: '/tags',
      icon: 'grid'
    },
    {
      title: 'Cart',
      url: '/cart',
      icon: 'cart'
    },
    {
      title: 'Checkout',
      url: '/checkout',
      icon: 'basket'
    },
    {
      title: 'Orders',
      url: '/orders',
      icon: 'reorder'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
