$(document).ready(function() {

	//модуль для формы комментариев
	var commentsFormCheck = (function(){

		//приватные переменные
		var _form = $('#form-add-comments');
		var _textarea =$('textarea').attr('data-type', 'required');
		var _notifyEmptyComment =$('#empty-comment');

		
		//инициализация
		var init = function(){
			
			_setUpListeners();


		}

		//метод прослушки событий
		var _setUpListeners = function(){

			_form.on('submit', function(e){

				 _formValidate(e);

			});
		}


		//privat method

		var _formValidate = function(e){
			

			if (_textarea.val() == ''){

				e.preventDefault();
				
				_notifyEmptyComment.fadeIn(1000);
			}

			if (_textarea.keydown()){

				_notifyEmptyComment.fadeOut(1000);
			}
		}
		


		return {

			init
		}



	}());

		commentsFormCheck.init();
});