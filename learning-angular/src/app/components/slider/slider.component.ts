import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.css"]
})
export class SliderComponent implements OnInit {
  /**
   * PROPERTIES
   */
  @Input() nombre: string;
  @Input() size: string;

  constructor() {}

  ngOnInit() {}
}
