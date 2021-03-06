import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { TestCmpComponent } from './test-cmp/test-cmp.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { SwitchTestComponent } from './switch-test/switch-test.component';
import { ClockTestComponent } from './clock-test/clock-test.component';
import { ReadTextFileTestComponent } from './read-text-file-test/read-text-file-test.component';
import { CountdownTestComponent } from './countdown-test/countdown-test.component';
import { TrelloComponent } from './trello/trello.component';
import { SnakeTestComponent } from './snake-test/snake-test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestCmpComponent,
    HeroFormComponent,
    SwitchTestComponent,
    ClockTestComponent,
    ReadTextFileTestComponent,
    CountdownTestComponent,
    TrelloComponent,
    SnakeTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'clock',
        component: ClockTestComponent
      },
      {
        path: 'countdown',
        component: CountdownTestComponent
      },
      {
        path:'test',
        component: TestCmpComponent
      },
      {
        path:'trello',
        component: TrelloComponent
      },
      {
        path:'snake',
        component: SnakeTestComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
