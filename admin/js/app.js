
$('.show-sidebar-btn').click(function () {
    $('.sidebar').animate({marginLeft:0})
});
$('.hide-sidebar-btn').click(function () {
    $('.sidebar').animate({marginLeft:"-100%"})
});
function go(url) {
    setTimeout(function () {
        location.href = `${url}`;
    },500);
};
$('.expand-icon').click(function () {
    let current = $(this).closest('.card');
    current.toggleClass('full-screen-card');
    if(current.hasClass('full-screen-card')){
        $(this).html(`<i class="fa fa-compress"></i>`);
    }
    else {
        $(this).html(`<i class="fa fa-expand"></i>`);
    }

});
$('.calendar-expand-icon').click(function () {
    let current = $(this).closest('.card');
    current.toggleClass('half-screen-card');
    if(current.hasClass('half-screen-card')){
        $(this).html(`<i class="fa fa-compress"></i>`);
    }
    else {
        $(this).html(`<i class="fa fa-expand"></i>`);
    }
});
$('#doctor-list').DataTable();

let screenHeight = $(window).height();
let currentMenuHeight = $('.nav-menu .active').offset().top;

if(currentMenuHeight > screenHeight*0.8){
    $('.sidebar').animate({
        scrollTop:currentMenuHeight-200
    },1000);
}