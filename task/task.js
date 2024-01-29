// Your code here
fetch('https://danit.com.ua/free-towns-list-json')
	.then((response) => {
		console.log(response);
		if (!response.ok) throw new Error('что-то поломалось');

		return response.json();
	})
	.then((result) => {
		console.log(result);
		const listItems = result.map((el) => `<li>${el}</li>`).join('');
		const ul = document.querySelector('#free-towns');
		console.log(ul);
		ul.insertAdjacentHTML('beforeend', listItems);
	})
	.catch((error) => console.log(error));
