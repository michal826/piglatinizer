// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
$(document).ready(function(){
	$("#button").click(function() {
	var response = $("#answer").val();
	var latin = isVowelFirstLetter(response);
  });
  
  
   function isVowelFirstLetter(response) {
	
	var vowels = ['a', 'e', 'i', 'o', 'u', 'y','A', 'E', 'I', 'O', 'U', 'Y'];
	 
	 var last = response.split("");

	 var includeV = vowels.includes(last[0]);    

	 if(includeV === true){
					
        $("#result").text(response + "ay");

    }else{
	 
	 
	 var consonateShift = last.shift();

	var consonatePush = last.push(consonateShift);

	var consonateJoin = last.join(''); 

	 $("#result").text(consonateJoin + "ay");
	   }
	
    }

   
 //$("#button").click(function() {
 // var response = $("#answer").val();
 // var pigMessage = sentenceToPigLatin(response);
 // $("#result").text(pigMessage);
 //});
 // function isVowelFirstLetter(word) {
 //  var last = response.slice(0, 1);
 //  var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
 //  for (i = 0; i < vowels.length; i = i + 1) {
 //   if (vowels[i] === word[0]) {
 //    return true;
 //   }
 //  }
 //  return false;
 // }
  // function sentenceToPigLatin(words) {
  //  if (isVowelFirstLetter(words[0])) {
  //  return  words[0] + "ay";
  //  }
  //   else {
  //  return words.slice(word.length-1);
  //  }
 
  // }

});



// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 






// Create the sentenceToPigLatin function that takes a sentence as a parameter
//Loops through all the words in the sentence and transforms each word
//It should return a transfromed sentance
