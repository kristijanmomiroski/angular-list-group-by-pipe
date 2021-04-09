import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { GroupByPipe } from "../utils/pipes/groupByDate.pipe";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, GroupByPipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
