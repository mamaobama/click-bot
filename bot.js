console.log("Bot started:", new Date());

fetch("YOUR_RENEW_API_URL_HERE", {
  method: "POST", // or GET depending on site
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_TOKEN"
  }
})
.then(res => res.text())
.then(data => {
  console.log("Renew result:", data);
})
.catch(err => {
  console.log("Error:", err);
});
