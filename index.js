const steamUser = require('steam-user');
const steamTotp = require('steam-totp');
const keep_alive = require('./keep_alive.js');

var username = 'asik455';  // Your username
var password = 'Adam2015!';  // Your password
var shared_secret = '<your_shared_secret>';  // Your Steam shared secret

var games = [570];  // Enter here AppIDs of the needed games
var status = 1;  // 1 - online, 7 - invisible

user = new steamUser();
user.logOn({
	"accountName": username,
	"password": password,
	"twoFactorCode": steamTotp.generateAuthCode(shared_secret)
});

user.on('loggedOn', () => {
	if (user.steamID != null) {
		console.log(user.steamID + ' - Successfully logged on');
	}
	user.setPersona(status);               
	user.gamesPlayed(games);
});
