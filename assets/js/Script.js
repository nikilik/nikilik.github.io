//check off to-dos by clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("finished");
});
//delete to-do by clicking X
$("ul").on("click", "span", function () {
    $(this).parent().fadeOut(200,function () {
        $(this).remove();
    });
});
//create new item from input
$("input[type='text']").keypress(function (event) {
    if(event.which===13){
        var todoText = $(this).val();
        $(this).val("");
        //create new li and add to ul
        $("ul").append("<li><span class=\"delete\"><i class=\"fa fa-trash\"></i></span>" + todoText + "</li>");
    }
});
//show/hide add new field
$(".fa-plus").click(function () {
    $("input[type='text']").fadeToggle();
});
