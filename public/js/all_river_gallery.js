   $(document).ready(function() {
   $(".cloudcarousel").click(function() {
     var pictureID = this.id;
     $("body").css('background-image', 'url(gallery/vereshcitsya/' + pictureID + '.jpg)');
   });
 });
$("#gallery").click(function() {
   $("#carousel").toggle("fade");
 });
 
  $(document).ready(function() {
   $("#year2015").one("click",function() {
       for (var i=0; i<21; i++){
       $( "#div1" ).append( "<img class='gallery-image' src='gallery/2015/" + i + ".jpg' id='image" + i + "'"+" width='230' height='150'>" );
   }
 });
 });
 
$( document ).on( "click", ".gallery-image", function() {
     var imageID = this.id.replace('image','');
     $('#div1').magnificPopup({
		delegate: 'img',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
});
