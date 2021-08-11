import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/Services/test.service';
import { Products } from './test';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  prdList:Products[];
  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.testService.getAllProducts().subscribe(data => 
      {
        this.prdList = data;
      }
    )

}
}