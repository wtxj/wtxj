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

let obj = JSON.parse($response.body);
obj = {"data":{"psnl_vip_property":{"expiry":"4102430873"}}};
$done({body: JSON.stringify(obj)});
