
const Home = () => {
	const views = `
		<h1>Home</h1>
		<p>A ver si esto funciona ah</p>
	`

	const divElement = document.createElement('div')
	divElement.classList = ''
	divElement.innerHTML = views;

	return divElement;
}

const Products = () => {
	const views = `
		<h1>Products</h1>
		<p>Parece estar funcionando bien</p>
	`

	const divElement = document.createElement('div')
	divElement.classList = ''
	divElement.innerHTML = views;

	return divElement;
}

const Posts = () => {
	const views = `
		<h1>Posts</h1>
		<p>A ver la ultima prueba</p>
	`

	const divElement = document.createElement('div')
	divElement.classList = ''
	divElement.innerHTML = views;

	return divElement;
}

const NotFound = () => {
	const views = `
		<h1>404</h1>
		<p>Sip, funciona :)</p>
	`

	const divElement = document.createElement('div')
	divElement.classList = ''
	divElement.innerHTML = views;

	return divElement;
}


let content = document.getElementById('root')


const router = (route) => {
	content.innerHTML = '';
	switch(route) {
		case '#/': {
			return content.appendChild(Home());
		}
		case '#/posts':
			return content.appendChild(Posts());
		case '#/products':
			return content.appendChild(Products());
		default:
			return content.appendChild(NotFound());

	}
}

router(window.location.hash)
window.addEventListener('hashchange', () => {
	router(window.location.hash)
})