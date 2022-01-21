/**

 * @fileoverview Template to compose HTTP reqeuest.

 * 

 */

const url = `https://api3-normal-lf.toutiaoapi.com/luckycat/lite/v1/task/done/excitation_ad?session_id=5972C85A-4E11-4527-B74A-0BEEA9BDEF40&version_code=8.6.4&tma_jssdk_version=2.25.0.9&app_name=news_article_lite&device_id=3140656293481581&channel=App%20Store&resolution=1170*2532&aid=35&ab_version=668904,3613984,668903,3614024,1859937,668908,3614034,668907,3614030,668905,3613998,668906,3614006,3269751,3596061&ab_feature=794527&review_flag=0&ab_group=794527&subchannel=unknown&update_version_code=86421&cdid=E64953CA-5C35-435E-A199-7015F0552A12&ac=4G&os_version=15.1&ssmix=a&device_platform=iphone&iid=2982348095239198&ab_client=a1,f2,f7,e1&device_type=iPhone14,2`;

const method = `POST`;

const headers = {

'x-Tt-Token' : `0052dc3ffc08d26d0c0d0f48d825dcf79801c96b212e4ba2e3dbf578c83887f9fcc9fd7a66f598177d32a9df42fb59f2efa819413a1e379167e76c955a82c0021d9077db108744bf284a505ddf270cff650cffeed10c3d2c979482cdb2935221e0212-1.0.1`,

'x-vc-bdturing-sdk-version' : `2.2.7`,

'sdk_aid' : `2097`,

'Host' : `api3-normal-lf.toutiaoapi.com`,

'Accept-Encoding' : `gzip, deflate, br`,

'X-Ladon' : `rJApSiIqL+oDQ3HXpS+2izp85eedB1r7MG/xPGYlZGye0SyG`,

'x-tt-dt' : `AAA6SQ2GS6JTLHVYRWCHPF4YH3XVMW2C42CS3PQ75N4SQMUPRC47BSQ74SHDAMUO2GRDM4F72F3L37QUTHG55ATQWHVTCQUL3T5Z2XIHLXXUGICYVOXF7XL5YGXZS3PSTMYOI5DGNWEEWAV7QMUCBRQ`,

'x-tt-request-tag' : `s=1`,

'passport-sdk-version' : `5.17.4-rc.11.6-bugfix`,

'x-tt-trace-id' : `00-55a812300db286906bc0c6df2ea90023-55a812300db28690-01`,

'X-Khronos' : `1642114584`,

'Connection' : `keep-alive`,

'x-tt-store-region-src' : `did`,

'X-SS-Cookie' : `excgd=20220114; install_id=2982348095239198; ttreq=1$0be85a43bf7650bff7d64320f2ded2c9c74b5730; d_ticket=0e3496acb9bb83df38647dbb7c7d3f1ef9d3b; n_mh=Ii-dUnAEQx7OiWuTmeOLoUuY1_07huTO4P-LLbi78wg; odin_tt=0a56a146a3946605f8082323b5844d1adcea514f7f8b08d2d4a160c4a95641eb5937e383c0bde51eb4a3a4136ff84d1d77b25cb754ace22ad8613617859defe6e98a8d6bfe77b9ad43206dabd39d7ccb; sessionid=52dc3ffc08d26d0c0d0f48d825dcf798; sessionid_ss=52dc3ffc08d26d0c0d0f48d825dcf798; sid_guard=52dc3ffc08d26d0c0d0f48d825dcf798%7C1642097195%7C5184000%7CMon%2C+14-Mar-2022+18%3A06%3A35+GMT; sid_tt=52dc3ffc08d26d0c0d0f48d825dcf798; uid_tt=59d6796a1fdcea03db9fe07843d0b8bd; uid_tt_ss=59d6796a1fdcea03db9fe07843d0b8bd; passport_csrf_token=20442cffc391124d8400001e29b61a83; passport_csrf_token_default=20442cffc391124d8400001e29b61a83`,

'X-SS-STUB' : `2259DE0822FC61B60CDE3B7D5AC1E0F2`,

'User-Agent' : `NewsLite 8.6.4 rv:8.6.4.21 (iPhone; iOS 15.1; zh_CN) Cronet`,

'Content-Type' : `application/json; encoding=utf-8`,

'X-Argus' : `5SpkQxE9codEzXblD35r2h47IhMJ+TNjnkirCtVa1VG6XfLOB/LeIn5nI3FjdSLfxJO2TOdqZg9lNqxBuUFH2wyZGywKx1KiOzI5pHRVV2S5SJBYIHcOCp2hgh2SHBuXOQ99tAHWiPHfNMpmlaZV3ufKoe4JsFiIfU/XPfRHNSClO4rHlqONQbHPty3u2Fs2JxrYpnRYq+z0tgAzeXqjEdE+7FaxlBxTJLfLcsWg9O6tW/Xr4sxOJAD+nTwaCElSj2c=`,

'Accept' : `application/json`,

'sdk-version' : `2`,

'X-SS-DP' : `35`,

'tt-request-time' : `1642114584748`,

'Cookie' : `excgd=20220114; gftoken=MzA5MTIzMzY2NXwxNjQyMDk3MTQ4OTR8fDAGBgYGBgY; passport_csrf_token=20442cffc391124d8400001e29b61a83; passport_csrf_token_default=20442cffc391124d8400001e29b61a83; d_ticket=0e3496acb9bb83df38647dbb7c7d3f1ef9d3b; n_mh=Ii-dUnAEQx7OiWuTmeOLoUuY1_07huTO4P-LLbi78wg; odin_tt=0a56a146a3946605f8082323b5844d1adcea514f7f8b08d2d4a160c4a95641eb5937e383c0bde51eb4a3a4136ff84d1d77b25cb754ace22ad8613617859defe6e98a8d6bfe77b9ad43206dabd39d7ccb; sessionid=52dc3ffc08d26d0c0d0f48d825dcf798; sessionid_ss=52dc3ffc08d26d0c0d0f48d825dcf798; sid_guard=52dc3ffc08d26d0c0d0f48d825dcf798%7C1642097195%7C5184000%7CMon%2C+14-Mar-2022+18%3A06%3A35+GMT; sid_tt=52dc3ffc08d26d0c0d0f48d825dcf798; uid_tt=59d6796a1fdcea03db9fe07843d0b8bd; uid_tt_ss=59d6796a1fdcea03db9fe07843d0b8bd; install_id=2982348095239198; ttreq=1$0be85a43bf7650bff7d64320f2ded2c9c74b5730`,

'x-tt-store-region' : `cn-bj`,

'X-Gorgon' : `8404a0d6000099ee96c1005a1b23a78ab7e64b4d0e3fa599ea01`

};

