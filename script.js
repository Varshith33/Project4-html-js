
(function () {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toLowerCase();
      if (firstLetter === 'j') {
       helloSayer();
      } else {
        goodbyeSayer();
      }
    } 

    function goodbyeSayer(){
      var gword="Goodbye";
      console.log(gword+" "+names[i])
    }

    function helloSayer(){
      var gword="Hello";
      console.log(gword+" "+names[i])
    }
  })()

