const customModal = ()=> {

    const myModal = document.querySelector(".my-modal");
    const imgs = Array.from(document.querySelectorAll(".product-img"));
    const closeBtn = document.querySelector(".close-btn");
    const leftBtn = document.querySelector(".left-btn");
    const rightBtn = document.querySelector(".right-btn");
    const modalImg = document.querySelector(".modal-img");
    let currentIndex = 0;


    // functions
    const hideModal = () => {
        myModal.classList.remove('my-modal-show');
    }

    const showModal = () => {
        myModal.classList.add('my-modal-show');
    }

    const nextImg =() => {

        currentIndex++;
        if (currentIndex >= imgs.length) {
            currentIndex = 0;
        }
        modalImg.setAttribute("src", imgs[currentIndex].getAttribute("src"));


    }

    const prevImg =() => {
        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = imgs.length - 1;
        }
        modalImg.setAttribute("src", imgs[currentIndex].getAttribute("src"));

    }



    // show modal when click on an img
    imgs.forEach((img, index) => {
        img.addEventListener("click", (e) => {
            currentIndex = index;
            console.log(currentIndex);
            showModal();
            modalImg.setAttribute("src", e.target.getAttribute("src"));
        });
    });




    // click event 
    closeBtn.addEventListener("click", (e) => {
        hideModal();
    });

    rightBtn.addEventListener("click", (e) => {
        nextImg();
    });

    leftBtn.addEventListener("click", (e) => {
        prevImg();
    });

    // keyboard events

    document.addEventListener("keydown", (e) => {

        if (e.code == "ArrowRight") {
            nextImg();
        }

        if (e.code == "ArrowLeft") {
            prevImg();
        }

        if (e.code == "Escape") {
            hideModal();
        }
    });




}

customModal();





