export default {
  async fetch(request) {
    const url = new URL(request.url)

    // Redirect www → root domain
    if (url.hostname === "www.mikailsattar.com") {
      url.hostname = "mikailsattar.com"
      return Response.redirect(url.toString(), 301)
    }

    // Redirect http → https
    if (url.protocol === "http:") {
      url.protocol = "https:"
      return Response.redirect(url.toString(), 301)
    }
  
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
      headers: {
        "content-type": "text/html;charset=UTF-8",
        "cache-control": "public, max-age=3600"
      }
  })
}
}


