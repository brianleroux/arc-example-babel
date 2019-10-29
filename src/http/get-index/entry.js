export async function handler(req) {
  let response = `
    <h1>Test Babel</h1>
    <pre>
    <b>req?.queryStringParameters?.foo</b> ${req?.queryStringParameters?.foo}
    </pre>
    <hr>
    <pre>${JSON.stringify(req, null, 2)}</pre>
  `
  return {
    headers: {
      'content-type': 'text/html; charset=utf8'
    },
    body: response
  }
}
