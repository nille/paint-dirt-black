 jq = jQuery.noConflict();
 jq = jQuery.noConflict();
 var blokkmatches = {
 	'dif':'dif',
 	'djurgårdare':'djurgardare',
 	'järnkamin':'jarnkamin',
 	'bajare':'bajare',
 	'hammarbyare':'hammarbyare',    
	'Djurgården':'Djurgarden',
	'klocktornet':'klocktornet',
	'Djurgardens IF':'Djurgardens IF',
	'Magnus Pehrsson':'Magnus Pehrsson',
	'Hammarby':'Hammarby',
	'Hammarbys':'Hammarbys',
	'Bajen':'Bajen',
	'Tele2 Arena':'Tele2 Arena',
	'Söderstadion':'Soderstadion',
	'Stockholms stadion':'Stockholms stadion',
	'IF Elfsborg':'IF Elfsborg',
	'Elfsborg':'Elfsborg',
	'Bangura':'Bangura',
	'Gregg Berhalter':'Gregg Berhalter',
	'Berhalter':'Berhalter',
	'Erton Fejzullahu':'Erton Fejzullahu',
	'Joona Toivio':'Joona Toivio',
	'Simon Tibbling' :'Simon Tibbling',
	'Kenneth Höie':'Kenneth Hoie',
	'Höie':'Hoie',
	'Hampus Nilsson':'Hampus Nilsson',
	'Eric Dahlgren':'Eric Dahlgren',
	'Joona Toivo':'Joona Toivo',
	'Toivo':'Toivo',
	'Marc Pedersen':'Marc Pedersen',
	'Petter Gustafsson':'Petter Gustafsson',
	'Emil Bergström':'Emil Bergstrom',
	'Mattias Östberg':'Mattias Ostberg',
	'Joel Riddez':'Joel Riddez',
	'Riddez':'Riddez',
	'Daniel Jarl':'Daniel Jarl',
	'Jesper Arvidsson':'Jesper Arvidsson',
	'Adam Kasa':'Adam Kasa',
	'Philip Sparr-dal Mantilla':'Philip Sparr-dal Mantilla',
	'Yussif Chibsah':'Yussif Chibsah',
	'Chibsah':'Chibsah',
	'Peter Nymann':'Peter Nymann',
	'Martin Broberg':'Martin Broberg',
	'Andreas Johansson':'Andreas Johansson',
	'Brian Span':'Brian Span',
	'Daniel Amartey':'Daniel Amartey',
	'Amartey':'Amartey',
	'Nahir Oyal':'Nahir Oyal',
	'Simin Tibbling':'Simin Tibbling',
	'Tibbling':'Tibbling',
	'amadou jawo':'amadou jawo',
	'Jawo':'Jawo',
	'Lagrell':'Lagrell',
	'SvFF':'SvFF',				
	'Philip Hellquist':'Philip Hellquist',
	'Sebastian Rajalakso':'Sebastian Rajalakso',
	'Rajalakso':'Rajalakso',
	'Ike Fofanah':'Ike Fofanah',
	'Tim Söderström':'Tim Soderstrom',
	'Sasa Matic':'Sasa Matic',
	'Kristijan Cosic':'Kristijan Cosic',
	'Luis Solignac':'Luis Solignac',
	'Erton Fejzullahu':'Erton Fejzullahu',
	'Fejzullahu':'Fejzullahu',
	'Erton':'Erton',
	'Godsway Donyoh':'Godsway Donyoh',
	'Alhaji Kamara':'Alhaji Kamara',
	'Trimi Makolli':'Trimi Makolli',
	'Anders Johansson':'Anders Johansson',
	'Martin Sundgren':'Martin Sundgren',
	'Kjell Frisk':'Kjell Frisk'
	};
	
  var blokkskeys = [];
  var blokksvalues = [];	
	for(kkey in blokkmatches){
		blokkskeys.push(kkey);
		blokksvalues.push(blokkmatches[kkey]);
		
	}
	var style_font = '';
	var blokkstring =  blokkskeys.join('|') ;
 
	 
	var reg = new RegExp(blokkstring,'ig');
	jq("body *").replaceText( reg, changeFontBlokk );
 
 function changeFontBlokk( str ){
	return "<span style='font-family:BLOKKRegular'>" + blokkmatches[str] + "</span>";
	
 }; 