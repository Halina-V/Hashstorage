		class HashStorage{
			constructor(){

				this.hash = {};
			}

			addValue = function(key,value){
				this.hash[key] = value;
			}

			getValue = function(key){
				if (key in this.hash){
					return this.hash[key];
				} else {
					return undefined;
				}
			}

			deleteValue = function(key){
				if (this.hash[key]){
					delete this.hash[key];
					return true;
				} else {
					return false;
				}
			}

			getKeys = function(){
				let keys = [];
				for (let key in this.hash){
					keys.push(key);
				}
				return keys;
			}
		}

		const coctailsStorage = new HashStorage();

		coctailsStorage.addValue('Мохито', 
			{cocktailName:'Коктейль "Мохито"',
			alcohol: 'да', 
			ingredients: [
			{
				name:"Белый ром",
				quantity: 50,
				measure:"мл"
			},
			{
				name:"Сахарный сироп",
				quantity: 15,
				measure:"мл"
			}, 
			{
				name:"Содовая",
				quantity: 100,
				measure:"мл"
			},
			{
				name: "Лайм",
				quantity: 80,
				measure:"г"
			}, 
			{
				name:"Мята",
				quantity: 3,
				measure:"г"
			},
			{
				name: "Дробленый лед",
				quantity: 200,
				measure:"г"
			}
			], 
			recipe: `Положи в хайбол лайм 3 дольки и подави мадлером. 
			Возьми мяту 10 листиков в одну руку и хлопни по ним другой рукой.
			Положи мяту в хайбол.
			Наполни бокал дробленым льдом доверху.
			Добавь сахарный сироп 15 мл и белый ром 50 мл.
			Долей содовую доверху и аккуратно размешай коктейльной ложкой.
			Досыпь немного дробленого льда.
			Укрась веточкой мяты и долькой лайма.`} );

		coctailsStorage.addValue('Малиновый сбитень'
			, {cocktailName:'Коктейль "Малиновый сбитень"',
			alcohol: 'нет', 
			ingredients: [
			{
				name:'Вода без газа',
				quantity: 150, 
				measure:'мл'
			}, 
			{
				name:'Малина', 
				quantity: 40, 
				measure:'г'
			}, 
			{
				name:'Мед',
				quantity: 40, 
				measure:'мл'
			},
			{
				name: 'Сахарный песок',
				quantity: 15, 
				measure:'г'
			}, 
			{
				name:'Лимонная цедра',
				quantity: 1, 
				measure:'шт'
			}
			], 
			recipe: `Положи в питчер малину 5 ягод, сахарный песок 3 к. ложки и подави мадлером.
			Добавь мед 40 мл и воду без газа 150 мл.
			Помешивая, нагрей, не доводя до кипения.
			Перелей в бокал для ирландского кофе.
			Укрась ягодами малины на шпажке и лимонной цедрой.`});

		coctailsStorage.addValue('Карибский кофе'
			, {cocktailName:'Коктейль "Карибский кофе"',
			alcohol: 'нет', 
			ingredients:[
			{
				name:'Сироп маракуйи', 
				quantity: 25, 
				measure:'мл'
			},
			{
				name:'Кофе американо',
				quantity:150, 
				measure:'мл'
			}, 
			{
				name:'Кофе в зернах',
				quantity: 2, 
				measure:'г'
			}, 
			{
				name:'Взбитые сливки',
				quantity: 20, 
				measure:'г'
			}, 
			{
				name:'Кокосовое пюре',
				quantity: 30, 
				measure:'г'
			}
			], 
			recipe: `Положи в бокал для ирландского кофе кокосовое пюре 6 к. ложек.
			Налей сироп маракуйи 25 мл.
			Долей горячий американо 150 мл и размешай коктейльной ложкой.
			Укрась взбитыми сливками и зернами кофе.`});

		coctailsStorage.addValue('Беллини'
			, {cocktailName:'Коктейль "Беллини"',
			alcohol: 'да', 
			ingredients: [
			{
				name:'Просекко',
				quantity: 100,
				measure:'мл'
			}, 
			{
				name:'Сахарный сироп',
				quantity: 10, 
				measure:'мл'
			}, 
			{
				name:'Лимонный сок',
				quantity: 10, 
				measure:'мл'
			}, 
			{
				name:'Персиковое пюре',
				quantity: 20, 
				measure:'г'
			}, 
			{
				name:'Лед в кубиках',
				quantity: 300,
				measure:'г'
			}
			], 
			recipe: `Положи в стакан для смешивания персиковое пюре 4 к. ложки.
			Добавь лимонный сок 10 мл, сахарный сироп 10 мл и просекко 50 мл.
			Наполни стакан кубиками льда и аккуратно размешай коктейльной ложкой.
			Перелей через стрейнер и ситечко в маленький хайбол или бокал флюте.
			Долей просекко доверху.`});


		console.log(coctailsStorage.getValue("Мохито"));
		console.log(coctailsStorage.getValue("Малиновый сбитень"));
		console.log(coctailsStorage.getValue("Карибский кофе"));
		console.log(coctailsStorage.getValue("Беллини"));
		console.log(coctailsStorage.getKeys());

		
		
