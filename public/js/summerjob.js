function showImg(){
$('#imagemBreve').show();
}

$( document ).ready(function() {
    console.log("SUMMERJOB");
    $("#botao").click(showImg);
    $("#botao2").click(showImg);
});