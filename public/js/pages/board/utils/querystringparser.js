
export default function queryStringParser(querystring) {
    const result = {};
    querystring.replace(/[?&]{1}([^=&#]+)=([^&#]*)/g, function(s, k, v) { result[k] = decodeURIComponent(v); });
    return result;
}