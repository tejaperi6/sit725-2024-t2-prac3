const clickMe = () => {
    alert("Your tickets are booked, Have a great day!")
}
$(document).ready(function () {
    // $('.materialboxed').materialbox();
    $('#clickMeButton').click(() => {
        //clickMe();
        $.ajax({url: "/addTwoNumber?n1=10&n2=2", success: function(result){
           alert(result.data)
  
          }});
    })

    $("button").click(function(){
        $.ajax({url: "/addTwoNumber", success: function(result){
          $("#div1").html(result);

        }});
      });
});