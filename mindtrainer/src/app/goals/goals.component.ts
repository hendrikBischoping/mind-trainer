import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-goals',
  standalone: true,
  imports: [HeaderComponent, FormsModule, CommonModule],
  templateUrl: './goals.component.html',
  styleUrl: './goals.component.scss'
})
export class GoalsComponent {
  enteredGoal = '';
  inputEmpty = false;
  movedGoal = '';

  goals = [
    { goal: 'Das ist mein erstet Ziel' },
    { goal: 'Das ist mein zweites Ziel' },
    { goal: 'Das ist mein drittes Ziel' },
    { goal: 'Das ist mein viertes Ziel' },
    { goal: 'Das ist mein fünftes Ziel' },
  ]

  onSubmit() {
    if (this.enteredGoal !== "") {
      this.inputEmpty = false;
      this.goals.unshift({
        goal: this.enteredGoal,
      })
      this.enteredGoal = "";
    } else {
      this.inputEmpty = true;
      setTimeout(() => {
        this.inputEmpty = false;
      }, 1000);
    }

  }

  onDeleteGoal(index: number) {
    this.goals.splice(index, 1);
  }

  onMoveGoalUp(index: number) {
    this.movedGoal = this.goals[index].goal;
    this.goals.splice(index, 1);
    console.log(this.movedGoal + index);
    if (index <= 0) {
    this.goals.splice(this.goals.length, 0, {goal: this.movedGoal})
    } else {
    this.goals.splice(index-1, 0, {goal: this.movedGoal})
    }
  }

  onMoveGoalDown(index: number) {
    this.movedGoal = this.goals[index].goal;
    this.goals.splice(index, 1);
    console.log(this.movedGoal + index);
    if (index >= this.goals.length) {
      this.goals.splice(0, 0, {goal: this.movedGoal})
    } else {this.goals.splice(index+1, 0, {goal: this.movedGoal})}
  }
}