// Fetch example 1
let symbol = 'LTCBTC'
const apiKey = "PMwI8DmXX8YYMt51lA5oZg==08TeCoPPFxfMmJdV"
fetch(`https://api.api-ninjas.com/v1/cryptoprice?symbol=${symbol}` ,
	{
		headers: {
			"Content-Type": "application/json",
			Accept: 'application/json',
			"X-Api-Key": apiKey,
		}
	})
	.then(function (response) {
		if (response.ok) {
			return response.json();
		}
		throw new Error("BruhMoment");
	})
	.then(function (data) {
		console.log(data);
	})
	.catch(function (error) {
		console.warn(error);
	})
// PMwI8DmXX8YYMt51lA5oZg==08TeCoPPFxfMmJdV

