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
import org.openqa.selenium.support.ui.Select;

import static org.junit.Assert.assertTrue;

public class Register {
    private WebDriver driver;


    @Before
    public void setUp() {
        System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver.exe");
        driver = new ChromeDriver();
    }

    @Given("^I navigate to form website$")
    public void iNavigateToFormWebsite() {
        driver.get("https://katalon-test.s3.amazonaws.com/demo-aut/dist/html/form.html");
    }

    @When("^I fill first name \"([^\"]*)\"$")
    public void iFillFirstName(String firstName) {
        driver.findElement(By.id("first-name")).sendKeys(firstName);
    }

    @And("^I fill last name \"([^\"]*)\"$")
    public void iFillLastName(String lastName) {
        driver.findElement(By.id("last-name")).sendKeys(lastName);

    }

    @And("^I choose gender$")
    public void iChooseGender() {

        driver.findElements(By.className("radio-inline")).get(1).click();
    }

    @And("^I fill date of birth \"([^\"]*)\"$")
    public void iFillDateOfBirth(String date) {
        driver.findElement(By.id("dob")).sendKeys(date);

    }

    @And("^I fill address \"([^\"]*)\"$")
    public void iFillAddress(String adres) {
        driver.findElement(By.id("address")).sendKeys(adres);
    }

    @And("^I type email \"([^\"]*)\"$")
    public void iTypeEmail(String email) {
        driver.findElement(By.id("email")).sendKeys(email);
    }

    @And("^I type password \"([^\"]*)\"$")
    public void iTypePassword(String password) {
        driver.findElement(By.id("password")).sendKeys(password);
    }

    @And("^I type company \"([^\"]*)\"$")
    public void iTypeCompany(String company) {
        driver.findElement(By.id("company")).sendKeys(company);
    }

    @And("^I choose role$")
    public void iChooseRole() {
        Select role = new Select(driver.findElement(By.id("role")));
        role.selectByIndex(1);
    }

    @And("^I choose job expectation$")
    public void iChooseJobExpectation() {
        Select expextations = new Select(driver.findElement(By.id("expectation")));
        expextations.selectByIndex(2);
//        expextations.selectByIndex(4);
    }

    @And("^I choose ways of development$")
    public void iChooseWaysOfDevelopment() {
        driver.findElement(By.xpath("//*[@id=\"infoForm\"]/div[11]/div/div[4]/label")).click();
    }

    @And("^I type comment \"([^\"]*)\"$")
    public void iTypeComment(String commment) {
        driver.findElement(By.id("comment")).sendKeys(commment);
    }

    @And("^I press submit$")
    public void iPressSubmit() {
        driver.findElement(By.id("submit")).click();
    }

    @Then("^I can see success message$")
    public void iCanSeeSuccessMessage() {
        WebElement submitt = driver.findElement(By.id("submit-msg"));
        assertTrue(submitt.getText().contains("Successfully submitted!"));
    }

    @After
    public void tearDown() {
        driver.quit();
    }

}
