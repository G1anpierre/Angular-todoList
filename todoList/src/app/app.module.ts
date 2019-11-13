import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CockpitComponent } from './components/cockpit/cockpit.component';
import { MainListComponent } from './components/main-list/main-list.component';
import { ItemListComponent } from './components/main-list/item-list/item-list.component';
import { HeaderComponent } from './components/header/header.component';
import { ToogleDoneComponent } from './components/toogle-done/toogle-done.component';
import { RemoveComponent } from './shared/remove/remove.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CockpitComponent,
    MainListComponent,
    ItemListComponent,
    HeaderComponent,
    ToogleDoneComponent,
    RemoveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
