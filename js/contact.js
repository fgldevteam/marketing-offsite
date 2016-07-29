$(document).ready(function() {


	//form submission:
	$("#submit").click(function(){
		return false;
	});
	
	$("#submit").click(function(){					   				   
		$(".error").hide();
		$("label").css('color', '#fff');

		var hasError = false;
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		
		var fnameVal = $("#firstname").val();
		var lnameVal = $("#lastname").val();
		var emailVal = $("#email").val();

		var phoneVal = $("#phone").val();
		
		var officeVal = "";
		var dietVal = "";	

		var shirtVal = $("#shirtsize").val();
		var jacketVal = $("#jacketsize").val();
		var shoesVal = $("#shoesize").val();
		var pantVal = $("#pantsize").val();


		//validation
		if(fnameVal == '') {
			$("#label-first").css('color', '#c00');
			hasError = true;
			$(window).scrollTop(0);
		}

		if(lnameVal == '') {
			$("#label-last").css('color', '#c00');
			hasError = true;
			$(window).scrollTop(0);
		}

		if(emailVal == '') {
			$("#label-email").css('color', '#c00')
			hasError = true;
		} else if(!emailReg.test(emailVal)) {	
			$("#label-email").css('color', '#c00')
			hasError = true;
		}	

		if(phoneVal == '') {
			$("#label-phone").css('color', '#c00')
			hasError = true;
			$(window).scrollTop(0);
		}

		if(shirtVal == '') {
			$("#label-shirt-size").css('color', '#c00');
			hasError = true;
			$(window).scrollTop(0);
		}				

		if(jacketVal == '') {
			$("#label-jacket-size").css('color', '#c00');
			hasError = true;
			$(window).scrollTop(0);
		}	

		if(shoesVal == '') {
			//$("#shoesize").after('<span class="error">Please choose a size.</span>');
			$("#label-shoe-size").css('color', '#c00');
			
			hasError = true;
			$(window).scrollTop(0);
		}	
		if(pantVal == '') {
			//$("#shoesize").after('<span class="error">Please choose a size.</span>');
			$("#label-pant-size").css('color', '#c00');
			
			hasError = true;
			$(window).scrollTop(0);
		}	


					
		if(hasError == false) {



			console.log( fnameVal +", "+ lnameVal  +", "+ emailVal +", "+ phoneVal +", "+ officeVal +", "+ dietVal +", "+ shirtVal +", "+ shoesVal +", "+ jacketVal);
			
			$(this).hide();
			$("#sendemail").append('<img style="height: 15px; width: 128px;" src="images/ajax-loader.gif" alt="Sending" id="sending" />');

			$.post("sendEmail.php",
   				{ 
   				  fname: fnameVal,
   				  lname: lnameVal, 
   				  email: emailVal,
   				  phone: phoneVal,
				  shirt: shirtVal,
				  shoes: shoesVal,
				  jacket: jacketVal,
				  pant : pantVal
				
   				},
   					function(data){
   						console.log(data);
						$("#regform").slideUp("normal", function() {				  						
																					
							$("#regform").before("<br /><br /><h2>Thank You</h2><br /><br />");											
						});
   					}
				 );
		}			
		
		return false;
	});

});	