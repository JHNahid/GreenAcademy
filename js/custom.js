// menu ===========>>>

     $(".menu").sticky({topSpacing:0});








// dashbord slider ============= >>>>>>>
    
    $('.level-box ').owlCarousel({
        loop:false,
        autoWidth:true,
        margin:10,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:3
            },
            400:{
                items:4
            },
            600:{
                items:4
            },
            1000:{
                items:5
            }
        }
    })

//====== home page Categories slider =========== >>>>>>
    $('.categories-slider').owlCarousel({
        center: true,
        items:2,
        loop:true,
        margin:25,
        autoplay:true,
        autoplayTimeout: 2000,
        autoplayHoverpause:false,
        responsive:{

            420:{
                items:2
            },
            500:{
                items:3
            },
            600:{
                items:4
            }
        }
    });


//======== our-course-slider ================== >>>>>>>

    $('.course-slider').owlCarousel({
        loop:true,
        nav:true,
        dots: true,
        autoplay:true,
        autoplayTimeout: 5000,
        autoplayHoverpause:false,
        responsive:{
            0:{
                items:1,
                dots: false
            },
            600:{
                items:3
            },
            1000:{
                items:4
            },
            1100:{
                items:5
            }
        }
    });

//===== ========================== >>>>>


    $('.feedback-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: false,
        autoplay:true,
        autoplayTimeout: 5000,
        autoplayHoverpause:false,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

//===== ========================== >>>>>


    $('.news-slider').owlCarousel({
        loop:true,
        nav:true,
        dots: false,
        autoplay:true,
        autoplayTimeout: 5000,
        autoplayHoverpause:false,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });



//  Profile IMG js =============================== 


    const imgDiv = document.querySelector('.user-img');
    const img = document.querySelector('#photo');
    const file = document.querySelector('#file');
    const uploadebtn = document.querySelector('#uploadbtn');
 
    file.addEventListener( 'change' , function(){
        const chosedfile = this.files[0];
        if(chosedfile){
            const reader = new FileReader();

            reader.addEventListener( 'load' , function(){
                img.setAttribute('src' , reader.result);
            })
            reader.readAsDataURL (chosedfile);
        }
    });


//  copy btn ==================>>>

    var copybtn = document.getElementById("copy-btn");
    var link = document.getElementById("link");

    copybtn.onclick = function (){
        navigator.clipboard.writeText(link.innerHTML);
        copybtn.innerHTML = "Copied"
        setTimeout(function(){
            copybtn.innerHTML = "Copy link"
        }, 2000)
    };




// live date ==============>>>

    function updateDateTime() {
        var now = new Date();
        var date = now.toDateString();
        var dateTime = date;
        document.getElementById('liveDateTime').innerText = dateTime;
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);



// === nid img =========================== >>>>>>> >>>>>>> 

   const dropArea = document.getElementById("drop-area");
   const inputFile = document.getElementById("input-file");
   const imageView = document.getElementById("img-view");

   inputFile.addEventListener("change", uploadImage);

   function uploadImage(){
        let imgLink= URL.createObjectURL(inputFile.files[0]);
        imageView.style.backgroundImage = `url(${imgLink})`;
        imageView.textContent = "";
   };


// ============================= >>>>>>>>>

// video popup 1 =======>

    // $('.play').magnificPopup({
    //     type: 'iframe',
    //     iframe: {
    //         markup: '<div class="mfp-iframe-scaler">'+
    //                   '<div class="mfp-close"></div>'+
    //                   '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
    //                 '</div>',
    //         patterns: {
    //           youtube: {
    //             index: 'youtube.com/', 
    //             id: 'v=', 
    //             src: 'https://www.youtube.com/embed/%id%?autoplay=1'
    //           },
    //         },
    //         srcAction: 'iframe_src',
    //       }
    //   });
