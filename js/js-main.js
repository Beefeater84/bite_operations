/* Сделать кнопку, у которой будет активно 2 состояния: включена иконка, включен большой размер*/


var CreateButton = function(text){
	this.element = document.createElement('button');
	this.element.innerHTML = text;



	// Создадим перваначальное состояние кнопки - он большая и отключена (пока удалил)
	this.state = CreateButton.state.DISABLED | CreateButton.state.RED;
	/*this.state = CreateButton.state.disabled;*/
}

CreateButton.state = {
	DISABLED: 1,
	RED: 2,
	BIG: 4
}

CreateButton.stateClassName = {
	'1': 'item-disabled',
	'2': 'item-red',
	'4': 'item-big'
}

// Написать функцию, которая бы проходила все состояния state и если они совпадали с stateClassNane + 
// с помощью побитовой операции сравнивала бы их и добавляла соответствующий класс +


CreateButton.prototype.getClassName = function() {

	for (let key in CreateButton.state) {
     if( Boolean( this.state & CreateButton.state[key]) ){
     	this.element.classList.add(CreateButton.stateClassName[CreateButton.state[key]]);
     } else {
     	this.element.classList.remove(CreateButton.stateClassName[CreateButton.state[key]]);
     }
	}
};

let button_test1 = new CreateButton('Кнопка для теста №1');
let container_test1 = document.querySelector('.test1');

button_test1.getClassName();
container_test1.appendChild(button_test1.element);

//Включение и выключение бита. Обычное математичесое вычитание данного бита.

button_test1.element.onclick = function(){

	button_test1.state = button_test1.state - CreateButton.state.RED;
	button_test1.getClassName();	
}




//button_test1.state.disabled;
//button_test1.state.red;
