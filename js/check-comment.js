$(document).ready(function() {



	//модуль для формы комментариев
	var commentsFormCheck = (function(){

		//приватные переменные
		var _form = $('#form-add-comments'); //форма

			_textarea = $('textarea').attr('data-type', 'required'); //поле для комментариев			

			_notifyEmptyComment =$('#empty-comment'); // красный див с нотификацией

		
		
		//инициализация
		var init = function(){
			
			_setUpListeners();
		}


		//метод прослушки событий
		var _setUpListeners = function(){

			_form.on('submit', function(e){  
				 _formValidate(e);			

			});
			
			_textarea.focus(function(){      
				_notificationHide();
			});
		}


		//privat methods
		
        //событие по клику по кнопке
		var _formValidate = function(e){

			_textareaVal = _textarea.val().trim(); // комментарий без пробелов спереди и сзади

			if ( _textareaVal == ''){
				console.log("PUK");

				e.preventDefault();

				_notifyEmptyComment.fadeIn(1000);

			}		
		};


		//событие когда ставим курсор в поле для комментариев
		var _notificationHide = function(e){

			_notifyEmptyComment.fadeOut(1000);
		};
		

		return {

			init
		}



	}());

		commentsFormCheck.init();
});