// записываем рецепт
let btnEnter = document.querySelector(".btn-enter");
btnEnter.onclick = function(){
	let cocktailName;
	while ((cocktailName === "") || (cocktailName == null) || (cocktailName.length == 1) ){
		cocktailName = prompt("Введите название коктейля", "Беллини");
	}
	let alcohol = confirm("Коктейль алкогольный?")
	if (alcohol){
		alcohol = "да";
	} else {
		alcohol = "нет";
	}
	let ingredients = [];
	let ingredient = {};
	do {
		ingredient = {
			name:(prompt("Введите ингридиент", "Просекко")),
			quantity: (prompt("Введите количество", "100")),
			measure:(prompt("Введите меру", "мл/гр/шт"))
		}
		ingredients.push(ingredient);
	}
	while (confirm ("Еще ингредиенты?"));
	let recipe = prompt("Введите рецепт приготовления", "Положи в стакан для смешивания персиковое пюре" ); 
	let value = {
		cocktailName: cocktailName,
		alcohol: alcohol,
		ingredients: ingredients,
		recipe: recipe,
	}
	coctailsStorage.addValue(cocktailName, value);
}


// выводим рецепт
let cocktailRecipe = document.querySelector(".cocktail-recipe");
let btnRecipe = document.querySelector(".btn-recipe");
btnRecipe.onclick = function(){
	let cocktailName; 
	while ((cocktailName === "") || (cocktailName == null) || (cocktailName.length == 1) ){
		cocktailName = prompt("Введите название коктейля", "Беллини");
	}
	let recipe = coctailsStorage.getValue(cocktailName);
	if (recipe){
		let ingredientsList = "";
		for (let i=0; i<recipe.ingredients.length;i++){
			ingredientsList += `<li>${recipe.ingredients[i].name} ${recipe.ingredients[i].quantity} ${recipe.ingredients[i].measure}</li>`;
		}
		cocktailRecipe.innerHTML = (`<h2>${recipe.cocktailName} (алкогольный: ${recipe.alcohol})</h2>
			<h4>Необходимые ингридиенты:</h4>
			<ul>${ingredientsList}</ul>
			<h4>Рецепт приготовления:</h4>
			<p>${recipe.recipe}</p>`)
	} else {
		cocktailRecipe.innerHTML = (`<p>Коктейля нет в списке</p>`);
	}
	cocktailRecipe.style.display = "block";
	cocktailsList.style.display = "none";
	deleteMessage.style.display = "none";
}



// удаляем рецепт
let deleteMessage = document.querySelector(".delete-message");
let btnDelete = document.querySelector(".btn-delete")
btnDelete.onclick = function(){
	let cocktailName; 
	while ((cocktailName === "") || (cocktailName == null) || (cocktailName.length == 1) ){
		cocktailName = prompt("Введите название коктейля", "Беллини");
	}
	let cocktailDelete = coctailsStorage.deleteValue(cocktailName);
	deleteMessage.style.display = "block";
	if (cocktailDelete){
		deleteMessage.innerHTML = `<p>Коктейль удален!</p>`;
	} else {
		deleteMessage.innerHTML = `<p>Коктейля нет в списке!</p>`;
	}
	cocktailRecipe.style.display = "none";
}



// список рецептов
let cocktailsList = document.querySelector(".cocktails-list");
let btnList = document.querySelector(".btn-list");
btnList.onclick = function(){
	let list = coctailsStorage.getKeys();
	if (list.length){
		let showList = "";
		for (let i = 0; i<list.length; i++){
			showList += "<li>" + list[i] + "</li>";
		}
		cocktailsList.innerHTML = `<h2>Список всех коктейлей</h2>
		<ul>${showList}</ul>`;
	} else {
		cocktailsList.innerHTML = `<h2>Список коктейлей пуст</h2>`;
	}
	cocktailsList.style.display = "block";
	cocktailRecipe.style.display = "none";
	deleteMessage.style.display = "none";
}