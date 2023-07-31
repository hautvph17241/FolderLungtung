describe("demo chuyen khoa check", () => {

    beforeEach("Open web", async () => {
        await browser.url("https://saucedemo.com/");
        await browser.maximizeWindow();
    })
    it("demo with valid data", async () => {


        const inputUsername = $('[name="user-name"]');
        const inputPassword = $('[name="password"]');
        const btnLoggin = $('[name="login-button"]');

        await inputUsername.setValue('standard_user');
        await inputPassword.setValue('secret_sauce');
        btnLoggin.click();


        const logginIsSucces = $(".title");
        await expect(logginIsSucces).toBeDisplayed();
    })
    it("this is get,set,add,clear with input", async () => {
        const inputUsername = $('[id ="user-name"]');
        const inputPassword = $('[id ="password"]');

        await inputUsername.setValue("concabietnoi");
        console.log("text in inputUsername now: ", await inputUsername.getValue());

        await inputUsername.addValue("chaotho");
        console.log("text in inputUsername now: ", await inputUsername.getValue());

        await inputPassword.setValue("secret_sauce");

        const Title_HomePage = $('[id="error-message-container error"]').isDisplayed();

        if (Title_HomePage) {
            await inputUsername.clearValue();
            console.log("text in inputUsername now: ", await inputUsername.getValue());

            await inputUsername.setValue("standard_user");
            console.log("text in inputUsername now: ", await inputUsername.getValue());
        }
        return


    })

    it.only('should fetch element text', async () => {
        const h4 = $("#login_credentials >h4");
        const headerText = await h4.getText();
        console.log(headerText);

        await expect(h4).toHaveText("Chu User xuat hien: ");

        const loginAreaElement = $("//*[@id=login_credentials]/h4");

        const logginClassValue = await loginAreaElement.getAttribute("class");

        console.log("day la logginvalue: ", logginClassValue);

        await expect(loginAreaElement).toHaveAttribute("class", "login_credentials");

    })
})