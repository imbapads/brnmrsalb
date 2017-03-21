	var i;
$.ajax({

	url:"https://api.spotify.com/v1/albums/4PgleR09JVnm3zY1fW3XBA"
}).done(function(brn){
	console.log(brn);

	let count = brn.tracks.items.length;
	let html = `
	<img src="${brn.images[0].url}"  alt=""><div id="mrs"></div>`;

	document.querySelector('#carl').innerHTML = html;
	html = `<h4>Playlist</h4>
								<div class="table-wrapper">
									<table class="alt">
										<thead>
											<tr>
												<th>Name</th>
												<th>Track</th>
											</tr>
										</thead>
										<tbody>`;
	for(i=0;i<count;i++){
		html += `
		<tr>
		<td>${brn.tracks.items[i].name}</td>
		<td><audio controls><source src="${brn.tracks.items[i].preview_url}" type="audio/ogg"></audio></td>
		</tr>
		`;
	}
	html += `</tbody>`;
		document.querySelector('#mrs').innerHTML = html;
	
});

// $.ajax({
// url:""
// 	}).done(function(brn2){
// let html2=``;
// let count2 = brn2.tracks.items.length;


// 	})