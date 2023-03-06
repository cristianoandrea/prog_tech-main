import { Component, NgModule, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class QuizComponent implements OnInit {

  public started:boolean
  public score:number
  private animalInfo: any
  public name:string
  private locations: string[]
  public questions: any
  private families: string[]
  public registered: boolean

  constructor(
    private http: HttpClient, 
    private modalService: NgbModal,
    public authservice:AuthService
    ) { 
    this.registered=false
    this.started=false
    this.score=0
    this.animalInfo=[]
    this.name=''
    this.locations=[
      'Antartica','Africa', 'North-America', 'South-America', 'Oceania', 'Asia', 'Central-America', 'Eurasia', 'Ocean', 'Europe'
    ]
    this.families=[
      'Canidae', 'Mustelidae', 'Hominidae', 'Cervidae', 'Sciuridae', 'Felidae', 'Equidae', 'Camelidae', 'Bovidae', 'Suidae'
    ]
    this.questions=[]
  }

  ngOnInit(): void {
  }

  public start(animal:string) {
    const headers = new HttpHeaders({
      'X-Api-Key': '3skSTXwWGlxmOPAiEX7DLA==5sp1UW4nSDvHbDR7'
    });
    this.name=animal
    this.http.get(`https://api.api-ninjas.com/v1/animals?name=${this.name}`, { headers })
      .subscribe((data) => {
        this.animalInfo = data;
        console.log(this.animalInfo); 
        this.generateQuestions();
        this.started=true
      });
  }

  private generateQuestions(){
    //per ciascuna domanda che lo richiede genero un indice diverso
    if(this.animalInfo.length>0){
      let i = Math.floor(Math.random() * this.animalInfo.length);
      this.geoQuestions(this.animalInfo[i])

      this.speciesNumberQuestions()

      i = Math.floor(Math.random() * this.animalInfo.length);
      this.sciNameQuestions(this.animalInfo[i])

      i = Math.floor(Math.random() * this.animalInfo.length);
      if(this.animalInfo[i].characteristics.estimated_population_size !=null){
        this.estimatedPopulationQuestion(this.animalInfo[i])
      }
      i = Math.floor(Math.random() * this.animalInfo.length);
      this.lifespanQuestion(this.animalInfo[i])

      i = Math.floor(Math.random() * this.animalInfo.length);
      this.familyQuestion(this.animalInfo[i])

    }
  }

  private geoQuestions(animal:any){
    let question_text="Where does the " + animal.name + " come from?"
    //sarebbe necessario parsare animal.locations per vedere se ne ha più di una
    let correctAnswer=animal.locations[0]
    let all_answers=this.chooseRandomElements(correctAnswer, "Locations")
    
    let trivia_question = {
      question: question_text,
      all_answers: all_answers,
      correctAnswer: correctAnswer
    };
    this.questions.push(trivia_question);
    
  }
  
  private speciesNumberQuestions(){
    let question_text="How many species of " + this.name + " do exist?"
    let correctAnswer=this.animalInfo.length
    let all_answers=this.generateRandomSpeciesNumber(correctAnswer)
    let trivia_question = {
      question: question_text,
      all_answers: all_answers,
      correctAnswer: correctAnswer
    };

    this.questions.push(trivia_question);
  }

  private generateRandomSpeciesNumber(correctAnswer:number){
    const min = Math.max(0, correctAnswer - 10);
    const max = correctAnswer + 10;
    const possibleAnswers = [correctAnswer];

    while (possibleAnswers.length < 4) {
      const randomAnswer = Math.floor(Math.random() * (max - min) + min);
      if (!possibleAnswers.includes(randomAnswer)) {
        possibleAnswers.push(randomAnswer);
      }
    }

    return this.shuffleAnswers(possibleAnswers);
}

private chooseRandomElements(correctAnswer: string, type:string): string[] {
    let all_answers: string[] = [];
    switch(type){
      case 'Locations':
      for (let i = 0; i < 3; i++) {
        let randomLocation = correctAnswer;
        while (randomLocation === correctAnswer || all_answers.includes(randomLocation)) {
          randomLocation = this.locations[Math.floor(Math.random() * this.locations.length)];
        }
        all_answers.push(randomLocation);
      }
      break;
      case 'Family':
        for (let i = 0; i < 3; i++) {
          let randomFamily = correctAnswer;
          while (randomFamily === correctAnswer || all_answers.includes(randomFamily)) {
            randomFamily = this.families[Math.floor(Math.random() * this.families.length)];
          }
          all_answers.push(randomFamily);
        }
        break;
      default:
        console.log("NOOOOOOOOOO")
        break;
    }
    
    all_answers.push(correctAnswer)
    return all_answers;
  }
  
  private sciNameQuestions(animal:any){
    //in input si prende un elemento casuale dell'array animalInfo
    const sci_name=animal.taxonomy.scientific_name
    let question_text="Which species of " + this.name + " is known as " + sci_name
    let correctAnswer = animal.name
    let all_answers=this.chooseRandomSpecies(correctAnswer, "Name")
    let trivia_question = {
      question: question_text,
      all_answers: all_answers,
      correctAnswer: correctAnswer
    };
    this.questions.push(trivia_question);
  }

  private chooseRandomSpecies(correctAnswer:string, type:string){
    let all_species: string[] = [];
    let i = 0;

    switch(type){
      case 'Name':
        while (i < 3) {
          let random_index = Math.floor(Math.random() * this.animalInfo.length);
          let random_species = this.animalInfo[random_index].name;
          if (random_species != correctAnswer && !all_species.includes(random_species)) {
            all_species.push(random_species);
            i++;
          }
        }
        break
      
      case 'Population':
        while (i < 3) {
          let random_index = Math.floor(Math.random() * this.animalInfo.length);
          let random_species = this.animalInfo[random_index].characteristics.estimated_population_size;
          if (random_species != correctAnswer && !all_species.includes(random_species) && random_species!=null) {
            all_species.push(random_species);
            i++;
          }
        }
        break

        case 'Lifespan':
        while (i < 3) {
          let random_index = Math.floor(Math.random() * this.animalInfo.length);
          let random_species = this.animalInfo[random_index].characteristics.lifespan;
          if (random_species != correctAnswer && !all_species.includes(random_species) && random_species!=null) {
            all_species.push(random_species);
            i++;
          }
        }
        break
      default:
        console.log("e no dai...")
        break
    }
    
    
    all_species.push(correctAnswer);
    
    all_species = this.shuffleAnswers(all_species);
    return all_species;
  }

  private estimatedPopulationQuestion(animal:any){
    let question_text= "What is the estimated population size of " + animal.name + "?"
    let correctAnswer=animal.characteristics.estimated_population_size
    let all_answers=this.chooseRandomSpecies(correctAnswer, "Population")
    let trivia_question = {
      question: question_text,
      all_answers: all_answers,
      correctAnswer: correctAnswer
    };
    this.questions.push(trivia_question);
  }

  private lifespanQuestion(animal:any){
    let question_text= "What is the average lifespan of the "+ animal.name +"?"
    let correctAnswer=animal.characteristics.lifespan
    let all_answers=this.chooseRandomSpecies(correctAnswer, "Lifespan")
    let trivia_question = {
      question: question_text,
      all_answers: all_answers,
      correctAnswer: correctAnswer
    };
    this.questions.push(trivia_question);
  }

  private familyQuestion(animal:any){
    let question_text="Which family does the " + animal.name + " belongs to?"
    let correctAnswer=animal.taxonomy.family
    let all_answers=this.chooseRandomElements(correctAnswer, "Family")
    
    let trivia_question = {
      question: question_text,
      all_answers: all_answers,
      correctAnswer: correctAnswer
    };
    this.questions.push(trivia_question);
  }


  private shuffleAnswers(all_answers: any) {
    let answers = all_answers;
    for (let i = answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [answers[i], answers[j]] = [answers[j], answers[i]];
    }
    return answers;
  }

  public checkAnswers(question:any, chosen:any){
    question.selectedAnswer = chosen;
    question.user_answer = chosen;
    //si guarda se la risposta scelta all'interno dell'array answers è quella bona
    if(chosen==question.correctAnswer) {
      console.log("true")
      console.log(chosen)
      return true
    }  
    else{
      console.log("false")
      return false
    } 
  }
  
  public submit() {
    
    this.questions.forEach((question:any) => {
      if (this.checkAnswers(question, question.user_answer)) {
        this.score++;
      }
    });
    const totalQuestions = this.questions.length;
    const percentage = (this.score / totalQuestions) * 100;
    console.log("Score: " + this.score + " / " + totalQuestions + " (" + percentage + "%)");
    return percentage;
  }

  public openVerticallyCentered(content:any) {
		this.modalService.open(content, { centered: true });
	}

  public register_score(username:string,score:number) {
    console.log(username, score)
  }
  

}


/*
<div class="game" *ngIf="questions">
      <div class="question_block" *ngFor="let domanda of questions; let i = index">
        <h4 class="question">{{domanda.question}}</h4>
        <div class="risposte row ">
          <div class="col-md-6 col-sm-12" *ngFor="let risp of domanda.all_answers">
            <div class="form-check " >
                <input 
                    class="risposta_input" 
                    type="button" 
                    [name]="'question-' + i" 
                    [value]="risp" 
                    [ngClass]="{'selected-yellow': domanda.selectedAnswer == risp}"
                    (click)="domanda.selectedAnswer = risp; checkAnswers(domanda, risp)"
                >
            </div>
          </div>
        </div>
      </div>
      <button class="btn btn-secondary start_button" *ngIf="started" (click)="submit();openVerticallyCentered(content) ">Submit</button>
      <ng-template #content let-modal>
        <div class="modal-header">
            <h4 class="modal-title">A Grandeee!!!</h4>
            <button type="button" class="btn-close" aria-label="Close" (click)="modal.dismiss('Cross click')"></button>
        </div>
        <div class="modal-body">
            <p>hai fatto: {{score}} punti.... disgraziato</p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-light" (click)="modal.close('Close click')">Close</button>
        </div>
      </ng-template>
      
    </div>
*/