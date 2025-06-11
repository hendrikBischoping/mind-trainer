import { Routes } from '@angular/router';
import { GoalsComponent } from './goals/goals.component'; 
import { QuotesComponent } from './quotes/quotes.component';
import { HabitsComponent } from './habits/habits.component';

export const routes: Routes = [
    { path: '', component: GoalsComponent },
    { path: 'quotes', component: QuotesComponent },
    { path: 'habits', component: HabitsComponent},
];
