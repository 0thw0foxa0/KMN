const botpic = document.getElementById('botpic');
const playerpic = document.getElementById('playerpic');
let playerscore=document.getElementById('playerScore');
let botscore =document.getElementById('computerScore');




function random(){
    let randomNum = Math.floor(Math.random()*3)
    arr=['rock','paper','scissors'];
    switch(arr[randomNum]){
        case 'rock':{
            document.getElementById('botpic').src="./src/image/rock_pc.svg";

            document.getElementById('botChoose').innerHTML = "rock";

            console.log('bot choose rock');
            return arr[randomNum];
        }
        break;
        case 'paper':{
            document.getElementById('botpic').src="./src/image/paper_pc.svg";

            document.getElementById('botChoose').innerHTML = "paper";

            console.log('bot choose paper');
            return arr[randomNum];
        }
        break;
        case 'scissors':{
           document.getElementById('botpic').src= "./src/image/scissors_pc.svg";

           document.getElementById('botChoose').innerHTML = "scissors";

        console.log('bot choose scissors');
        return arr[randomNum];
        }
    }
}

function check(itemP, itemB){
   if(itemP===itemB){ console.log('draw');document.getElementById('lol').innerHTML = "draw";}
   else if(itemP=='paper' && itemB=='rock')

   {
    console.log('player win');
    document.getElementById('lol').innerHTML = "player win";
    return 'player';

}

   else if(itemP=='rock' && itemB=='scissors')
   {
    console.log('player win');
    document.getElementById('lol').innerHTML = "player win";
    return 'player';
}

   else if(itemP=='scissors' && itemB=='paper')
   {
    console.log('player win');
    document.getElementById('lol').innerHTML = "player win";
    return 'player';
}

   else if(itemP=='scissors'&& itemB=='rock')
   {
    console.log('bot win');
    document.getElementById('lol').innerHTML = "bot win";
    return 'bot';
}

   else if(itemP=='paper' && itemB=="scissors")
   {
    console.log('bot win');
    document.getElementById('lol').innerHTML = "bot win";
    return 'bot';
}

   else if(itemP='rock' && itemB=='paper')
   {
    console.log('bot win');
    document.getElementById('lol').innerHTML = "bot win";
    return 'bot';
}

}

function winround(a)
{
if(a=='player')
{
    document.getElementById('playerScore').innerHTML++;
    playerscore++;
}
else if( a=='bot')
{
    document.getElementById('computerScore').innerHTML++;
    botscore++;
}
}


function gamewin(player,bot)
{
if(player=='3' && bot<player)
{
    document.getElementById('lol').innerHTML="user win партию "
    document.getElementById('nahui').style.display='none';
    document.getElementById('playerblock').style.background="#34C924"
    document.getElementById('restart').innerHTML+= ' <br> (обнови страничку пж черт)'
    document.getElementById('playerpic').src='./src/image/winner.png'
    document.getElementById('playerChoose').innerHTML='WINNER NAXOy'
    
}
else if(bot=='3' && bot>player)
{
    document.getElementById('lol').innerHTML="bot тебя разнес "
    document.getElementById('nahui').style.display='none';
    document.getElementById('botblock').style.background="#34C924"
    document.getElementById('restart').innerHTML+=' <br>(обнови страничку пж мудила)'
    document.getElementById('botpic').src='./src/image/winner.png'
    document.getElementById('botChoose').innerHTML='WINNER NAXOy'

    
}
}

function game(item)
{ switch(item){
    
    case 'rock':
    {
        console.log('rock');
        document.getElementById('playerpic').style.WebkitTransition = 'opacity 0.5s linear;';
        document.getElementById('playerpic').style.MozTransition = 'opacity 0.5s linear;';
        document.getElementById('playerpic').src="./src/image/rock_player.svg";
        document.getElementById('playerChoose').innerHTML = "rock";
        winround( check('rock',random()));  
        gamewin(playerscore,botscore);   
    }
    break;
    
    case 'paper':
    {
        console.log('paper')
        document.getElementById('playerpic').src="./src/image/paper_player.svg";
        document.getElementById('playerChoose').innerHTML = "paper";
        winround( check('rock',random()));
        gamewin(playerscore,botscore);  
    }
    break;
    
    
    case 'scissors':
    {
        console.log('scissors')
        document.getElementById('playerpic').src="./src/image/scissors_player.svg";
        document.getElementById('playerChoose').innerHTML = "scissors";
        winround( check('rock',random())); 
        gamewin(playerscore,botscore);  
    }
    break;
 
    default: 
        {
         console.log('err')
        }
}


}