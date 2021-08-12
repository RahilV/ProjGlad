import { Component, OnInit } from '@angular/core';
import { EmiCardService } from 'src/app/Services/emi-card.service';
import { EmiCard } from '../EmiCard';

@Component({
  selector: 'app-create-emi-card',
  templateUrl: './create-emi-card.component.html',
  styleUrls: ['./create-emi-card.component.scss']
})
export class CreateEmiCardComponent implements OnInit {

  emiCard:EmiCard = new EmiCard();
  submitted = false;

  constructor(private EmiCardService:EmiCardService) { }

  ngOnInit(): void {
  }
newEmiCard():void{
  this.submitted = false;
  this.emiCard = new EmiCard();
}
save(){
  this.EmiCardService.createEmiCard(this.emiCard).subscribe(data => console.log(data), error => console.log(error));
  this.emiCard = new EmiCard();
  console.log("New Emi Card created" + this.emiCard);
}
onSubmit() {
  this.submitted = true;
    this.save();
}
}
