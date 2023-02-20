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
                    //  setScore(count){

                    //         console.log(count)
              
                    //        },
                determineWinner() {
               
              //     userChoice = this.user, 
              //     getComputerChoice = this.computer
                  if (this.user=== this.computer) {
                  
                    return "game was a tie!"
                   
                    ;
                    
                  }
                  
                  if (this.user === "rock") {
                    if (this.computer === "paper") {
                        if(this.count > 0){
                        this.count--;  
                      }
                      return "computer won!";
                      
                         
                    } else {
                      console.log("user won, rock", this.count);
                      this.count++
                      return "user won!" ;
                     
                    
                    }
                  }
                  
                  if (this.user === "paper") {
                    if (this.computer === "scissors") {
                      if(this.count > 0){
                        this.count--;  
                      }
                      return "computer won!" ;
                    }else{
                      this.count++
                      console.log("user won, paper", this.count);
                      return "user won!" ;
                      
                     
                    }
                    
                  }
                  
                  if (this.user === "scissors") {
                    if (this.computer === "rock") {
                      if(this.count > 0){
                        this.count--;  
                      }
                      return "computer won!";
                    
                    }
                    else {
                      this.count++
                      console.log("user won, scissors", this.count);
                      return "user won!";
                   
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
