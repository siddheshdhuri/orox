// api url
const api_url =	"https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fsiddhuri.medium.com%2Ffeed";

// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	if (response) {
		hideloader();
	}
	show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
    console.log(data.items)
	let tab =
		`<tr>
		<th>Name</th>
		<th>Office</th>
		<th>Position</th>
		<th>Salary</th>
		</tr>`;
	
	// Loop to access all rows
	for (let r of data.items) {
        console.log(r)

		tab += `<tr>
	<td>${r.name} </td>
	<td>${r.office}</td>
	<td>${r.position}</td>
	<td>${r.salary}</td>		
</tr>`;
	}
	// Setting innerHTML as tab variable
	document.getElementById("mediumfeed").innerHTML = tab;
}
