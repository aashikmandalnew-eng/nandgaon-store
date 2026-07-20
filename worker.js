export default {
  async fetch(request) {
    return new Response("NAND GAON SMP STORE ONLINE", {
      headers: {
        "content-type": "text/plain"
      }
    });
  }
};
