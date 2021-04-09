import { Component, Pipe, PipeTransform } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  mockResponse = [
    {
      date: "2017-12-26",
      id: 1,
      title: "test 1"
    },
    {
      date: "2017-12-26",
      id: 2,
      title: "test 2"
    },
    {
      date: "2017-12-26",
      id: 3,
      title: "test 3"
    },
    {
      date: "2017-12-26",
      id: 4,
      title: "test 4"
    },
    {
      date: "2017-12-30",
      id: 3,
      title: "test 3"
    },
    {
      date: "2017-12-30",
      id: 2,
      title: "test 2"
    },
    {
      date: "2017-12-31",
      id: 4,
      title: "test 4"
    }
  ];
}
