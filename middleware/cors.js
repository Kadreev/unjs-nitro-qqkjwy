export default defineEventHandler((event) => {
  // Set CORS headers
  event.res.setHeader('Access-Control-Allow-Origin', '*'); // Replace '*' with your specific domain if needed
  event.res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,POST,PUT,DELETE,OPTIONS'
  );
  event.res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization'
  );

  // Handle preflight requests
  if (event.req.method === 'OPTIONS') {
    event.res.statusCode = 200;
    event.res.end();
  }
});
