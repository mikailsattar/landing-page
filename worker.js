export default {
  async fetch(request) {
    return new Response(".", {
      headers: { "content-type": "text/html" },
    });
  },
};