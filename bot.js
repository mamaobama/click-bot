const puppeteer = require("puppeteer");

console.log("Bot started:", new Date());

async function run() {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

  const page = await browser.newPage();

  await page.goto("YOUR_WEBSITE_URL");

  await page.click("YOUR_BUTTON_SELECTOR");

  console.log("Button clicked:", new Date());

  await browser.close();
}

run();
