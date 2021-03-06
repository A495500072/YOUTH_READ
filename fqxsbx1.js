/**

 * @fileoverview Template to compose HTTP reqeuest.

 * 

 */

const url = `https://api5-normal-lf.fqnovel.com/luckycat/novel/v1/task/done/treasure_task?_request_from=web&ip=192.168.3.19&version_code=350&category_style=1&comment_tag_c=3&app_name=novelapp&vid=95CF403A-0BC4-4C7A-9A45-837DA4E85151&device_id=888867274363405&channel=App%20Store&resolution=1125%2A2436&aid=1967&version_name=3.5.0.32&openudid=d9ed59585da321a835578077758a28c4541c76f6&update_version_code=35032&cdid=DFCC6870-E017-42B4-BA83-319A76B8A960&gender=1&idfv=95CF403A-0BC4-4C7A-9A45-837DA4E85151&ac=WIFI&os_version=15.1&ssmix=a&ab_sdk_version=2559153&device_platform=iphone&iid=1768480353289341&device_type=iPhone14%2C2&idfa=00000000-0000-0000-0000-000000000000`;

const method = `POST`;

const headers = {

'Cookie' : `excgd=20220110; passport_csrf_token=82edd847c6cf1d32ecb784b5fdb3926c; passport_csrf_token_default=82edd847c6cf1d32ecb784b5fdb3926c; d_ticket=1374d7b257c9a4b64c988883a0a58eabe664b; n_mh=Ii-dUnAEQx7OiWuTmeOLoUuY1_07huTO4P-LLbi78wg; odin_tt=acd3a40084a2a434baad365ccb50be6cc491e35eda66ac2903d55d15d3706a316e2c0386cd8d6029450a153e95dc70d5ba777981c614b2e9465989280eb96af0f8d15e072ddf6fab34e152763c8be918; sessionid=680eb33ce4145cf07e600d469b4f28bd; sessionid_ss=680eb33ce4145cf07e600d469b4f28bd; sid_guard=680eb33ce4145cf07e600d469b4f28bd%7C1640420969%7C5184000%7CWed%2C+23-Feb-2022+08%3A29%3A29+GMT; sid_tt=680eb33ce4145cf07e600d469b4f28bd; uid_tt=c29980cd526d854baa7e545ee2f4872f; uid_tt_ss=c29980cd526d854baa7e545ee2f4872f; install_id=1768480353289341; ttreq=1$b108c95d5009bf56638ff2817a075f933932d691`,

'Accept' : `*/*`,

'Connection' : `keep-alive`,

'Content-Type' : `application/x-www-form-urlencoded`,

'Accept-Encoding' : `gzip, deflate, br`,

'Host' : `api5-normal-lf.fqnovel.com`,

'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148`,

'Accept-Language' : `zh-CN,zh-Hans;q=0.9`

};

const body = `{

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

