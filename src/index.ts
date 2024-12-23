import { Builder, Browser, By, Key, until } from "selenium-webdriver";
import { Options} from "selenium-webdriver/chrome";
async function main() {
  const options = new Options({});
  options.addArguments("--disable-blink-features=AutomationControlled ")
  // options.setUserPreferences({  
  //   "hardware.audio_capture_enabled": true,  
  //   "hardware.video_capture_enabled": true,  
  //   "hardware.audio_capture_allowed_urls": ["https://meet.google.com/wfq-ywbe-joi"],  
  //   "hardware.video_capture_allowed_urls": ["https://meet.google.com/wfq-ywbe-joi"]  
  // });  
  options.addArguments("--use-fake-ui-for-media-stream");
  let driver = await new Builder().forBrowser(Browser.CHROME).setChromeOptions(options).build();

  try {
    await driver.get("https://meet.google.com/wfq-ywbe-joi");
    // await driver.findElement(By.id("c5")).sendKeys("value","your value")
    // await driver.wait(
    //   until.titleIs("hklkhjlh - Google Search"),
    //   1000000
    // );

    await driver.sleep(3000);
    const popButton = await driver.wait(until.elementLocated(By.xpath('//span[contains(text(),"Got it")]')),1000);
    popButton.click()
    const nameInput = await driver.wait(until.elementLocated(By.id('c5')),10000);
    await nameInput.clear();
    await nameInput.click()
    await nameInput.sendKeys('value',"Metting bot")
    const buttonInput = await driver.wait(until.elementLocated(By.xpath('//span[contains(text(),"Ask to join") or contains(text(),"Join"))]')),1000);
    buttonInput.click()
    const nameInput2 = await driver.wait(until.elementLocated(By.id('c55433')),10000);

  } finally {
    await driver.quit();
  }
}

main();
