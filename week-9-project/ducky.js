window.onload = function() {
  const body = document.body;

  console.log(body);

  // 1. Create a <div> with the class "duck" and add it to the body.  Do this step by step
  // ( 1. create the element
  //   2. add a class to the element
  //   3. append the element to the body )

  function createDuck() {
  let duckElm = document.createElement('div');
  duckElm.setAttribute('class', 'duck')
  body.appendChild(duckElm);

  // 2. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)
  // https://www.w3schools.com/jsref/met_win_setinterval.asp

  let flap = setInterval(function duckflap() {
    duckEle.classList.toggle("flap")

  }, 250);

  duckEle.addEventListener('click', function() {
    duckEle.classList.add('shot');
    setTimeout(function() {
      duckEle.remove();
      checkForWinner();

    }, 1000)


  })
}


  // 3. Now, let's move the duck using CSS "top" and "left". Create
  // a function `moveDuck` that takes a duck object as an argument and sets the
  // "top" and "left" CSS properties.
  // HINT: Use Math.random() * window.innerWidth    for "left"
  //       And Math.random() * window.innerHeight   for "top"

  function moveDuck() {
    duckElm.style.left = `${Math.random() * window.innerWidth}px`;
    duckElm.style.top = `${Math.random() * window.innerHeight}px`;


  }

  moveDuck();
  setInterval(moveDuck, 1000)


  return duckElm;
  }


  // 4. Try making the duck move to a different location every second (what did we use to do this several lines up??)

  setInterval(moveDuck, 1000);

  duck.addEventListener("click", function () {
     duck.classList.add("shot");
     setTimeout(function () {
       duck.remove();
       checkForWinner();
     }, 1000);
   });


  // --------------------------- PART 3 ------------------------------------


  // 13. Create a new function named checkForWinner() that reads the DOM
  //     to see if there are any ducks left. (How can we check the DOM for more than one element?, and how can we see how many elements we get back) If not, alert "YOU WIN!"


    function checkForWinner() {
      let duckLength = document.getElementsByClassName("duck");
      if (duckLength.length  === 0) {
        alert("You win, there's no more ducks!")

      }
    }
