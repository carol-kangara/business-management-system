// business logic
// business logic

function Contact(first)
{
  this.firstName = first;
  
  Contact.prototype.fullName= function()
	{
		return this.firstName;
	}

}

Contact.prototype.fullName= function()
{
	return this.firstName;
}

// user interface logic
$(document).ready(function()
	{
		$("form#new-contact").submit(function(event)
			{
				event.preventDefault();
				var inputtedFirstName = $("input#new-first-name").val();
				
				var newContact = new Contact(inputtedFirstName);
				$("ul#shops").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");
				
				$(".contact").last().click(function()
					{
						$("#show-contact").show();                                              $("#show-contact h2").text(newContact.firstName);
                                                $(".first-name").text(newContact.firstName);
                                    	     
					});

				$("input#new-first-name").val("");
				

				});
		}); 
