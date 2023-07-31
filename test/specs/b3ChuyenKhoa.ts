describe('Tesst tinh anng', () => {
    beforeEach('check it', async () => {
        await browser.url('https://dev.bookingcare.vn/co-xuong-khop-s1') // y vậy, cần đặt 1 file properties để chứa các biến kiểu vầy
        browser.maximizeWindow();
    });
    it('check abc', async () => {
        let naturalWdith = await browser.execute(() => {
            return document.querySelector("img[alt='Bác sĩ Chuyên khoa I Bùi Thanh Tùng']");
        })
        console.log(naturalWdith)
        //browser.executeScript("return document.querySelector("img[alt='Bác sĩ Chuyên khoa I Bùi Thanh Tùng']").naturalWidth") 
    })
    it('check image null', async () => {

        let imagebrowtf = await browser.$("(//img[@alt='Bác sĩ Chuyên khoa I Bùi Thanh Tùng'])[1]");
        let naturalHeight = await imagebrowtf.getSize('height');


        // let lengthImage = await browser.$(imagebrowtf.naturalWidth())
        // console.log(lengImage)
        // imagebrowtf.naturalWidth();
        await imagebrowtf.waitForDisplayed();
        const naturalWidth =
            await browser.execute("return arguments[0].naturalWidth();", imagebrowtf);
    });



    console.log(naturalWidth)
    // if (naturalHeight === 0 || naturalWidth === 0) {
    //     console.log('ảnh sai')
    // } else if (naturalHeight === 1 || naturalWidth === 1) {
    //     console.log('ảnh trống')
    // } else {
    //     console.log('ảnh oke')
    // }
})
