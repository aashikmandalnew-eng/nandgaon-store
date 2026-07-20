export default {
  async fetch(request, env, ctx) {
    return new Response(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>NAND GAON SMP STORE</title>
        <style>
          body {
            background:#111;
            color:white;
            font-family:Arial;
            text-align:center;
            padding:50px;
          }
        </style>
      </head>

      <body>
        <h1>🔥 NAND GAON SMP STORE 🔥</h1>
        <p>Store is working!</p>
      </body>
      </html>
    `, {
      headers:{
        "content-type":"text/html"
      }
    });
  }
};
