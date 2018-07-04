/*  
Program Name:   Recipe Display Application  
Author: Steven Smith
Date:  06/28/3028
Filename:   script.js 
*/ 

function display(event) { 
 
$(event.currentTarget).next("ul").fadeIn("slow"); 
$(event.currentTarget).next("div").fadeIn("slow");
 
}//end of display 
 
 
$("h3").click(display);