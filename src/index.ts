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
    
    // await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);
    await driver.wait(
      until.titleIs("hklkhjlh - Google Search"),
      10000
    );
  } finally {
    await driver.quit();
  }
}

main();
