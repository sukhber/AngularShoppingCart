import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './product-search.component.html'
})
export class ProductSearchComponent {

  productName: string = this.route.snapshot.queryParamMap.get('name');
  productCode: string = this.route.snapshot.queryParamMap.get('code');
  startDate: string = this.route.snapshot.queryParamMap.get('startDate');
  endDate: string = this.route.snapshot.queryParamMap.get('endDate');

  constructor (private router: Router, private route: ActivatedRoute) {
    /*this.productName = null;
    this.productCode = null;
    this.startDate = null;
    this.endDate = null;*/
  }

  onCancel(): void {
    this.router.navigate(['/welcome']);
  }

  /*onSearch(): void {
    this.router.navigate(
      ['/products', 
        {
            name: this.productName,
            code: this.productCode,
            startDate: this.startDate,
            endDate: this.endDate 
        }
      ]
    );
  }*/
}