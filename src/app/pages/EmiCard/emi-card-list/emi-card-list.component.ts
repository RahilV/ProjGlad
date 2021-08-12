import { Component, OnInit } from '@angular/core';
import { EmiCardService } from 'src/app/Services/emi-card.service';
import { EmiCard } from '../EmiCard';

@Component({
  selector: 'app-emi-card-list',
  templateUrl: './emi-card-list.component.html',
  styleUrls: ['./emi-card-list.component.scss']
})
export class EmiCardListComponent implements OnInit {

  emiCardList:EmiCard[]
  constructor(private EmiCardService:EmiCardService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.EmiCardService.getEmiCardList().subscribe(
      data=>
      {
        this.emiCardList=data;
      }
    )
  }
}
