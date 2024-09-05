import { Routes } from '@angular/router';
import { SearchComponent } from './Componenets/search/search.component';
import { BookingComponent } from './Componenets/booking/booking.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'search',
        pathMatch:'full'

    },
    {
      path:'search',
      component:SearchComponent
    },
    {
        path:'booking',
        component:BookingComponent
    }
];
