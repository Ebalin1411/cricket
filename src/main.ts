import chalk from 'chalk';
console.log(chalk.blue('India ')+chalk.yellow(' Vs ')+chalk.red(' England'));

//assigning Types for array objects 
    enum DismissalType{
        BOWLED = 'Bowled',
        RUNOUT ='Run Out',
        LBW ='Leg Before Wicket',
        NULL='null'
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
        wicketsLost:number;
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
        const updatedTeamObj = inputArray.reduce((acc:any,ball)=>{
          return{
            totalRuns: acc.totalRuns + ball.runsScored,
            wicketLost:acc.wicketsLost +(ball.isOut ? 1:0),
            totalBalls: acc.totalBalls + 1,
           }; 

        }, india);

        console.log('India Score',updatedTeamObj);