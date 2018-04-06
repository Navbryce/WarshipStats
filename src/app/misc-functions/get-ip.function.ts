export function getIP (configObject: any) {
  var fullIP;
  if (configObject.backendIP == null || configObject.backendIP.length === 0) {
    fullIP = ''; // the ip has been been dynamically set. hopefully the frontend is on the same server as the backend
  } else {
    fullIP = 'http://' + configObject.backendIP + ':' + configObject.port;
  }
  return fullIP;
}
