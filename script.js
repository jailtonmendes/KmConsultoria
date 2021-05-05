//
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: true,
    },
    loop: true,
});



//Função MODAL
const Modal = {
    open() {
        //Abrir moal
        //Adicionar a cass active ao modal
        document
            .querySelector('.modal-overlay') //pesquisa no documento por essa classe
            .classList.add('active') //adiciona essa classe

    },
    close() {
        //Fechar o modal
        //Remover a class active do modal
        document
            .querySelector('.modal-overlay') //pesquisa no documento por essa classe
            .classList.remove('active') //adiciona essa classe
    }

};


const Model2 = {
    opentwo() {
        document
            .querySelector('.modal-two')
            .classList.add('active')
    },
    closetwo() {
        document
            .querySelector('.modal-two')
            .classList.remove('active')
}

};

const Model3 = {
    openthree() {
        document
        .querySelector('.modal-three')
        .classList.add('active')
    },

    closethree() {
        document
        .querySelector('.modal-three')
        .classList.remove('active')
    }
};


const Model4 = {
    openfour() {
        document
        .querySelector('.modal-four')
        .classList.add('active')
    },

    closefour() {
        document
        .querySelector('.modal-four')
        .classList.remove('active')
    }
}

const  Menu = {
    AbrirMenu() {
        document
        .querySelector('.menu-mob') //pesquisa no documento por essa classe
        .classList.add('active') //adiciona essa classe
    },
    FecharMenu() {
        document
        .querySelector('.menu-mob')
        .classList.remove('active')
    }
}

