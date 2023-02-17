import { Component, OnInit, HostListener, ViewChild, ElementRef, ViewContainerRef, Renderer2 } from '@angular/core';
import { throwIfEmpty } from 'rxjs';

@Component({
  selector: 'app-trex-game',
  templateUrl: './trex-game.component.html',
  styleUrls: ['./trex-game.component.css']
})
export class TrexGameComponent implements OnInit {

  public isJumping : boolean
  public gravity: number
  public isGameOver: boolean
  public position: number
  public obstaclePosition: number
  public points: number
  public obstacleSpeed: number = 10;

  @ViewChild("dino") dino: ElementRef | undefined;
  @ViewChild("grid") grid: ElementRef | undefined;
  @ViewChild("body") body: ElementRef | undefined;
  @ViewChild("alert") alert: ElementRef | undefined;

  constructor( 
    private viewContainerRef: ViewContainerRef, 
    private renderer:Renderer2) { 
    this.isJumping = false
    this.gravity = 0.9
    this.isGameOver = false
    this.position=0
    this.obstaclePosition=1500
    this.points=0
    
  }

  ngOnInit(): void {
    this.generateObstacles_1()
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
      if (event.key === 'ArrowLeft') {
        
        console.log("freccia sx")
      } else if (event.key === 'ArrowRight') {
        this.game()
        console.log("freccia dx")
      } else if (event.keyCode === 32) {
        if(!this.isJumping){
          this.isJumping=true
          this.jump()
        }
      } 
  }

  public game() {
    const d2 = this.renderer.createElement('div');
    this.renderer.addClass(d2, 'obstacle');
    if (this.grid != null) this.renderer.appendChild(this.grid.nativeElement, d2);
  }

  public jump() {
    let count=0
    let timerId = setInterval(()=>{
      if(this.dino!=null){

        if(count==15) {
          clearInterval(timerId)
          
          let downTimerId = setInterval(()=>{
            if(this.dino!=null){
              if(count==0) {
                clearInterval(downTimerId)
                this.isJumping=false
              }
              this.position-=2
              count--
              this.position=this.position*this.gravity
              this.dino.nativeElement.style.bottom = this.position + 'px';
            }
          }, 20)
          
        }
        
        this.position+=15
        count++
        this.position=this.position*this.gravity
        this.dino.nativeElement.style.bottom = this.position + 'px';
      }
      
    }, 20)
  }

  public setPoints= setInterval(()=>{
    if(!this.isGameOver){

      //console.log(this.points)
      this.points+=100
    }
  },1000)
  
  public generateObstacles () {
    
    let randomTime = Math.random() * 4000
      if(!this.isGameOver){
        this.obstaclePosition=1500
        const obstacle = this.renderer.createElement('div');
        this.renderer.addClass(obstacle, 'obstacle');
        if (this.grid != null) {
          this.renderer.appendChild(this.grid.nativeElement, obstacle);
          obstacle.style.left = this.obstaclePosition + 'px'
        }
        
        let timerId = setInterval(()=>{
          //l'if che segue regola le condizioni per il gameover
          if(this.obstaclePosition > 0 && this.obstaclePosition < 60 && this.position <60) {
            //funzione che stoppa l'esecuzione di setinterval, e quindi del movimento degli ostacoli
            clearInterval(timerId)
            //this.isGameOver=true
            this.renderer.removeChild(this.grid, obstacle)
          }
          
          this.obstaclePosition -= this.obstacleSpeed;
          obstacle.style.left = this.obstaclePosition + 'px'
        }, 20)
      console.log(randomTime)
      setTimeout(this.generateObstacles.bind(this), randomTime)
      }
    
  }

  public generateObstacles_1() {
    let randomTime = Math.random() * 4000;
    let intervalId = setInterval(() => {
      if (!this.isGameOver) {
        this.obstaclePosition = 1500;
        const obstacle = this.renderer.createElement('div');
        this.renderer.addClass(obstacle, 'obstacle');
        if (this.grid != null) {
          this.renderer.appendChild(this.grid.nativeElement, obstacle);
          obstacle.style.left = this.obstaclePosition + 'px';
        }
  
        let timerId = setInterval(() => {
          if (this.obstaclePosition > 0 && this.obstaclePosition < 60 && this.position < 60) {
            clearInterval(timerId);
            this.renderer.removeChild(this.grid, obstacle);
            this.isGameOver=true
          }
  
          this.obstaclePosition -= this.obstacleSpeed;
          obstacle.style.left = this.obstaclePosition + 'px';
        }, 20);
      } else {
        clearInterval(intervalId);
      }
    }, randomTime);
  }

}

