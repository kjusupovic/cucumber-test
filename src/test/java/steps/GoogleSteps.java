package steps;

import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import static org.junit.Assert.assertTrue;

public class GoogleSteps {
    private WebDriver driver;

//    @Before
//    public void setUp() {
//        System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver.exe");
//        driver = new ChromeDriver();
//    }


    @Given("^I navigate to Google website$")
    public void iNavigateToGoogleWebsite() {
        driver.get("https://www.google.com/");
    }

    @When("^I type Selenium in the searchbar$")
    public void iTypeSeleniumInTheSearchbar() {
        driver.findElement(By.xpath("//*[@id=\"tsf\"]/div[2]/div[1]/div[1]/div/div[2]/input")).sendKeys("Selenium");

    }

    @And("^I press enter$")
    public void iPressEnter() {
        driver.findElement(By.xpath("//*[@id=\"tsf\"]/div[2]/div[1]/div[1]/div/div[2]/input")).submit();
    }

    @Then("^I can see the first result contains the word Selenium$")
    public void iCanSeeTheFirstResultContainsTheWordSelenium() {
        WebElement searchResult = driver.findElements(By.className("g")).get(0);
        assertTrue(searchResult.getText().contains("Selenium"));

    }

    @After
    public void tearDown(){
        driver.quit();

    }

    @When("^I type \"([^\"]*)\" in the searchbar$")
    public void iTypeInTheSearchbar(String phrase) {
        driver.findElement(By.xpath("//*[@id=\"tsf\"]/div[2]/div[1]/div[1]/div/div[2]/input")).sendKeys(phrase);
    }

    @Then("^I can see the first result contains the word \"([^\"]*)\"$")
    public void iCanSeeTheFirstResultContainsTheWord(String result) {
        WebElement searchResult = driver.findElements(By.className("g")).get(0);
        assertTrue(searchResult.getText().contains(result));
    }
}
