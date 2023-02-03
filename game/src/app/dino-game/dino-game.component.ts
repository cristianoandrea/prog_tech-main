import { 
  Component,
  AfterViewInit, 
  HostListener,
  Renderer2, 
  ElementRef,ViewChild,
 } from '@angular/core';

@Component({
  selector: 'app-dino-game',
  templateUrl: './dino-game.component.html',
  styleUrls: ['./dino-game.component.css']
})
export class DinoGameComponent implements AfterViewInit {

  //private dino: any;
  
  public jump_status:boolean;
  @ViewChild("dino_el") dino: ElementRef | undefined;
  @ViewChild("cactus_el") cactus: ElementRef | undefined;

  constructor(){
    
    this.jump_status=false;
  }
  ngAfterViewInit(): void {
    
  }


  @HostListener('document:keyup', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        switch (event.key) {
            case 'ArrowLeft':
                this.jump()
                break;
            case 'ArrowUp':
              this.jump()
                break;
        }
  }
  
  public isAlive = setInterval( ()=> {
    if(this.dino && this.cactus!= null) {
      let dinoRight = this.dino.nativeElement.getBoundingClientRect().right
      let cactusLeft = this.cactus.nativeElement.getBoundingClientRect().left
      let dinoTop = this.dino.nativeElement.getBoundingClientRect().top
      //il dinosauro a sx si trova in posizione 277
      //
      if((cactusLeft-dinoRight<=10) && (dinoTop>=255)  ){
        alert("SCEMOOOOO");
        console.log(dinoTop)
      }
      
    }
  }, 1000);
  
  
  public jump() {
    
    this.jump_status=true;
    setTimeout(()=>{
      //console.log("durante:" ,this.dino)
      this.jump_status=false;
    },300)
    if (this.dino!=null ) {
      console.log("prima:" ,this.dino)
      let dinoRight = this.dino.nativeElement.getBoundingClientRect().right
      console.log("right:" ,dinoRight)
    }
    
  }

}



/*


let isAlive = setInterval(function () {
  // get current dino Y position
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

  // get current cactus X position
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  // detect collision
  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    // collision
    alert("Game Over!");
  }
}, 10);

document.addEventListener("keydown", function (event) {
  jump();
});
*/


