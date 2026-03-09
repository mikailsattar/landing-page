export default {
  async fetch(request) {

    const html = `
    <!DOCTYPE html>
<html>
<head>
<title></title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body{
margin:0;
background:black;
display:flex;
justify-content:center;
align-items:center;
height:100vh;
}
img{
max-width:100%;
height:100%;
object-fit: fill;
}
</style>
</head>
<body>
<img src="https://i.ibb.co.com/j9zHKbzW/landing.png">
</body>
</html>
    `;

    return new Response(html, {
      headers: { "content-type": "text/html" }
    });

  }
};


