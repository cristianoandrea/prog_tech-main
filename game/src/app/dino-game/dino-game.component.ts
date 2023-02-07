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
  public points: number
  public jump_status:boolean;
  public isPaused:boolean
  @ViewChild("dino_el") dino: ElementRef | undefined;
  @ViewChild("cactus_el") cactus: ElementRef | undefined;

  constructor(){
    this.points=0;
    this.jump_status=false;
    this.isPaused=false;
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

  public setPoints= setInterval(()=>{
    if(!this.isPaused){

      console.log(this.points)
      this.points+=100
    }
  },1000)
  
  public isAlive = setInterval( ()=> {
    if(this.dino && this.cactus!= null) {
      let dinoRight = this.dino.nativeElement.getBoundingClientRect().right
      let cactusLeft = this.cactus.nativeElement.getBoundingClientRect().left
      let dinoTop = this.dino.nativeElement.getBoundingClientRect().top
      //il dinosauro a sx si trova in posizione 277
      //
      if((cactusLeft-dinoRight<=10) && (dinoTop>=255)  ){
        alert("COJONA AHAHAHAHAHA COJONAAAA AAHAHAHAHAH");
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
document.addEventListener('DOMContentLoaded', () => {
const dino = document.querySelector('.dino')
const grid = document.querySelector('.grid')
const body = document.querySelector('body')
const alert = document.getElementById('alert')
let isJumping = false
let gravity = 0.9
let isGameOver = false

function control(e) {
  if (e.keyCode === 32) {
    if (!isJumping) {
      isJumping = true
      jump()
    }
  }
}
document.addEventListener('keyup', control)

let position = 0
function jump() {
  let count = 0
  let timerId = setInterval(function () {
    //move down
    if (count === 15) {
      clearInterval(timerId)
      let downTimerId = setInterval(function () {
        if (count === 0) {
          clearInterval(downTimerId)
          isJumping = false
        }
        position -= 5
        count--
        position = position * gravity
        dino.style.bottom = position + 'px'
      },20)

    }
    //move up
    position +=30
    count++
    position = position * gravity
    dino.style.bottom = position + 'px'
  },20)
}

function generateObstacles() {
  let randomTime = Math.random() * 4000
  let obstaclePosition = 1000
  const obstacle = document.createElement('div')
  if (!isGameOver) obstacle.classList.add('obstacle')
  grid.appendChild(obstacle)
  obstacle.style.left = obstaclePosition + 'px'

  let timerId = setInterval(function() {
    if (obstaclePosition > 0 && obstaclePosition < 60 && position < 60) {
      clearInterval(timerId)
      alert.innerHTML = 'Game Over'
      isGameOver = true
      //remove all children
      body.removeChild(body.firstChild)
      while (grid.firstChild) {
        grid.removeChild(grid.lastChild)
      }
      
    }
    obstaclePosition -=10
    obstacle.style.left = obstaclePosition + 'px'
  },20)
  if (!isGameOver) setTimeout(generateObstacles, randomTime)
}
generateObstacles()
})


HTML VECCHIO:
<div class="game" >
    

  <p *ngIf="isPaused">IL GIOCO È IN PAUSA</p>
  <p *ngIf="isPaused">PORCO</p>
  <p *ngIf="isPaused">DIO</p>
  <div  [ngClass]="{'jump': jump_status, 'dino': !isPaused}"></div>
  <div  [ngClass]="{'cactus': !isPaused}"></div>

<button type="button" class="btn btn-secondary buttone" (click)="isPaused = !isPaused">Pausa</button>
<button type="button" class="btn btn-secondary buttone"  (keyup.Space)="jump()" (click)="jump()">Salta!</button>
</div>
*/
