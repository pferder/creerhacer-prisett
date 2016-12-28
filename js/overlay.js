
$( "#impuestos-btn" ).click(function() {
  $( "#impuestos" ).show( "slow" );
  $("body").addClass("noscroll");
});

$( "#auditoria-btn" ).click(function() {
  $( "#auditoria" ).show( "slow" );
  $("body").addClass("noscroll");
});

$( "#sueldos-btn" ).click(function() {
  $( "#sueldos" ).show( "slow" );
  $("body").addClass("noscroll");
});

$( ".overlay-close").click(function() {
  $( "#sueldos" ).hide( "slow" );
  $( "#auditoria" ).hide( "slow" );
  $( "#impuestos" ).hide( "slow" );
  $("body").removeClass("noscroll");
});

$( ".overlay-button").click(function() {
  $( "#sueldos" ).hide( "slow" );
  $( "#auditoria" ).hide( "slow" );
  $( "#impuestos" ).hide( "slow" );
  $("body").removeClass("noscroll");
});


$( "#help").click(function() {
  $( "#help-pop" ).show( "slow" );
});

$(document).mouseup(function (e)
{
    var container = $("#help-pop");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.hide();
    }
});