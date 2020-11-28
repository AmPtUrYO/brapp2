import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { WorkoutComponent } from './workout.component';

const routes: Routes = [{
    path: '',
    component: WorkoutComponent
}]

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule
      ],
    declarations: [WorkoutComponent],

})

export class WorkoutModule {}