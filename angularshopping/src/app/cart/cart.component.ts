import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItem } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getCartItem();
  totalprice = this.cartService.getTotalPrice();
  cartItem: CartItem | undefined;

  delete(pid: any){
    this.cartService.deleteItem(pid);
    alert("DELETE !! Please click OK");

  }

  deleteCart(){
    this.items = []
    this.cartService.clearCart()
    this.totalprice=0;
    alert("CLEAR ALL!! Please click OK");

  }

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

}
