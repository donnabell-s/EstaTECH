import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-multi-step-form-indicator',
  imports: [CommonModule],
  templateUrl: './multi-step-form-indicator.component.html',
  styleUrl: './multi-step-form-indicator.component.css'
})
export class MultiStepFormIndicatorComponent implements OnInit {
  @Input() flows: number = 1;
  flowArray: { step: number; isMarked: boolean }[] = [];

  ngOnInit() {
    this.appendFlows();
  }

  appendFlows(): void {
    const newFlows = Array(this.flows).fill(0).map((_, index) => ({
      step: this.flowArray.length + index + 1,
      isMarked: false
    }));
    this.flowArray = [...this.flowArray, ...newFlows];
  }
}
