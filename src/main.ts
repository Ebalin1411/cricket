import chalk from 'chalk';
import { join } from 'path';
import { isBigIntLiteral } from 'typescript';


//assigning Types for array objects 
    enum DismissalType{
        BOWLED = 'Bowled',
        RUNOUT ='Run Out',
        LBW ='Leg Before Wicket',
        //NULL='null'
    }   

    interface DismissalInfo{
        fielderName:string;
        hasBatsmanCrossed:Boolean; 
        batsmanOut:'striker' |'non-striker'; 
    }
    
    interface  BallInfo{
        runsScored: number;
        isOut:Boolean;
        dismissalType?:DismissalType;
        dismissalInfo?: DismissalInfo; 
        batsmanName:string
        bowlerName:string;
      }
    
    type Team={
        totalRuns:number;
        wicketsLost: number;
        totalBalls:number;
        }
   
    const india: Team={
        totalRuns:0,
        wicketsLost:0,
        totalBalls:0
        }

    const england: Team ={
        totalRuns:0,
        wicketsLost:0,
        totalBalls:0
        }
           
    //Main Programs Starts here
        const inputArray: Array<BallInfo> = require('./data.json');       
        const updatedTeamObj = inputArray.reduce((acc:any,ball)=>{    //Error:No overload matches this call.Overload 1 of 3,         
            return{
            totalRuns: acc.totalRuns + ball.runsScored,     
            wicketLost:acc.wicketsLost +(ball.isOut ? 1:0),        
            totalBalls: acc.totalBalls + 1,
           };
          
        }, india);
       
        console.log(updatedTeamObj)
       // const playerBatName  =inputArray.map(players=>players.batsmanName);
        //const uniqBatmanName =Array.from(new Set(playerBatName)).join('\n');
        
         // Bowlers
         const playerBowlerName  =inputArray.map(players=>players.bowlerName);
         const uniqBowlerName    = Array.from(new Set(playerBowlerName)).join('\n');
        

       //Calculate run for Batmans
       //filter() and reduce() Array methods together----------
        const run_DK =inputArray.filter(n=>n.batsmanName=='DK').reduce((acc,runDK)=>acc+runDK.runsScored,0); 
        const run_Hardik =inputArray.filter(n=>n.batsmanName=='Hardik').reduce((acc, run_Hardik)=>acc+ run_Hardik.runsScored,0); 
        const run_Kohli=inputArray.filter(n=>n.batsmanName=='Kohli').reduce((acc, run_Kohli)=>acc+ run_Kohli.runsScored,0);                   
        const run_Rahul =inputArray.filter(n=>n.batsmanName=='Rahul').reduce((acc, run_Rahul)=>acc+ run_Rahul.runsScored,0);                   
        const run_Rohit =inputArray.filter(n=>n.batsmanName=='Rohit').reduce((acc, run_Rohit)=>acc+ run_Rohit.runsScored,0);                   
        const run_SKY =inputArray.filter(n=>n.batsmanName=='SKY').reduce((acc, run_SKY)=>acc+ run_SKY.runsScored,0);                        
        
        //Total Run middle message
        const totalrun =inputArray.reduce((run,total)=>run +total.runsScored,0);             
        

    

    function printScoreCard(){
        //Tittle
        console.log(chalk.blueBright('India ')+chalk.yellow(' Vs ')+chalk.red(' England'));
        console.log(join('\n'));
        //BatMan's Score
        console.log(chalk.blueBright('DK                ')+chalk.white(run_DK));
        console.log(chalk.blueBright('Hardik            ')+chalk.white(run_Hardik));
        console.log(chalk.blueBright('Kohli             ')+chalk.white(run_Kohli));
        console.log(chalk.blueBright('Rahul             ')+chalk.white(run_Rahul));
        console.log(chalk.blueBright('Rohit             ')+chalk.white(run_Rohit));
        console.log(chalk.blueBright('SKY               ')+chalk.white(run_SKY));
        console.log(join('\n'));
        console.log('    Total '+chalk.red( totalrun)+' Runs  for'+ chalk.red(' 60 ')+'Balls');
        console.log(join('\n'));
        //Bowler's Score              
        console.log(chalk.white('BOWLERS            R'));  
        console.log(chalk.blueBright(uniqBowlerName));
        
    }     

    printScoreCard();
  
             
         