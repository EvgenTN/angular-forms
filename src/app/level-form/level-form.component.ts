import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-level-form',
  templateUrl: './level-form.component.html',
  styleUrls: ['./level-form.component.css']
})
export class LevelFormComponent implements OnInit {

  levels = ['High school', 'College', 'University'];

  paperTypes = ['A4', 'A3', 'A2'];

  calcForm: FormGroup;

  level: number;

  paperType: number;

  totalNumber: number;

  total: number;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.formInit();
    this.total = 1;
    this.calcForm.valueChanges
      .subscribe((value: any) => {
        // console.log(value);
        this.levelPrice(value);
        this.paperPrice(value);
        this.totalPrice(value);
      });
  }

  formInit(): void {
    this.calcForm = this.fb.group({
      level: [
        this.levels[0],
        Validators.required
      ],
      paperType: [
        this.paperTypes[0]
      ],
      page: [1, Validators.required],
    });
  }

  levelPrice(valueForm): void {
    switch (valueForm.level) {
      case 'High school':
        this.level = 1;
        break;
      case 'College':
        this.level = 2;
        break;
      case 'University':
        this.level = 3;
    }
  }

  paperPrice(value): void {
    switch (value.paperType) {
      case 'A4':
        this.paperType = 1;
        break;
      case 'A3':
        this.paperType = 1.2;
        break;
      case 'A2':
        this.paperType = 1.5;
    }
  }

  totalPrice(value): number {
      this.totalNumber = this.level * this.paperType * value.page;
    return (
      this.total = +this.totalNumber.toFixed(2)
    );
  }

}
