var num = 0;
  function guess(attempt){
        switch (attempt){
        case 0:
            num = Math.floor(Math.random()*100);
              game(attempt);
            break;
            default:
              game(attempt);
    }
  }

  function game(attempt){
    c = prompt("Guess number","");
  if (c == num) {
    alert("You are right, the number is "+c);
  }
  else if (c < num){
    alert("Our number is higher, try again");
    guess(attempt+1);
  }
  else
  {
    alert("Our number is lower, try again")
    guess(attempt+1);
}
}
