let navigation = document.getElementById('mynav');
window.onscroll = function(){
    if(document.body.scrollTop >= 0){
        navigation.classList.add('nav-colored');
        navigation.classList.remove('nav-transparent');
    } else {
        navigation.classList.remove('nav-colored');
        navigation.classList.remove('nav-transparent');
    }
};