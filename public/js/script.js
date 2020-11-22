/* eslint-disable prefer-arrow-callback */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
$(document).ready(() => {
  // this makes responsive menu collapse on click
  $(".navbar-collapse a").click(() => {
    $(".navbar-collapse").collapse("toggle");
  });

  // open link to pdf file
  $("#invoiceBtn").click(() => {
    window.open("/img/deathWobbleInv.pdf");
    return false;
  });

  // launch modal order form
  $('#reviewBtn').click(function(event){
    event.preventDefault();

    // variables to assign form values based on user selection
    deckName = $( "select#deck option:checked" ).val();
    truckName = $( "select#truck option:checked" ).val();
    wheelName = $( "select#wheels option:checked" ).val();
    bearingName = $( "select#bearings option:checked" ).val();

    // opens modal window
    $('#orderModal').modal('show');

     
    //append user selections to order form
    $("#deckSelection").append(deckName);
    $("#truckSelection").append(truckName);
    $("#wheelSelection").append(wheelName);
    $("#bearingSelection").append(bearingName);

    // render image based on user selection
    function chooseImage(){

      
      switch (deckName) {
      case "Baker":
        $("#skatePic").append('<img src="/img/baker.jpg" alt="">');
        break;
      case "Flip":
        $("#skatePic").append('<img src="/img/flip.jpg" alt="">');
        break;
      case "Toy Machine":
        $("#skatePic").append('<img src="/img/toymachine.jpg" alt="">');
        break;
      case "Primitive":
        $("#skatePic").append('<img src="/img/primitive.jpg" alt="">');
      }
    }
    
    // call function to insert image
    chooseImage();

  });


  // reload page upon modal close to reset values
  $('#orderModal').on('hidden.bs.modal', function () {
    location.reload();
  });
  

  //end document ready
});
