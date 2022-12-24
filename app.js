const container = document.querySelector('.grille')
const affichage = document.querySelector('h3');
let resultat = 0;
let toutesLesDivs;
let alienInvaders = [];
let direction = 1;

let tireurPosition = 229;

function creationGrilleEtAlien(){
    let indexAttr =0;
    for(i = 0 ; i < 250; i++){

        if(indexAttr === 0){
            const bloc = document.createElement('div');
            bloc.setAttribute('data-left' , 'true');
            container.appendChild(bloc);
            indexAttr++;
        }
else if(indexAttr ===19)
{  const bloc = document.createElement('div');
bloc.setAttribute('data-right' , 'true');
container.appendChild(bloc);
indexAttr =0;


}
            else {
                const bloc = document.createElement('div');
            container.appendChild(bloc);
            indexAttr++;

            }

        
    }
    for(i = 1; i < 53; i++){

        if(i === 13){
            i = 21;
            alienInvaders.push(i);
        }else if (i === 33){
            i = 41;
            alienInvaders.push(i);
        }else {
            alienInvaders.push(i);
        }
    }

    
    toutesLesDivs = document.querySelectorAll('.grille div');
    alienInvaders.forEach(invader =>{
        toutesLesDivs[invader].classList.add('alien');
    })
    toutesLesDivs[tireurPosition].classList.add('tireur'); 
}

creationGrilleEtAlien()

// Remove the event listener for the keydown event
document.removeEventListener('keydown', deplacerLeTireur)

// Add an event listener for the touchstart event on the container element
container.addEventListener('touchstart', handleTouchStart);

function handleTouchStart(e) {
      // If the x coordinate is less than the center of the container, move the shooter left
  if (x < container.offsetWidth / 2) {
    if(tireurPosition > 220){
      tireurPosition -= 1;
    }
  }
  // If the x coordinate is greater than the center of the container, move the shooter right
  else {
    if(tireurPosition < 239){
      tireurPosition += 1;
    }
  }
  
  toutesLesDivs[tireurPosition].classList.add('tireur');
}

// Add an event listener for the touchend event
container.addEventListener('touchend', handleTouchEnd);

function handleTouchEnd(e) {
  toutesLesDivs[tireurPosition].classList.remove('tireur');
}
//bouger alien//
let descendreRight = true;
let descendreLeft = true;

function bougerLesAliens() {
    for(let i = 0; i < alienInvaders.length; i++)
    {

       if (toutesLesDivs[alienInvaders[i]].getAttribute('data-right') === 'true') 
       {


        if(descendreRight){
            direction = 20;
            setTimeout(() => {
               descendreRight = false; 
            }, 10);
        } 
        else if (descendreRight === false){
            direction = -1;
        }
        descendreLeft = true
       } 
       else if (toutesLesDivs[alienInvaders[i]].getAttribute('data-left') === 'true')
       {

        if(descendreLeft){
            direction = 20;
            setTimeout}
        }
    }
}