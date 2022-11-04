/**************************
CamScanner 解锁部分高级特权

***************************
Quantumult X:

[rewrite_local]
^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url script-response-body https://raw.githubusercontent.com/wtxj/wtxj/main/CamScanner.js

[mitm]
hostname = ap*.intsig.net

***************************
Loon:

[Script]
http-response https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/wtxj/wtxj/main/CamScanner.js

[MITM]
hostname = ap*.intsig.net
**************************/
let obj = JSON["\x70\x61\x72\x73\x65"]($response["\x62\x6f\x64\x79"]);obj = {"\x64\x61\x74\x61":{"\x70\x73\x6e\x6c\x5f\x76\x69\x70\x5f\x70\x72\x6f\x70\x65\x72\x74\x79":{"\x65\x78\x70\x69\x72\x79":"\x31\x39\x32\x30\x36\x31\x34\x34\x30\x33"}}};$done({body: JSON["\x73\x74\x72\x69\x6e\x67\x69\x66\x79"](obj)});
