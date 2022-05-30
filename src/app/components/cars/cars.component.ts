import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {ICar} from "../../interfaces/car.interface";
import {CarService} from "../../services/car.service";
import {RegEx} from "../../configs/regex";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: ICar[];
  form: FormGroup;
  carFormUpdate: ICar|null;

  constructor(private carService: CarService) {
    this._createForm()
  }

  ngOnInit(): void {
    this.carService.getAll().subscribe(value => this.cars = value);
  }

  _createForm(): void {
    this.form = new FormGroup({
      model: new FormControl(null, [Validators.pattern(RegEx.model)]),
      year: new FormControl(1990, [Validators.min(1990), Validators.max(new Date().getFullYear())]),
      price: new FormControl(0, [Validators.min(0), Validators.max(100000)])

    })
  }

  save(): void {
    if(!this.carFormUpdate){
      this.carService.create(this.form.value).subscribe(value => {
        this.cars.push(value);
        this.form.reset();
      })
    }else {
      this.carService.updateById(this.carFormUpdate.id, this.form.value).subscribe(value => {
        const updateCar = this.cars.find(f => f.id == this.carFormUpdate?.id);
        Object.assign(updateCar, value);
        this.carFormUpdate = null;
      })
    }
  }

  delete(id: number): void {
    this.carService.deleteById(id).subscribe(() => {
      const index = this.cars.findIndex(car => car.id == id)
      this.cars.splice(index, 1)
    })
  }

  update(car: ICar): void {
    this.carFormUpdate = car;
    this.form.setValue({model: car.model, year: car.year, price: car.price})
  }
}
