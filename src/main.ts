import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//
// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(ToastrModule.forRoot(),HttpClientModule,BrowserAnimationsModule), // Include ToastrModule
  ],
}).catch(err => console.error(err));
