import { Component, OnInit } from '@angular/core';
import {
  cardioEx,
  coreEx,
  lbIso,
  lbPullComp,
  lbPushComp,
  numbers,
  random,
  ubIso,
  ubPullComp,
  ubPushComp,
} from './workout';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss'],
})
export class WorkoutComponent implements OnInit {
  form = [
    { label: 'Full Body', isChecked: true },
    { label: 'Upper Body Push', isChecked: true },
    { label: 'Upper Body Pull', isChecked: true },
    { label: 'Lower Body Push', isChecked: true },
    { label: 'Lower Body Pull', isChecked: true },
    { label: 'Core', isChecked: true },
    { label: 'Cardio', isChecked: true },
  ];
  fullBody = true;
  upperBodyPush = true;
  upperBodyPull = true;
  lowerBodyPush = true;
  lowerBodyPull = true;
  core = true;
  cardio = true;
  finalEx = [];
  reps = [];
  isCollapsed = true;
  constructor() {}

  ngOnInit(): void {}
  checkAll() {
    if (this.fullBody) {
      this.upperBodyPull = true;
      this.upperBodyPush = true;
      this.lowerBodyPush = true;
      this.lowerBodyPull = true;
      this.core = true;
    }
  }
  checkOne() {
    if (
      [
        this.upperBodyPush,
        this.upperBodyPull,
        this.lowerBodyPush,
        this.lowerBodyPull,
        this.core,
      ].every(Boolean)
    ) {
      this.fullBody = true;
    } else {
      this.fullBody = false;
    }
  }
  generate() {
    this.reps.splice(0, this.reps.length);
    const final = new Set([]);
    if (this.upperBodyPull) {
      final.add(ubPullComp[random(ubPullComp.length)]);
    }
    if (this.upperBodyPush) {
      final.add(ubPushComp[random(ubPushComp.length)]);
    }
    if (this.lowerBodyPull) {
      final.add(lbPullComp[random(lbPullComp.length)]);
    }
    if (this.lowerBodyPush) {
      final.add(lbPushComp[random(lbPushComp.length)]);
    }
    if (this.core) {
      final.add(coreEx[random(coreEx.length)]);
    }
    if (this.cardio) {
      final.add(cardioEx[random(cardioEx.length)]);
    }
    while (final.size < 8) {
      const final2 = [];
      if (this.upperBodyPull) {
        final2.push(ubPullComp[random(ubPullComp.length)]);
        final2.push(ubIso[random(ubIso.length)]);
      }
      if (this.upperBodyPush) {
        final2.push(ubPushComp[random(ubPushComp.length)]);
        final2.push(ubIso[random(ubIso.length)]);
      }
      if (this.lowerBodyPull) {
        final2.push(lbPullComp[random(lbPullComp.length)]);
        final2.push(lbIso[random(lbIso.length)]);
      }
      if (this.lowerBodyPush) {
        final2.push(lbPushComp[random(lbPushComp.length)]);
        final2.push(lbIso[random(lbIso.length)]);
      }
      if (this.core) {
        final2.push(coreEx[random(coreEx.length)]);
      }
      if (this.cardio) {
        final2.push(cardioEx[random(cardioEx.length)]);
      }
      final.add(final2[random(final2.length)]);
      //console.log(final);
      //console.log(final2)
    }
    this.finalEx = Array.from(final);
    console.log(this.finalEx[0]);
  }
  randomNumber(finalEx) {
    //Number of Reps
    let i;
    for (i = 0; i < finalEx.length; i++) {
      this.reps.push(numbers[random(numbers.length)]);
    }
    console.log(this.reps);
  }
  refresh(i) {
    console.log(this.finalEx[i]);
    const newEx = [];
    if (this.upperBodyPull) {
      newEx.push(ubPullComp[random(ubPullComp.length)]);
      newEx.push(ubIso[random(ubIso.length)]);
    }
    if (this.upperBodyPush) {
      newEx.push(ubPushComp[random(ubPushComp.length)]);
      newEx.push(ubIso[random(ubIso.length)]);
    }
    if (this.lowerBodyPull) {
      newEx.push(lbPullComp[random(lbPullComp.length)]);
      newEx.push(lbIso[random(lbIso.length)]);
    }
    if (this.lowerBodyPush) {
      newEx.push(lbPushComp[random(lbPushComp.length)]);
      newEx.push(lbIso[random(lbIso.length)]);
    }
    if (this.core) {
      newEx.push(coreEx[random(coreEx.length)]);
    }
    if (this.cardio) {
      newEx.push(cardioEx[random(cardioEx.length)]);
    }
    //console.log(newEx)

    this.finalEx[i] = newEx[random(newEx.length)];

    /*while(newEx.includes(this.finalEx[i])) {
            if(this.upperBodyPull){
                newEx.push(ubPullComp[random(ubPullComp.length)])
                newEx.push(ubIso[random(ubIso.length)])
            }
            if(this.upperBodyPush){
                newEx.push(ubPushComp[random(ubPushComp.length)])
                newEx.push(ubIso[random(ubIso.length)])
            }
            if(this.lowerBodyPull){
                newEx.push(lbPullComp[random(lbPullComp.length)])
                newEx.push(lbIso[random(lbIso.length)])
            }
            if(this.lowerBodyPush){
                newEx.push(lbPushComp[random(lbPushComp.length)])
                newEx.push(lbIso[random(lbIso.length)])
            }
            if(this.core){
                newEx.push(coreEx[random(coreEx.length)])
            }
            if(this.cardio){
                newEx.push(cardioEx[random(cardioEx.length)])
            }
            console.log(newEx)

            this.finalEx[i] = newEx[random(newEx.length)]
        }*/
  }
  collapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
