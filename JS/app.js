const apiFunc = () => {
fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
						// console.log(data)
            .then(data => eachData(data))
					}

					apiFunc()


const eachData = products => {
	// EVENT BUTTON
	// MENS CLOTING
	const mensClotingButton = document.getElementById('mensClotingButton');

		// JEWELERY BUTTON 
	const jeweleryButton = document.getElementById('jeweleryButton');

// SHOW CAROUSEL 
	const carouselInnerItems = document.getElementById('carouselInnerItems');

	mensClotingButton.addEventListener('click', function(){

		// CLEAR PREVIOUS CAROUSEL HTML 
		carouselInnerItems.innerHTML = '';
		displayProductsDiv.innerHTML = '';

		// console.log('hello world')
		const productEach = products.forEach(product => {
			// console.log(product)
			// console.log(product.category)
			if(product.category == `men's clothing` && product.id === 2){
				console.log(product)
				const forFirstItem = document.createElement('div');
				forFirstItem.classList.add("carousel-item");
				forFirstItem.classList.add("active");

				forFirstItem.innerHTML = `
						<div class="d-flex">
						<div>
							<h3 class="py-1 py-lg-3">UP TO 50% OFF</h3>
							<h1 id="carouselTitleOne" class="py-1 py-lg-2">${product.title}</h1>
							<p id="carouselDescOne" class="text-wrap py-2 py-lg-4">${product.description.slice(0, 300)}</p>
								<button class="bg-warning px-2 py-1 text-dark fw-bolder">SHOP NOW</button>
						</div>
						<div>
								<img id="carouselImgOne" src=${product.image} alt="..." style="
								height: 440px;
								object-fit: cover;
								margin: auto"
								">
						</div>
				</div>
				`;

				carouselInnerItems.appendChild(forFirstItem);
				
			}

			if(product.category == `men's clothing` && product.id === 3){
				// console.log(product.title)
				const forSecondItem = document.createElement('div');
				forSecondItem.classList.add("carousel-item");
				forSecondItem.innerHTML = `
						<div class="d-flex">
						<div>
							<h3 class="py-1 py-lg-3">UP TO 50% OFF</h3>
							<h1 id="carouselTitleOne" class="py-1 py-lg-2">${product.title}</h1>
							<p id="carouselDescOne" class="text-wrap py-2 py-lg-4">${product.description.slice(0, 300)}</p>
								<button class="bg-warning px-2 py-1 text-dark fw-bolder">SHOP NOW</button>
						</div>
						<div>
								<img id="carouselImgOne" src=${product.image} alt="..." style="
								height: 440px;
								object-fit: cover;
								margin: auto"
								">
						</div>
				</div>
				`;
				// console.log(forSecondItem)
				carouselInnerItems.appendChild(forSecondItem);
			}

			if(product.category == `men's clothing` && product.id === 4){
				// console.log(product)
				const forThirdItem = document.createElement('div');
				forThirdItem.classList.add("carousel-item");
				forThirdItem.innerHTML = `
						<div class="d-flex">
						<div>
							<h3 class="py-1 py-lg-3">UP TO 50% OFF</h3>
							<h1 id="carouselTitleOne" class="py-1 py-lg-2">${product.title}</h1>
							<p id="carouselDescOne" class="text-wrap py-2 py-lg-4">${product.description.slice(0, 300)}</p>
								<button class="bg-warning px-2 py-1 text-dark fw-bolder">SHOP NOW</button>
						</div>
						<div>
								<img id="carouselImgOne" src=${product.image} alt="..." style="
								height: 440px;
								object-fit: cover;
								margin: auto"
								">
						</div>
				</div>
				`;
				// console.log(forThirdItem)
				carouselInnerItems.appendChild(forThirdItem);
			}

			// DISPLAY ITEMS AREA 
			// DISPLAY ITEMS AREA 
			const displayProductsDiv = document.getElementById('displayProductsDiv');

			// console.log(product)
			if(product.category === `men's clothing`){
				const makeMensClotingColumn = document.createElement('div');
				makeMensClotingColumn.innerHTML = `
				<div class="card" style="width: 18rem; height: 412px">
				<img src=${product.image} class="card-img-top" alt="..."
				style="
				width: 200px;
				height: 300px;
				object-fit: cover;
				margin: auto">
				<div class="card-body">
					<h6 class="card-text fs-5">${product.title.slice(0, 40)}</h6>
					<h6 class="card-text fs-5"><span>$</span>${product.price}</h6>
				</div>
			</div>
				`;

				displayProductsDiv.appendChild(makeMensClotingColumn)

			}

		})
	});


	// SHOW JEWELERY CAROUSEL 
	const newArr = [];
	jeweleryButton.addEventListener('click', function(){

		// CLEAR PREVIOUS HTML 
		carouselInnerItems.innerHTML = '';
		displayProductsDiv.innerHTML = '';


		console.log(typeof(products))
		console.log(products[0].category)
		const eachProducts = products.forEach(product => {
			// console.log(product);
			if(product.category == `jewelery`){
				// console.log(product)
				newArr.push(product.id)
			}

			// FIRST ITEM 
			if(product.id === newArr[0]){
				console.log('get right')
				console.log(product)
				const forFirstItem = document.createElement('div');
				forFirstItem.classList.add("carousel-item");
				forFirstItem.classList.add("active");

				forFirstItem.innerHTML = `
						<div class="d-flex">
						<div>
							<h3 class="py-1 py-lg-3">UP TO 50% OFF</h3>
							<h1 id="carouselTitleOne" class="py-1 py-lg-2">${product.title}</h1>
							<p id="carouselDescOne" class="text-wrap py-2 py-lg-4">${product.description.slice(0, 300)}</p>
								<button class="bg-warning px-2 py-1 text-dark fw-bolder">SHOP NOW</button>
						</div>
						<div>
								<img id="carouselImgOne" src=${product.image} alt="..." style="
								height: 440px;
								object-fit: cover;
								margin: auto"
								">
						</div>
				</div>
				`;

				carouselInnerItems.appendChild(forFirstItem);
			}

			// SECOND ITEM 

			if(product.id === newArr[1]){
				console.log('get 2X right')
				console.log(product)
				const forSecondItem = document.createElement('div');
				forSecondItem.classList.add("carousel-item");
				forSecondItem.innerHTML = `
						<div class="d-flex">
						<div>
							<h3 class="py-1 py-lg-3">UP TO 50% OFF</h3>
							<h1 id="carouselTitleOne" class="py-1 py-lg-2">${product.title}</h1>
							<p id="carouselDescOne" class="text-wrap py-2 py-lg-4">${product.description.slice(0, 300)}</p>
								<button class="bg-warning px-2 py-1 text-dark fw-bolder">SHOP NOW</button>
						</div>
						<div>
								<img id="carouselImgOne" src=${product.image} alt="..." style="
								width: 300px;
								height: 440px;
								object-fit: cover;
								margin: auto";
								">
						</div>
				</div>
				`;
				// console.log(forSecondItem)
				carouselInnerItems.appendChild(forSecondItem);
			}

			// FOR THIRD ITEM 

			if(product.id === newArr[2]){
				console.log('get 3X right')
				console.log(product)
				const forThirdItem = document.createElement('div');
				forThirdItem.classList.add("carousel-item");
				forThirdItem.innerHTML = `
						<div class="d-flex">
						<div>
							<h3 class="py-1 py-lg-3">UP TO 50% OFF</h3>
							<h1 id="carouselTitleOne" class="py-1 py-lg-2">${product.title}</h1>
							<p id="carouselDescOne" class="text-wrap py-2 py-lg-4">${product.description.slice(0, 300)}</p>
								<button class="bg-warning px-2 py-1 text-dark fw-bolder">SHOP NOW</button>
						</div>
						<div>
								<img id="carouselImgOne" src=${product.image} alt="..." style="
								height: 440px;
								object-fit: cover;
								margin: auto"
								">
						</div>
				</div>
				`;
				// console.log(forThirdItem)
				carouselInnerItems.appendChild(forThirdItem);
				
			}

			// DISPLAY ITEMS AREA 
			// DISPLAY ITEMS AREA 
			const displayProductsDiv = document.getElementById('displayProductsDiv');

			// console.log(product)
			if(product.category === `jewelery`){
				const makeMensClotingColumn = document.createElement('div');
				makeMensClotingColumn.innerHTML = `
				<div class="card" style="width: 18rem; height: 412px">
				<img src=${product.image} class="card-img-top" alt="..."
				style="
				width: 200px;
				height: 300px;
				object-fit: cover;
				margin: auto">
				<div class="card-body">
					<h6 class="card-text fs-5">${product.title.slice(0, 40)}</h6>
					<h6 class="card-text fs-5"><span>$</span>${product.price}</h6>
				</div>
			</div>
				`;

				displayProductsDiv.appendChild(makeMensClotingColumn)

			}

		})
	});

	// ELECTRONICS BUTTON 
	const  electronicsButton = document.getElementById('electronicsButton');

	// SHOW ELECTRONICS CAROUSEL

	const newArrTwo = [];

	electronicsButton.addEventListener('click', function(){

		// CLEAR PREVIOUS HTML 
		carouselInnerItems.innerHTML = '';
		displayProductsDiv.innerHTML = '';

		// console.log(products)
		const eachProducts = products.forEach(product => {
			// console.log(product)
			if(product.category === `electronics`){
				console.log(product)
				newArrTwo.push(product.id)
				console.log(newArrTwo)
			}

			if(product.id === newArrTwo[0]){
				console.log('get right')
				console.log(product)
				const forFirstItem = document.createElement('div');
				forFirstItem.classList.add("carousel-item");
				forFirstItem.classList.add("active");

				forFirstItem.innerHTML = `
						<div class="d-flex">
						<div>
							<h3 class="py-1 py-lg-3">UP TO 50% OFF</h3>
							<h1 id="carouselTitleOne" class="py-1 py-lg-2">${product.title}</h1>
							<p id="carouselDescOne" class="text-wrap py-2 py-lg-4">${product.description.slice(0, 300)}</p>
								<button class="bg-warning px-2 py-1 text-dark fw-bolder">SHOP NOW</button>
						</div>
						<div>
								<img id="carouselImgOne" src=${product.image} alt="..." style="
								height: 440px;
								object-fit: cover;
								margin: auto"
								">
						</div>
				</div>
				`;

				carouselInnerItems.appendChild(forFirstItem);
			}

			// SECOND ITEM 

			if(product.id === newArrTwo[1]){
				console.log('get 2X right')
				console.log(product)
				const forSecondItem = document.createElement('div');
				forSecondItem.classList.add("carousel-item");
				forSecondItem.innerHTML = `
						<div class="d-flex">
						<div>
							<h3 class="py-1 py-lg-3">UP TO 50% OFF</h3>
							<h1 id="carouselTitleOne" class="py-1 py-lg-2">${product.title}</h1>
							<p id="carouselDescOne" class="text-wrap py-2 py-lg-4">${product.description.slice(0, 300)}</p>
								<button class="bg-warning px-2 py-1 text-dark fw-bolder">SHOP NOW</button>
						</div>
						<div>
								<img id="carouselImgOne" src=${product.image} alt="..." style="
								width: 300px;
								height: 440px;
								object-fit: cover;
								margin: auto"
								">
						</div>
				</div>
				`;
				// console.log(forSecondItem)
				carouselInnerItems.appendChild(forSecondItem);
			}

			// FOR THIRD ITEM 

			if(product.id === newArrTwo[2]){
				console.log('get 3X right')
				console.log(product)
				const forThirdItem = document.createElement('div');
				forThirdItem.classList.add("carousel-item");
				forThirdItem.innerHTML = `
						<div class="d-flex">
						<div>
							<h3 class="py-1 py-lg-3">UP TO 50% OFF</h3>
							<h1 id="carouselTitleOne" class="py-1 py-lg-2">${product.title}</h1>
							<p id="carouselDescOne" class="text-wrap py-2 py-lg-4">${product.description.slice(0, 300)}</p>
								<button class="bg-warning px-2 py-1 text-dark fw-bolder">SHOP NOW</button>
						</div>
						<div>
								<img id="carouselImgOne" src=${product.image} alt="..." style="
								width: 300px;
								height: 440px;
								object-fit: cover;
								margin: auto"
								">
						</div>
				</div>
				`;
				// console.log(forThirdItem)
				carouselInnerItems.appendChild(forThirdItem);
				
			}

			// DISPLAY ITEMS AREA 
			// DISPLAY ITEMS AREA 
			const displayProductsDiv = document.getElementById('displayProductsDiv');

			// console.log(product)
			if(product.category === `electronics`){
				const makeMensClotingColumn = document.createElement('div');
				makeMensClotingColumn.innerHTML = `
				<div class="card" style="width: 18rem; height: 412px">
				<img src=${product.image} class="card-img-top" alt="..."
				style="
				width: 200px;
				height: 300px;
				object-fit: cover;
				margin: auto">
				<div class="card-body">
					<h6 class="card-text fs-5">${product.title.slice(0, 40)}</h6>
					<h6 class="card-text fs-5"><span>$</span>${product.price}</h6>
				</div>
			</div>
				`;

				displayProductsDiv.appendChild(makeMensClotingColumn)

			}

		})
		});


		// WOMENSCLOTHING BUTTON 

		const womensClothingButton = document.getElementById('womensClothingButton');

		// SHOW WOMENSCLOTHING CAROUSEL 

		const newArrThree = [];

		womensClothingButton.addEventListener('click', function(){
			console.log('hello world');

			// CLEAR PREVIOUS HTML 
			carouselInnerItems.innerHTML = '';
			displayProductsDiv.innerHTML = '';

			const eachProducts = products.forEach(product => {
				// console.log(product)
				if(product.category === `women's clothing`){
					// console.log(product);
					newArrThree.push(product.id)
					console.log(newArrThree)
				}

				if(product.id === newArrThree[0]){
					console.log('get right')
					console.log(product)
					const forFirstItem = document.createElement('div');
					forFirstItem.classList.add("carousel-item");
					forFirstItem.classList.add("active");
	
					forFirstItem.innerHTML = `
							<div class="d-flex">
							<div>
								<h3 class="py-1 py-lg-3">UP TO 50% OFF</h3>
								<h1 id="carouselTitleOne" class="py-1 py-lg-2">${product.title}</h1>
								<p id="carouselDescOne" class="text-wrap py-2 py-lg-4">${product.description.slice(0, 300)}</p>
									<button class="bg-warning px-2 py-1 text-dark fw-bolder">SHOP NOW</button>
							</div>
							<div>
									<img id="carouselImgOne" width="300px" src=${product.image} alt="..." style="
									width: 300px;
									height: 440px;
									object-fit: cover;
									margin: auto"
									">
							</div>
					</div>
					`;
	
					carouselInnerItems.appendChild(forFirstItem);
				}
	
				// SECOND ITEM 
	
				if(product.id === newArrThree[1]){
					console.log('get 2X right')
					console.log(product)
					const forSecondItem = document.createElement('div');
					forSecondItem.classList.add("carousel-item");
					forSecondItem.innerHTML = `
							<div class="d-flex">
							<div>
								<h3 class="py-1 py-lg-3">UP TO 50% OFF</h3>
								<h1 id="carouselTitleOne" class="py-1 py-lg-2">${product.title}</h1>
								<p id="carouselDescOne" class="text-wrap py-2 py-lg-4">${product.description}</p>
									<button class="bg-warning px-2 py-1 text-dark fw-bolder">SHOP NOW</button>
							</div>
							<div>
									<img id="carouselImgOne" width="300px" src=${product.image} alt="..." style="
									width: 300px;
									height: 440px;
									object-fit: cover;
									margin: auto"
									">
							</div>
					</div>
					`;
					// console.log(forSecondItem)
					carouselInnerItems.appendChild(forSecondItem);
				}
	
				// FOR THIRD ITEM 
	
				if(product.id === newArrThree[2]){
					console.log('get 3X right')
					console.log(product)
					const forThirdItem = document.createElement('div');
					forThirdItem.classList.add("carousel-item");
					forThirdItem.innerHTML = `
							<div class="d-flex">
							<div>
								<h3 class="py-1 py-lg-3">UP TO 50% OFF</h3>
								<h1 id="carouselTitleOne" class="py-1 py-lg-2">${product.title}</h1>
								<p id="carouselDescOne" class="text-wrap py-2 py-lg-4">${product.description.slice(0, 300)}</p>
									<button class="bg-warning px-2 py-1 text-dark fw-bolder">SHOP NOW</button>
							</div>
							<div>
									<img id="carouselImgOne" width="300px" src=${product.image} alt="..." style="
									width: 300px;
									height: 440px;
									object-fit: cover;
									margin: auto"
									">
							</div>
					</div>
					`;
					// console.log(forThirdItem)
					carouselInnerItems.appendChild(forThirdItem);
					
				}

			// DISPLAY ITEMS AREA 
			// DISPLAY ITEMS AREA 
			const displayProductsDiv = document.getElementById('displayProductsDiv');

			// console.log(product)
			if(product.category === `women's clothing`){
				const makeMensClotingColumn = document.createElement('div');
				makeMensClotingColumn.innerHTML = `
				<div class="card" style="width: 18rem; height: 412px">
				<img src=${product.image} class="card-img-top" alt="..."
				style="
				width: 200px;
				height: 300px;
				object-fit: cover;
				margin: auto">
				<div class="card-body">
					<h6 class="card-text fs-5">${product.title.slice(0, 40)}</h6>
					<h6 class="card-text fs-5"><span>$</span>${product.price}</h6>
				</div>
			</div>
				`;

				displayProductsDiv.appendChild(makeMensClotingColumn)

			}

			})
		})

	
	
	}

// apiFunc()