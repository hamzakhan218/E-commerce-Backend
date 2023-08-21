async function fetchData() {
	const res = await fetch(
		"https://data.mongodb-api.com/app/data-bikoj/endpoint/data/v1/action/find",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				apiKey:
					"QOoJByKXh6kXzuUShwQrlroTTX6tj9umPB6Xijfgx0dUaqrvDF2WRp8mACawKqgm",
			},
			body: JSON.stringify({
				dataSource: "Cluster0",
				database: "E-commerce",
				collection: "users",
				filter: {
					email: "hamza@gmail.com",
				},
			}),
		}
	);
	const data = await res.json();
	console.log(data);
}
fetchData();
