function like(post) {


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

    console.log(post);
    let Modal = document.createElement("dialog");

    let ModalCard = document.createElement("div");

    let HeaderModal = document.createElement("div");

    let bodyModal = document.createElement("div");


    let CloseModalBtn = document.createElement("button");

    Modal.append(ModalCard);



    ModalCard.classList.add("ModalCard")

    CloseModalBtn.innerText = "X";

    CloseModalBtn.classList.add("CloseModalBtn");

    CloseModalBtn.addEventListener("click", (e) => {
        Modal.close()
    });

    document.onkeydown = function (e) {
        if (e.key === 'Escape') {
            Modal.close()
        }
    }

    Modal.show()


    Modal.classList.add("Modal")

    document.querySelector(".DivModal").appendChild(Modal);



    let imgUser = document.createElement("img");

    imgUser.src = post.dataset.userimgpost;

    let nameUser = document.createElement("h2");

    imgUser.classList.add("UserImgCardModal")

    nameUser.innerText = post.dataset.usernamepost;
    nameUser.classList.add("nameUser");

    HeaderModal.classList.add("HeaderModal");

    HeaderModal.append(imgUser, nameUser);

    let descripition = document.createElement("p");

    descripition.innerText = post.dataset.descriptionpost;
    descripition.classList.add("modalDescripition");

    let imgPost = document.createElement("img");

    imgPost.src = post.dataset.img;

    imgPost.classList.add("imgPost");
    bodyModal.classList.add("bodyModal");
    bodyModal.append(descripition, imgPost);

    let FooterModal = document.createElement("div");

    FooterModal.classList.add("FooterModal");


    let FooterInteractionsLike = document.createElement("div");
    FooterInteractionsLike.classList.add("Modal__Footer_interactions--like");
    let buttonLike = document.createElement("button");
    buttonLike.classList.add("Modal__btn_interactions");
    let iconLike = document.createElement("i");
    iconLike.classList = "fa-solid fa-heart";
    let numLikesPost = document.createElement("span");
    numLikesPost.classList.add("Modal__intercations--NumLikes");
    numLikesPost.innerText = post.dataset.numlikes;
    buttonLike.append(iconLike);
    FooterInteractionsLike.append(buttonLike, numLikesPost);


    /*                <div class="post__interactions">
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
                        <span class="post__intercations--NumLikes">10</span>
                    </div>
                    <div class="post__interactions--Share">
                        <button type="button" class="btn_interactions">
                            <i class="fa-solid fa-share"></i>
                        </button>
                    </div>
                </div>*/
    FooterModal.append(FooterInteractionsLike);


    ModalCard.append(HeaderModal, CloseModalBtn, bodyModal,FooterModal);
}



let posts = document.querySelectorAll(".post");

posts.forEach((post) => {



    post.children[2].children[0].addEventListener("click", (e) => {
        e.stopImmediatePropagation()
        like(post);
    });
    post.addEventListener("dblclick", (e) => {
        e.stopImmediatePropagation()
        like(post);
    });



    post.children[1].addEventListener("click", (e) => {
        e.stopImmediatePropagation()
        openModalPost(post);

    });

});