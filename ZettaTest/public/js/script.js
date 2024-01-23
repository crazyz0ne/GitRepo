function myFunction(controlId, iconId) {
    var control = document.getElementById(controlId);
    var icon = document.getElementById(iconId);
    control.classList.toggle("show");
    icon.classList.toggle("FAQ__icon-rotate");
};




Vue.component('task',{
    template: '<li> 1 task </li>'
});

new Vue ({
    el: '#app'
});



