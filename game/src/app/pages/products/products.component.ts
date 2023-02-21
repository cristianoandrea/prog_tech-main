import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/card/card.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: Card[]

  constructor() {
    this.products=[
      {
        p: "Delicious and nutritious, our grass-fed beef is packed with protein and healthy fats.",
        h1: "Grass-Fed Beef",
        button: "Learn More",
        img: "https://example.com/grass-fed-beef.jpg",
        alt: "Picture of grass-fed beef",
        href: "https://example.com/grass-fed-beef-page"
      },
      {
        p: "Our free-range chicken is lean, tender, and full of flavor. Perfect for grilling or roasting.",
        h1: "Free-Range Chicken",
        button: "Shop Now",
        img: "https://example.com/free-range-chicken.jpg",
        alt: "Picture of free-range chicken",
        href: "https://example.com/free-range-chicken-page"
      },
      {
        p: "Our wild-caught salmon is rich in omega-3 fatty acids and has a delicate, buttery flavor that melts in your mouth.",
        h1: "Wild-Caught Salmon",
        button: "Shop Now",
        img: "https://example.com/wild-caught-salmon.jpg",
        alt: "Picture of wild-caught salmon",
        href: "https://example.com/wild-caught-salmon-page"
      },
      {
        p: "Satisfy your sweet tooth with our organic, cage-free eggs, laid by happy, healthy hens.",
        h1: "Organic Eggs",
        button: "Learn More",
        img: "https://example.com/organic-eggs.jpg",
        alt: "Picture of organic eggs",
        href: "https://example.com/organic-eggs-page"
      },
      {
        p: "Our grass-fed bison is lean and flavorful, with a rich, beef-like taste and a lower fat content than traditional beef.",
        h1: "Grass-Fed Bison",
        button: "Buy Now",
        img: "https://example.com/grass-fed-bison.jpg",
        alt: "Picture of grass-fed bison",
        href: "https://example.com/grass-fed-bison-page"
      },
      {
        p: "Enjoy the tangy, creamy goodness of our goat cheese, made from the milk of happy, healthy goats.",
        h1: "Goat Cheese",
        button: "Shop Now",
        img: "https://example.com/goat-cheese.jpg",
        alt: "Picture of goat cheese",
        href: "https://example.com/goat-cheese-page"
      },
      {
        p: "Our pasture-raised pork is tender and juicy, with a rich, porky flavor that will satisfy any meat lover.",
        h1: "Pasture-Raised Pork",
        button: "Learn More",
        img: "https://example.com/pasture-raised-pork.jpg",
        alt: "Picture of pasture-raised pork",
        href: "https://example.com/pasture-raised-pork-page"
      }

    ]
   }

  ngOnInit(): void {
  }

  //l'idea è di fare varie funzioni con api call al backend per 
  //creare vari array ognuno con un tipo di prodotti: cani, gatti ecc...

}
