import { Component, OnInit, HostListener, ViewChild, ElementRef, ViewContainerRef } from '@angular/core';
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

  @ViewChild("dino") dino: ElementRef | undefined;
  @ViewChild("grid") grid: ElementRef | undefined;
  @ViewChild("body") body: ElementRef | undefined;
  @ViewChild("alert") alert: ElementRef | undefined;

  constructor( private viewContainerRef: ViewContainerRef ) { 
    this.isJumping = false
    this.gravity = 0.9
    this.isGameOver = false
    this.position=0
    this.obstaclePosition=2000
    this.points=0
    
  }

  ngOnInit(): void {
    this.generateObstacles()
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
      if (event.key === 'ArrowLeft') {
        
        console.log("freccia sx")
      } else if (event.key === 'ArrowRight') {
        console.log("freccia dx")
      } else if (event.keyCode === 32) {
        if(!this.isJumping){
          this.isJumping=true
          this.jump()
        }
      } 
  }

  public game(){
    
    while (!this.isGameOver) {
      this.generateObstacles()
    }
  }

  private jump() {
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

      console.log(this.points)
      this.points+=100
    }
  },1000)
  
  public generateObstacles () {
    let pippo= setInterval(()=>{
      
      if(!this.isGameOver){
        this.obstaclePosition=1500
  
        let i=0
        let timerId = setInterval(()=>{
          //l'if che segue regola le condizioni per il gameover
          if(this.obstaclePosition > 0 && this.obstaclePosition < 60 && this.position <60) {
            //funzione che stoppa l'esecuzione di setinterval, e quindi del movimento degli ostacoli
            clearInterval(timerId)
            
            this.isGameOver=true
            console.log("posizione dinosauro" ,this.position)
            console.log("posizione cactus" ,this.obstaclePosition)        
            //alert("game over")
    
          }
          
          this.obstaclePosition-=10
        }, 20)
        //this.obstacles.splice(0)
      //setTimeout(this.generateObstacles, randomTime)
      }
    }, 3000)
}
  

}

/*
const obstacle=document.createElement('div')
obstacle.classList.add('obstacle')
this.grid.nativeElement.appendChild(obstacle)
obstacle.style.left = this.obstaclePosition + 'px'
*/

/*
.dino {
    position: absolute;
    width: 60px;
    height: 60px;
    background-image: url(img/t-rex.png);
    bottom: 0px;
}
  
.obstacle {
position: absolute;
width: 60px;
height: 60px;
background-image: url(img/cacti.png);
bottom: 0px;
}

@keyframes slideright {
    from {
        background-position: left 70000%;
    }
    to {
        background-position: left 0%;
    }
}

@-webkit-keyframes slideright {
    from {
        background-position: left 70000%;
    }
    to {
        background-position: left 0%;
    }
}

#desert {
position: absolute;
bottom: 0px;
background-image: url('img/t-rex-background.png');
background-repeat: repeat-x;
animation: slideright 600s infinite linear;
-webkit-animation: slideright 600s infinite linear;
width: 100%;
height: 200px;
}
*/

/*
.dino {
    position: absolute;
    width: 60px;
    height: 60px;
    background-color: red;
    bottom: Opx;
}

.obstacle {
    position: absolute;
    left:100px;
    width: 60px;
    height: 60px;
    background-color: rgb(255, 166, 0);
    bottom: Opx;
}
*/