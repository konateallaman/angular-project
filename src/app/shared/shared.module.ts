import { NgModel } from "@angular/forms";
import {NgModule}  from "@angular/core";
import { CardComponent } from "./card/card.component";

@NgModule({
declarations:[CardComponent],
exports:[CardComponent]
})
export class sharedModule{

}