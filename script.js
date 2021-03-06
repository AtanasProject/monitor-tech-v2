window.onscroll = function () {
    scrollFunction();
};

const navBarCollapse = document.querySelector('.navbar-collapse');
const navBarToggler = document.querySelector('.navbar-toggler');

const link = document.querySelector('.nav-link');
const partners = document.querySelector('#partners');

link.addEventListener('click', () => {
    window.scrollTo({
        top: 550
    });
    
})

navBarCollapse.addEventListener('click', ()=> {
    navBarCollapse.classList.remove("show");
    navBarToggler.classList.add('collapsed');
})

function scrollFunction() {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        document.getElementById("secondNav").style.height = "60px";
        // document.getElementById("secondNav").style.padding = "0";
        document.getElementById("secondNav").style.transition = "all .5s";
        document.getElementById("secondNav").style.boxShadow = "1px 1px 2px #787878";
        document.querySelector(".nav-bar-logo").style.height = "40px";
        /*document.getElementById("logo").style.fontSize = "25px";*/
    } else {
        document.getElementById("secondNav").style.height = "90px";
        document.querySelector(".nav-bar-logo").style.height = "70px";
        document.querySelector(".nav-bar-logo").style.transition = "all .5s";
        /*document.getElementById("logo").style.fontSize = "35px";*/
    }
}