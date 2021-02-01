
let song = ['https://media.hungama.com/c/4/e1b/39b/34816885/34816885_128.mp3?3gFLfjfyo9f9JLgvXlE_ARtv3No6smH1nnK5I7c0xltS3qe4gEzwg8gSTQzfB-w5xqqztz6ENaxrhcMynYl6nF7M_C1FEDHKnUIjDfdpmn29ZdxDdNz1nkTIdSAm0KyhRRpoNQ ' ];

const audio = new Audio(song);

let control = $(".playpause");
let isPlaying =true;

control.click(function() {
    if (isPlaying) {
        isPlaying = true;
        audio.play();
        //audio.pause();
       control.text(); 
     
    } else {
		isPlaying = false;
        //audio.play();
         audio.pause();
        control.text();
        
    }
});