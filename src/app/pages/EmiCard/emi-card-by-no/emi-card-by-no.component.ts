import { Component, OnInit } from '@angular/core';
import { EmiCardService } from 'src/app/Services/emi-card.service';
import { EmiCard } from '../../EmiCard';

@Component({
  selector: 'app-emi-card-by-no',
  templateUrl: './emi-card-by-no.component.html',
  styleUrls: ['./emi-card-by-no.component.scss']
})
export class EmiCardByNoComponent implements OnInit {

  emiCardObj:EmiCard= new EmiCard();
  cardNo:number=0;
  constructor(private EmiCardService:EmiCardService) { }

  ngOnInit(): void {
  }
  
  onSearch(){
    this.EmiCardService.getEmiByNo(this.cardNo).subscribe(data=>{this.emiCardObj=data;})
  }

}
