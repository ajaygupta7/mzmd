import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SimplebarAngularModule } from 'simplebar-angular';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
// import { ClickOutsideModule } from 'ng-click-outside';

// import { UIModule } from '../shared/ui/ui.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { RightsidebarComponent } from './rightsidebar/rightsidebar.component';
import { HorizontalComponent } from './horizontal/horizontal.component';
import { VerticalComponent } from './vertical/vertical.component';
import { HorizontaltopbarComponent } from './horizontaltopbar/horizontaltopbar.component';
import { LanguageService } from '../core/services/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
// import { Ng5SliderModule } from 'ng5-slider';

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [
    LayoutComponent, 
    SidebarComponent, 
    TopbarComponent, 
    FooterComponent, 
    RightsidebarComponent, 
    HorizontalComponent, 
    VerticalComponent, 
    HorizontaltopbarComponent,
    // NgxSliderModule
  ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    // Ng5SliderModule,
    // NgxSliderModule,
    // NgbDropdownModule,
    // ClickOutsideModule,
    // UIModule,
    SimplebarAngularModule,
    // NgxSliderModule
  ],
  providers: [LanguageService]
})
export class LayoutsModule { }
