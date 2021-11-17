// HINT: You can delete this console.log after you no longer need it!

// First, tell us your name
let yourName = "Steve Hairston" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle


// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function(){
        
    //Code to be run when the "+" button for "Gingerbread" is clicked
    gb++ ;
    document.getElementById('qty-gb').innerHTML = gb ;
    document.getElementById('qty-total').innerHTML = gb + cc + sugar
})

// Event listener for clicks on the "+" button for "Gingerbread" cookies
document.getElementById('minus-gb').addEventListener('click', function() {

    //Code to be run when the "-" button for "Gingerbread" is clicked
    if(gb < 1){}
    else{
    gb-- ;
    document.getElementById('qty-gb').innerHTML = gb ;
    document.getElementById('qty-total').innerHTML = gb + cc + sugar
    }
})

// Event listener for clicks on the "+" button for "Chocolate Chip" cookies
document.getElementById('add-cc').addEventListener('click', function(){
    
    //Code to be run when the "+" button for "Chocolate Chip" is clicked
    cc++ ;
    document.getElementById('qty-cc').innerHTML = cc ;
    document.getElementById('qty-total').innerHTML = gb + cc + sugar
})

// Event listener for clicks on the "+" button for "Chocolate Chip" cookies
document.getElementById('minus-cc').addEventListener('click', function() {
  
    //Code to be run when the "-" button for "Chocolate Chip" is clicked
    if(cc < 1){}
    else{
    cc-- ;
    document.getElementById('qty-cc').innerHTML = cc ;
    document.getElementById('qty-total').innerHTML = gb + cc + sugar
    }
})

// Event listener for clicks on the "+" button for Sugar cookies
document.getElementById('add-sugar').addEventListener('click', function(){
    
    //Code to be run when the "+" button for "Sugar" is clicked
    sugar++ ;
    document.getElementById('qty-sugar').innerHTML = sugar ;
    document.getElementById('qty-total').innerHTML = gb + cc + sugar
})

// Event listener for clicks on the "+" button for Sugar cookies
document.getElementById('minus-sugar').addEventListener('click', function() {

    //Code to be run when the "-" button for "Sugar" is clicked
    if(sugar < 1){}
    else{
    sugar-- ;
    document.getElementById('qty-sugar').innerHTML = sugar ;
    document.getElementById('qty-total').innerHTML = gb + cc + sugar
    }
})
