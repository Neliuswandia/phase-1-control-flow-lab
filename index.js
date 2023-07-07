//if..else operator

function scuberGreetingForFeet(ride){
 if (ride <= 400){
    return 'This one is on me!'
 }

  else if (ride > 2000 && ride < 2500){
    return 'I will gladly take your thirty bucks.'
  }
  else if (ride > 2500){
    return 'No can do.'
  }
}

// ternaty opertor

function ternaryCheckCity(isNYC){
  return (isNYC ?'Ok, sounds good.': 'No go.')
}
    //console.log(isNYC);

console.log(ternaryCheckCity(true));  // Output: Ok, sounds good.
//console.log(ternaryCheckCity(false)); // Output: No go.
  

function ternaryCheckCity(Pittsburgh){
  return (Pittsburgh ?'No go.': 'Ok, sounds good.')
  }
    //console.log(isPittsburgh)

    console.log(ternaryCheckCityPittsburgh(true));  // Output: No go.
    //console.log(ternaryCheckCityPittsburgh(false)); // Output: Ok, sounds good.

//switch case operator

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}

console.log(switchOnCharmFromTip("generous"));            // Output: Thank you so much.
console.log(switchOnCharmFromTip("not as generous"));     // Output: Thank you.
console.log(switchOnCharmFromTip("anything else")); // Output: Bye.




