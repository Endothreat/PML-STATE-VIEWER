$(document).ready(function() {
	//console.log(list_data);
	for (var i = 0; i < list_data.length; i++) {
		console.log(list_data[i].url)
		add_row(list_data[i]);
	}
	$("table").on("click", "button",
		function() {
			var id = $(this).data('id');
			$(".js-state").text(data.output.url)
			//for ( var i in data.output.state.map.layers)
	var layersString
			layersString = "";
			for (var i in data.output.state.map.layers) {
				layersString = layersString + "," + i;
			}
			$(".js-layers").text(layersString)
			$(".js-date").text(data.output.state.map.date)
			$(".js-zoom").text(data.output.state.map.zoom)
			$(".js-extent").text(data.output.state.map.extent.left + "," + data.output.state.map.extent.bottom + "," + data.output.state.map.extent.right + "," + data.output.state.map.extent.top)
			var regionString
			regionString = "";
			for (var i in data.output.state.map.regions) {
				regionString = regionString + "," + data.output.state.map.regions[i]["0"];
			}

			$(".js-regions").text(regionString)
			var selectedIndicatorsString
			selectedIndicatorsString = "";
			for (var i in data.output.state.selectedIndicators) {
				selectedIndicatorsString = selectedIndicatorsString + "," + data.output.state.selectedIndicators[i]["name"];
			}
			$(".js-selectedIndicators").text(selectedIndicatorsString)
			$(".js-lastUsed").text(data.output.lastUsed)
			
			
			$(".js-timeline").text(data.output.state.timeline.minDate + "," + data.output.state.timeline.maxDate)
			$(".js-status").text(data.output.status)
 			$(".jsnewlink").attr('href','http://portaldev.marineopec.eu/?state=' + data.output)
		});

	// loop over list_data
	//for each item in list data 
	//print item using add_row(item)



	//	 $.ajax({
	//	 	url: "http://pmpc1310.npm.ac.uk/service/error",
	//	 	type: "GET",
	//	 	success: function(data) {
	//	 		$( "#error_message" ).toggleClass( "error_message" , false);
	//	 		add_row(data);
	//	 		$('table').dataTable({
	//	 			paginate: false,
	//	 			scrollY: 100000
	//	 		});
	//	 	},
	//	 	error: function(data, errorThrown, errorMessage) {
	//	 		// put error handling here
	//	 		console.log(data, errorThrown, errorMessage);
	//	 		add_error(errorThrown);
	//	 	}
	//
	//	 });
	//
});



function add_row(data) {
	var row = "<tr>";
	row += "<td>" + data.lastUsed + "</td>";

	row += "<td><button class='text_button' data-id=\"" + data.url + "\" >" + data.url + "</button></td>";
	$('table').append(row);

};