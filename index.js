var Sonos = require('sonos').Sonos;
var sonos_office = new Sonos('192.168.1.34');
var sonos_reception = new Sonos('10.200.201.52');

sonos_office.next(function(err, nexted){
  if(!err || !nexted)
    console.log('Complete');
  else
    console.log('OOOHHHHHH NOOOO');
});

// sonos_office.getMusicLibrary({},{},function (err, something) {
//   console.log(err, something)
// })


//var webhost = '192.168.2.25';
// var text = 'hello jay';

// //Replace all spaces with a _ because Sonos doesn't support spaces
// text = text.replace(/ /g,'_');

// //For supported languages see www.voicerss.org/api/documentation.aspx
// //This url just redirects to voicerss because of the specific url format for the sonos
// var url = 'http://i872953.iris.fhict.nl/speech/en-us_' + encodeURIComponent(text)+'.mp3';

// sonos_office.queueNext(url, function(err, playing) {
//   console.log([err, playing]);
// });

// sonos.play(function(err, playing) {
//   console.log([err, playing]);
// });

// sonos_reception.getVolume(function(err, volume) {
//   console.log([err, volume])
// });

sonos_reception.setVolume(0, function(err, volume) {
  console.log([err, volume])
});

// sonos.getLEDState(function (err, led) {
//   if (err) console.log(err)
//   console.log(led)
// })

// sonos.setLEDState('Off', function (err, led) {
//   if (err) console.log(err)
//   console.log(led)
// })




//var webhost = '192.168.2.25';
// var text = 'Hello Jay';

// var Sonos = require('sonos');
// var sonos = new Sonos.Sonos('192.168.1.34');

// //Replace all spaces with a _ because Sonos doesn't support spaces
// text = text.replace(/ /g,'_');

// //For supported languages see www.voicerss.org/api/documentation.aspx
// //This url just redirects to voicerss because of the specific url format for the sonos
// var url = 'http://i872953.iris.fhict.nl/speech/en-us_' + encodeURIComponent(text)+'.mp3';

// sonos.queueNext(url, function(err, playing) {
//   console.log([err, playing]);
// });




// var Sonos = require('sonos').Sonos;
// var sonos = new Sonos('192.168.1.12');

// sonos.getMusicLibrary('playlists', {start: 0, total: 25}, function(err, result){
//   console.log([err, result]);
// });

// var http = require('http');
// var Sonos = require('sonos').Sonos;

// var sonos = new Sonos(process.env.SONOS_HOST || '192.168.1.34');//'192.168.2.11');
// console.log(sonos)
// var server = http.createServer(function(req, res) {
//   sonos.currentTrack(function(err, track) {
//     res.writeHead(200, {
//       'Content-Type': 'text/html'
//     });

//     var rows = [];

//     for( var key in track) {
//       if(key === 'albumArtURI')
//         rows.push('<tr><th>' + key + '</th><td>' + track[key] + '</td></tr>');
//     }


//     res.write('<table>' + rows.join('') + '</table>');
//     res.end();
//   });
// });

// server.listen(process.env.PORT || 3000);

/* PLAY */
// var Sonos = require('sonos').Sonos;
// var sonos = new Sonos('192.168.1.34');

// sonos.play(function(err, playing) {
//   console.log([err, playing]);
// });
