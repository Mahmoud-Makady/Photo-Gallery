var galleryImg = document.querySelectorAll(".card-img");
var overFlow = document.getElementById("over");
var selectedImg = document.getElementById("overlay");
var esc = document.getElementById("esc");
var activeCard = 0;
var nextCard = document.getElementById("right");
var prevCard = document.getElementById("left");



for (let i = 0; i < galleryImg.length; i++) {
    
        galleryImg[i].addEventListener ("click", function () {
            overFlow.style.display = 'flex';
            
            var bgImage = window.getComputedStyle(galleryImg[i]).backgroundImage;
                selectedImg.style.backgroundImage = bgImage;
                selectedImg.style.height = "700px";
                selectedImg.style.width = "500px";

                activeCard = i;
            
        })
    }

    // ESC action
    esc.addEventListener ("click", function () {
        overFlow.style.display = 'none';
        
    }); 

    // Next action
    nextCard.addEventListener("click", function () {
        activeCard++;
        if (activeCard >= galleryImg.length) {
            activeCard = 0;
        }
        var bgImage = window.getComputedStyle(galleryImg[activeCard]).backgroundImage;
        selectedImg.style.backgroundImage = bgImage;
    });

    // Prev action
    prevCard.addEventListener("click", function () {
        activeCard--;
        if (activeCard < 0) {
            activeCard = galleryImg.length - 1;
        }
        var bgImage = window.getComputedStyle(galleryImg[activeCard]).backgroundImage;
        selectedImg.style.backgroundImage = bgImage;
    });

    // Keyboard actions 
    // 1- ArrowRight
    document.addEventListener("keydown", function(e){
        if (e.key === "ArrowRight") {
            activeCard++;
        if (activeCard >= galleryImg.length) {
            activeCard = 0;
        }
        var bgImage = window.getComputedStyle(galleryImg[activeCard]).backgroundImage;
        selectedImg.style.backgroundImage = bgImage;
        }
    });
    // 2- ArrowLeft
    document.addEventListener("keydown", function(e){
        if (e.key === "ArrowLeft") {
            activeCard--;
        if (activeCard < 0) {
            activeCard = galleryImg.length - 1;
        }
        var bgImage = window.getComputedStyle(galleryImg[activeCard]).backgroundImage;
        selectedImg.style.backgroundImage = bgImage;
        }
    });

    // 3- ESC
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            overFlow.style.display = 'none';
        }
    });

    // Mouse action
    document.addEventListener("click", function (e) {
        if (!e.target.closest('.card')) {
            overFlow.style.display = 'none';
        }
    });