const body = `{

  "amount" : "1345",

  "ad_rit" : "2",

  "polaris_version" : "9.9.9",

  "extra_data" : {

    "enter_from" : "tre_box"

  },

  "ad_alias_position" : "coin",

  "task_key" : "excitation_ad",

  "act_common" : {

    "sdk_version" : "5.0.1.12-bugfix",

    "act_data" : "rcE0YpYw0VRoDnIuSEs6GBU-NWYQBgo_K0GrWTiJoGFdkqVnCbqGRKN98xF6wFtQsigQwJJIj6-zPRLCrLl12hRZkhdZfQoq-tq7I7Ge17A",

    "settings_version" : 15,

    "act_token" : "p6QnhMrOiTIub8N03G-8XW6VvR_4tXSbGkWw7aOIlEporu_rzbFk_1yhA0oukgwKGVFtXgnZUI_r-83htmWccKJnU28uaYgxMoY5xxTHoAVySGys-Q1m6UBRGD6FjUvlPPLmQAtnwpJHido-Uw99oONZLKCPjKzk2QMtHp9MYPo",

    "act_base" : "3dgQgNIY902QClQ0lAu3klZ6rSRep_Wz6bf3FS6KpDa4DG8MO8SvHhP2bnsF523shZIgS5-hVnUxxys7ac2b3GoCjSGXZFYiFU07T-cQWVecypZaqS7DWUZ2WVX2VMKhcAAF5j9-i_vmzI_uGf77NjR1uk0wJexeeNZGuZQrgymurRQWtt3y0gGpm2hfWkj9X5J5ikxnObO-4CZqG6xjxoUYDFw9m4Y_4VrTuM8UCRM"

  },

  "task_id" : "188",

  "luckycat_version_name" : "9.9.9",

  "luckycat_version_code" : "999999"

}`;

const myRequest = {

    url: url,

    method: method,

    headers: headers,

    body: body

};

$task.fetch(myRequest).then(response => {

    console.log(response.statusCode + "\n\n" + response.body);

    $done();

}, reason => {

    console.log(reason.error);

    $done();

});

