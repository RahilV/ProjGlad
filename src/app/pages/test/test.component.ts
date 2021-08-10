import { Component, OnInit } from '@angular/core';
import { Products } from './test';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  prdList:Products[] =
  [
    {productId:101,productName:"TEST ITEM 1"},
    {productId:102,productName:"TEST ITEM 2"},
    {productId:103,productName:"TEST ITEM 3"},
    {productId:103,productName:"TEST ITEM 3"},
    {productId:103,productName:"TEST ITEM 3"}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
