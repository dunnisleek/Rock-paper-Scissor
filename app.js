const app= Vue.createApp({
      
              data(){
                return{
                  user: '',
                  computer: '',
                  count:0,
                 modalRules:false,
                   option: {
                        rock:'./images/icon-rock.svg',
                        scissor:'./images/icon-scissors.svg',
                        paper:'./images/icon-paper.svg'
                
                }
              }
             
                },
              computed:{
                     setScore(count){

                            console.log(count)
              
                           },
                determineWinner() {
               
              //     userChoice = this.user, 
              //     getComputerChoice = this.computer
                  if (this.user=== this.computer) {
                  
                    return "game was a tie!"
                   
                    ;
                    
                  }
                  
                  if (this.user === "rock") {
                    if (this.computer === "paper") {
                      return "computer won!";
                      
                         
                    } else {
                      return "user won!" &&
                     this.count++;
                     
                    
                    }
                  }
                  
                  if (this.user === "paper") {
                    if (this.computer === "scissors") {
                     
                      return "computer won!";
                    }else{
                      return "user won!" &&
                      this.count++;
                      
                     
                    }
                    
                  }
                  
                  if (this.user === "scissors") {
                    if (this.computer === "rock") {
                      return "computer won";
                    
                    }
                    else {
                      return "user won!" &&
                      this.count++ ;
                   
                    }
                  } 
                }
              },
              methods:{
     
                getComputerChoice() {
                     
                let randomNumber  = Math.floor(Math.random() * 3)

                  if (randomNumber === 0) {
                    this.computer = "rock";
                  } else if (randomNumber === 1) {
                    this.computer = "paper";
                  } else {
                    this.computer = "scissors";
                  }
                  
               
              },
               startOver(){
                 this.user='',
                  this.computer=''
             },
             displayRules(){
              this.modalRules = !this.modalRules
             }
            
            
             
       
               
       }
            })
    

app.mount('#app')