function like(post) {

    console.log(post.dataset.isliked);
    if (post.dataset.isliked == "true") {
        post.children[2].children[0].classList.toggle("liked");
        let numLikes = parseInt(post.children[2].children[0].children[1].innerText);
        numLikes--;
        post.children[2].children[0].children[1].innerText = numLikes;
        post.dataset.isliked = "false"
    } else {
        post.children[2].children[0].classList.toggle("liked");
        let numLikes = parseInt(post.children[2].children[0].children[1].innerText);
        numLikes++;
        post.children[2].children[0].children[1].innerText = numLikes;
        post.dataset.isliked = "true"
    }

}

function openModalPost(post) {

    /*
             <div class="post">
                <div class="post__header">
                    <img src="./src/assets/imgs/user.png" alt="./src/assets/imgs/user.png" class="post__User_img">
                    <h3>User Name</h3>
                </div>
                <div class="post__main">
                    <p class="post_main_Text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, minima praesentium quidem possimus nihil doloribus nobis 
                    </p>
                </div>
                <div class="post__interactions">
                    <div class="post__interactions--like liked">
                        <button type="button" class="btn_interactions">
                            <i class="fa-solid fa-heart"></i>
                        </button>
                        <span class="post__intercations--NumLikes">2400</span>
                    </div>
                    <div class="post__interactions--Comments">
                        <button type="button" class="btn_interactions">
                            <i class="fa-solid fa-comment"></i>
                        </button>
                        <span class="post__intercations--NumLikes">44</span>
                    </div>
                    <div class="post__interactions--Share">
                        <button type="button" class="btn_interactions">
                            <i class="fa-solid fa-share"></i>
                        </button>
                    </div>
                </div>
            </div>*/

    let Modal = document.createElement("div");

    let ModalCard = document.createElement("div");

    let HeaderModal = document.createElement("div");


    let CloseModalBtn = document.createElement("button");

    Modal.append(ModalCard);

    ModalCard.append(HeaderModal, CloseModalBtn);

    ModalCard.classList.add("ModalCard")

    CloseModalBtn.innerText = "X";

    CloseModalBtn.classList.add("CloseModalBtn");

    CloseModalBtn.addEventListener("click", (e) => {
        Modal.remove()
    })


    Modal.classList.add("Modal")
    document.querySelector(".DivModal").appendChild(Modal);

    if (post.dataset.img = "") {
        let imgUser = document.createElement("img");
        let nameUser = document.createElement("h2");


    }
}



let posts = document.querySelectorAll(".post");

posts.forEach((post) => {


    let expired

    let doubleClick = function (post) {
     like(post);
    }
    
    let doubleTouch = function (e) {
        if (e.touches.length === 1) {
            if (!expired) {
                expired = e.timeStamp + 180;
            } else if (e.timeStamp <= expired) {
                // remove the default of this event ( Zoom )
                e.preventDefault()
                doubleClick(post)
                // then reset the variable for other "double Touches" event
                expired = null
            } else {
                // if the second touch was expired, make it as it's the first
                expired = null;
               // expired = e.timeStamp + 400
                e.preventDefault()
                openModalPost();
            }
        }
    }
    

  //  console.log(post.children[2]);
   post.children[2].children[0].addEventListener("click", (e) => {
        e.stopImmediatePropagation()
        like(post);
    });
    // post.addEventListener("dblclick", (e) => {
    //     like(post);
    // });
   
    post.children[1].addEventListener('touchstart', doubleTouch);
    // post.children[1].addEventListener("tap",(e)=>{
    //     openModalPost();
    // })
    post.children[1].addEventListener("dbclick", function(){
        doubleClick(post)
    }, false);

//      post.children[1].addEventListener("click", (e) => {
//         e.stopImmediatePropagation()
//         openModalPost();
       
//  });

});