// const input = document.getElementById('input');

// function addingEventListener() {
//     function clickAlert() {
//         alert('I was clicked!');
//       }
      
//       input.addEventListener('click', clickAlert); 
//     }

function addingEventListener() {
  let input = document.getElementById("button");
  input.addEventListener("click", addingEventListener);
  alert("I was clicked!");
}