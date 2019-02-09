function submitAnswers() {
  var total = 5;
  var score = 0;

  //Get User Input
  var question = [];
  for(i = 1; i <= total; i++){
    question[i-1] = document.forms["quizForm"]["q"+i].value
  }

  //Validation
  for(i = 1; i <= total; i++){
    if(question[i-1] == null || question[i-1] ==''){
      alert("You missed Question "+i);
      return false;
    }
  }

  //Set Correct Answers
  var answers = ["b", "b", "d", "b", "a"];

  //Check Answers
  for(i = 1; i <= total; i++){
    if(question[i-1] == answers[i-1])
      score++;
  }

  //Display results
  var results = document.querySelector('#results');
  results.innerHTML = '<h3>You scored <span>'+score+'</span> out of <span>'+total+'</span></h3>'
  alert('You Scored '+score+' out of '+total);
  
  return false;
}
