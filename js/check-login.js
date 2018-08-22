$(document).ready(function() {

	console.log('Hello world!');

	var loginFormCheck = (function(){

		var _loginForm = $('#login-form');
		
		var inputs = _loginForm.find('input[data-type]');
		var textLoginInvalid = _loginForm.find('#invalid-login');
		var busyEmail = 'mail@mail.com';
 		var busyPass = '123';
		var arrayInfo = ['email', 'pass'];

		console.log(arrayInfo);

		var init = function(){
			_setUpListeners();
		}

		var _setUpListeners = function(){

			_loginForm.on('submit', function(e){

				_loginFormValidate(e);
			})
		}

		var _loginFormValidate = function(e){

			var isValid = true;
			
			$.each(inputs, function(index, val){
				e.preventDefault();

				var input = $(val);
				var value = input.val().trim();
 				var	formGroup = input.parents('.form__group');
 				var	textIfEmpty = input.attr('data-empty');
 				var	tooltip = $('<span class = "form__tooltip">' + textIfEmpty + '</span>');


 				//сохранение введенных значений почты и пароля в переменные
 				if(index == 0){
 					 arrayInfo[0] = formGroup.children('[type="email"]').val(); }
 				if(index == 1){	 
 					arrayInfo[1] = formGroup.children('[type="password"]').val(); }

 				
 				//валидация
 				if(value == ''){
 					//ошибка -пустые поля
 					formGroup.find('.form__tooltip').remove();
 					tooltip.prependTo(formGroup);
 					isValid = false;

 				} else if( input.attr('type').toLowerCase() === 'email'){

 					//ошибка -неверный формат почты
					var pattern = /^([a-z0-9_\.-]+\.)*[a-z0-9_\-]+@([a-z0-9][a-z0-9\-]*[a-z0-9]\.)+[a-z]{2,4}$/i;
					if(pattern.test(value)){
						formGroup.find('.form__tooltip').remove();
						
 					} else {
						var wrongFormat = input.attr('data-format');

						formGroup.find('.form__tooltip').remove();
						tooltip = $('<span class = "form__tooltip">' + wrongFormat + '</span>');
						tooltip.prependTo(formGroup);

						isValid = false;
					}				
				} 
					
				//hide error
				input.on('focus', function(){
					formGroup.find('.form__tooltip').remove();
					textLoginInvalid.hide(500);					
				});
			});// close $.each

				if(arrayInfo[0] === busyEmail && arrayInfo[1] !== busyPass ){

					textLoginInvalid.show(500);

					isValid = false;
					//console.log('Not OK!')							
					} 

				if(isValid){ 
					_loginForm.unbind('submit').submit();  // если форма валидна, отправляем ее 
					}
		}//close _loginFormValidate

		return {
			init
		}


	}());

	loginFormCheck.init();

});