import { Component } from '@angular/core';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html'
})

export class ProductListComponent {
    products: any[] = [
        {
            productId: 1,
            productName: "Kafa",
            productCode: "K-12",
            category: "Topli napici",
            price: 2,
            rating: 4.8,
            imageUrl: "assets/img/kafa.png"
        },
        {
            productId: 2,
            productName: "Čaj",
            productCode: "K-85",
            category: "Topli napici",
            price: 1.5,
            rating: 3.2,
            imageUrl: "assets/img/tea.png"
        },
        {
            productId: 3,
            productName: "Coca cola",
            productCode: "C-11",
            category: "Bezalkoholna pića",
            price: 3.5,
            rating: 4.3,
            imageUrl: "assets/img/coke.png"
        },
        {
            productId: 4,
            productName: "Fanta",
            productCode: "F-41",
            category: "Bezalkoholna pića",
            price: 3,
            rating: 2.5,
            imageUrl: "assets/img/fanta.png"
        },
    ]
    date: any = new Date();
    showImage: boolean = false;

    toggleImage() {
        this.showImage = !this.showImage;
    }
}
