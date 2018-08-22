$(document).ready(function() {	

	var regFormCheck = (function(){

		var form = $('#registration-form');
		var inputs = form.find('input[data-type]');
		
		var init = function(){

			_setUpListeners();
		};

		var _setUpListeners = function(){

			form.on('submit', function(e){
				 _formValidate(e);				 
			})
		};

		//privat methods
		var _formValidate = function(e){

			var isValid = true;

			$.each(inputs, function(index, val){
				e.preventDefault();
				var input = $(val),
					value = input.val().trim(),
					formGroup = input.parents('.form__group'),
					textIfEmpty = input.attr('data-empty'),
					tooltip = $('<span class = "form__tooltip">' + textIfEmpty + '</span>');
				var busyEmail = 'mail@mail.com';
				var inputEmailValue = formGroup.children('[type="email"]').val();
					
				if(inputEmailValue == busyEmail){
					
					var textIfBusy = input.attr('data-email-busy'),
						tooltip = $('<span class = "form__tooltip">' + textIfBusy + '</span>');
					tooltip.prependTo(formGroup);
					isValid = false;
						
				}else 

				//ошибка -незаполненные поля
				if( value == ''){
					formGroup.find('.form__tooltip').remove();
					tooltip.prependTo(formGroup);
					isValid = false;
					

				} else if( input.attr('type').toLowerCase() === 'email'){

					//ошибка -неверный формат почты
					var pattern = /^([a-z0-9_\.-]+\.)*[a-z0-9_\-]+@([a-z0-9][a-z0-9\-]*[a-z0-9]\.)+[a-z]{2,4}$/i;
					if(pattern.test(value)){
						formGroup.find('.form__tooltip').remove();
						

					} else {
						var wrongFormat = input.attr('data-format'),
						tooltip = $('<span class = "form__tooltip">' + wrongFormat + '</span>');
						tooltip.prependTo(formGroup);
						isValid = false;
					}					
				}

				if(isValid){ 
					form.unbind('submit').submit();  // если форма валидна, отправляем ее 
				}

				//hide error
				input.on('focus', function(){
					formGroup.find('.form__tooltip').remove();					
				});
				
			});//close  $.each
		
		};// close var  _formValidate
		
		return {
			init
		}	

	}());

		regFormCheck.init();
});