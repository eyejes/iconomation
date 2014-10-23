// add icons


$('.playspace').append('<i class="em em-couple_with_heart"></i>');
$('.playspace').append('<i class="em em-couplekiss"></i>');
$('.playspace').append('<i class="em em-clap"></i>');
$('.playspace').append('<i class="em em-dolls"></i>');
$('.playspace').append('<i class="em em-kr"></i>');

$('.playspace').append('<i class="em em-heartbeat"></i>');
$('.playspace').append('<i class="em em-sparkling_heart"></i>');
$('.playspace').append('<i class="em em-blue_heart"></i>');
$('.playspace').append('<i class="em em-purple_heart"></i>');
$('.playspace').append('<i class="em em-revolving_hearts"></i>');
// set the initial positions

$('.em-couplekiss').css({
  top: 300,
  left: 200
});

$('.em-sparkling_heart').css({
  top: 300,
  left: 100
});
$('.em-blue_heart').css({
  top: 300,
  left: 250
});

$('.em-purple_heart').css({
  top: 300,
  left: 150
});
$('.em-revolving_hearts').css({
  top: 300,
  left: 300
});
$('.em-clap').css({
  top: 300,
  left: 200
});

$('.em-clap').animate({
  top: 200
}, 1000);


var myArray = [];

myArray[0]=2000;
myArray[1]=3000;
myArray[2]=3000;
myArray[3]=4000;
myArray[4]=5000;
for(var k=0;k<5;k++){

   if(k==0){
	   setTimeout(function() {
	      console.log("CODE TO BE EXECUTED"+k);
	      $('.em-clap, .em-sparkling_heart, .em-blue_heart, .em-revolving_hearts, .em-purple_heart').animate({
	    	top: 150
	  	  }, 800, 'easeOutQuart');
	  	 },myArray[0]);
	}
}


