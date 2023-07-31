import SlackReporter, { ChatPostMessageArguments } from "@moroo/wdio-slack-reporter";
import logger from "../logging/Logger";


describe("PageHomeBookingCare", () => {
    before("Open web", async () => {
        await browser.url("https://bookingcare.vn");
        await browser.maximizeWindow();
    });
    beforeEach("Open web", async () => {


        const h1Text = $('/html/body/main/div[1]/div/div[1]/div/h1');
        const timeout = 2000;
        try {
            h1Text.waitForDisplayed({ timeout });
            console.log("d: ", await h1Text.getText());

        } catch (error) {
            console.error("Không thấy phần tử hiển thị");
            return
        }
    })
    it("check URL href 4 header", async () => {
        const menu = $('.menu-dautrang');
        const linkElement = await menu.$$('li a');
        const linkMenuDauTrang = [
            '/#chuyenkhoa',
            '/co-so-y-te/tat-ca',
            '/#bacsi',
            '/dich-vu-y-te/kham-tong-quat'
        ];
        for (let i = 0; i < linkElement.length; i++) {
            const LinkUrl = await linkElement[i].getAttribute('href');
            const expectedURL = linkMenuDauTrang[i];
            if (LinkUrl === expectedURL) {
                console.log(`Link ${i + 1} has correct URL: ${LinkUrl}`);
            } else {
                console.error("\x1b[41m", `Link ${i + 1} has incorrect URL. Expected: ${expectedURL}, Actual: ${LinkUrl}`);
            }
        }
    })
    it("check URl href icon logo, ho tro , so điện thoại", async () => {
        const icon = $('.cot-nho-7.cot-9');
        const elementIcon = await icon.$$('a img');
        const hrefIconExpected = null;
        const hotrophone = $('.cot-nho-5.cot-3.chu-phai');
        const elementHotroPhone = await hotrophone.$$('div a');
        const hrefExpected = [
            '/hotro',
            'tel:02473012468'
        ]
        for (let i = 0; i < elementIcon.length; i++) {
            const actualURLIcon = await elementIcon[i].getAttribute('href');
            const expectedIcon = hrefIconExpected;
            if (actualURLIcon === expectedIcon) {
                console.log('Link Click Icon succes fully');
            } else {
                console.log("\x1b[41m", `link ${i + 1} has incorrect URL. Expected: ${expectedIcon}, Actual: ${actualURLIcon}`)
            }
        } for (let i = 0; i < elementHotroPhone.length; i++) {
            const LinkUrlActrual = await elementHotroPhone[i].getAttribute('href');
            const expectedHotroPhone = hrefExpected[i];
            if (LinkUrlActrual === expectedHotroPhone) {
                console.log('Link Click HO TRO, PHONE succes fully');
            } else {
                console.log("\x1b[41m", `link ${i + 1} has incorrect URL. Expected: ${expectedHotroPhone}, Actual: ${expectedHotroPhone}`)
            }
        }

    })
    it("Check cac phan tu hien thi ở placholder của thanh search input", async () => {
        const placeholders = [
            'Tìm chuyên khoa',
            'Tìm bệnh viện',
            'Tìm phòng khám',
            'Tìm bác sĩ',
            'Tìm gói khám tổng quát',
            'Tìm gói xét nghiệm',
            'Tìm gói phẫu thuật',
            'Tìm lý do khám',
        ];
        // Chờ đến khi thanh tìm kiếm hiển thị
        const searchInput = await browser.$('#timkiem_chung');
        await searchInput.waitForDisplayed();

        // Lấy giá trị placeholder của ô tìm kiếm
        const placeholder = await searchInput.getAttribute('placeholder');

        // Kiểm tra xem giá trị placeholder có đúng hay không
        if (placeholders.includes(placeholder)) {
            console.log('Các trường hợp xuất hiện placholder đúng: ')
            placeholders.forEach((item) => {
                if (item === placeholder) {
                    console.log('-', item, 'Đúng');
                } else {
                    console.log('-', item)
                }
            })
        } else {

            console.log('Placeholder chưa hiển thị hết');

        }
    })
    it("Check các chuỗi đầu  của thanh tìm kiếm", async () => {
        try {
            const eInputSearch = $('#timkiem_chung');
            await eInputSearch.clearValue();
            const testcaseSearchInvalid = [
                'bac si',
                'bác sĩ',
                'BÁC SĨ',
                'Bác Sĩ',
                'Bệnh viện',
                'Phòng khám',
                'gói khám',
                'GÓI KHÁM',
                'goi kham',
                'Chợ Rẫy',
                'cho ray',
                'CHỢ RẪY',
                'Cơ xương khớp',
                'co xuong ',
                'CƠ XƯƠNG KHỚP',
                'KHÁM BỆNH CƠ XƯƠNG KHỚP',
                'khám bệnh cơ xương ',
                'kham benh co'
            ];
            for (const keywords of testcaseSearchInvalid) {
                await eInputSearch.setValue(keywords);
                await browser.pause(1000);
                const searchKetQua = await browser.$('#timkiem_chung_ketqua');
                await searchKetQua.waitForDisplayed();
                const isDisplayed = await searchKetQua.isDisplayed();
                if (isDisplayed) {
                    console.log(`Kết quả tìm kiếm cho chuỗi đầu từ khóa "${keywords}" được hiển thị`);
                } else {
                    console.log(`Không có kết quả cho tìm kiếm cho từ khóa chuỗi đầu "${keywords}" được hiển thị`);
                }
            }
        } catch (error) {
            console.log("khong tim thay ket qua tu khoa chuỗi đầu ");
        }
    })
    it("Check các chuỗi đầu  của thanh tìm kiếm", async () => {
        try {
            const eInputSearch = $('#timkiem_chung');
            await eInputSearch.clearValue();
            const testcaseSearchInvalid = [
                'từu xaa VideooCare',
                'TỪU XAA VIDEOOCARE',
                'tuu xaa videoocare',
                'TUU XAA VIDEOOCARE',
                'khám: BookingCare',
                'kham: Bookingcare',
                'KHÁM: BOOKINGCARE',
                'KHAM: BOOKINGCARE',
                'do khám Bookinggcaree',
                'do kham bookinggcaree',
                'DO KHAM BOOKINGGCAREE',
                'DO KHÁM BOOKINGGCAREE'
            ];
            for (const keywords of testcaseSearchInvalid) {
                await eInputSearch.setValue(keywords);
                await browser.pause(1000);
                const searchKetQua = await browser.$('#timkiem_chung_ketqua');
                await searchKetQua.waitForDisplayed();
                const isDisplayed = await searchKetQua.isDisplayed();
                if (isDisplayed) {
                    console.log(`Kết quả tìm kiếm cho chuỗi cuối từ khóa "${keywords}" được hiển thị`);
                } else {
                    console.log(`Không có kết quả tìm kiếm cho chuỗi cuối  từ khóa "${keywords}" được hiển thị`);
                }
            }
        } catch (error) {
            console.log("khong tim thay ket qua tu khoa  chuỗi cuối");
        }
    })
    it("Check keywor đầy đủ  của thanh tìm kiếm", async () => {
        try {
            const eInputSearch = $('#timkiem_chung');
            await eInputSearch.clearValue();
            const testcaseSearchInvalid = [
                '[Thử nghiệm] Bác sĩ khám từu xaa VideooCare',
                '[thu nghiem] bac si kham tuu xaa VideooCare',
                '[THỬ NGHIỆM] BÁC SĨ KHÁM TỪU XAA VIDEOOCARE',
                '[THU NGHIEM] BAC SI KHAM TUU XAA VIDEOOCARE',
                'Nơi.khám: BookingCare',
                'noi.kham: bookingcare',
                'NOI.KHAM: BOOKINGCARE',
                'NOI.KHAM: BOOKINGCARE',
                '[Thử nghiệm]Lý do khám Bookinggcaree',
                '[thu nghiem]ly do kham bookinggcaree',
                '[THU NGHIEM]LY DO KHAM BOOKINGGCARRE',
                '[thu nghiem]ly do kham bookinggcarre'
            ];
            for (const keywords of testcaseSearchInvalid) {
                await eInputSearch.setValue(keywords);
                await browser.pause(1000);
                const searchKetQua = await browser.$('#timkiem_chung_ketqua');
                await searchKetQua.waitForDisplayed();
                const isDisplayed = await searchKetQua.isDisplayed();
                if (isDisplayed) {
                    console.log(`Kết quả tìm kiếm cho chuỗi  từ khóa "${keywords}" được hiển thị`);
                } else {
                    console.log(`Không có kết quả tìm kiếm cho chuỗi   từ khóa "${keywords}" được hiển thị`);
                }
            }
        } catch (error) {
            console.log("khong tim thay ket qua tu khoa  chuỗi ");
        }
    })
    it("Check click 2 button download app", async () => {
        const elementButtonApp = await browser.$('.tai-ungdung.app-link.an-ud')
        const iamgeButton = await elementButtonApp.$$('a')
        const linkDownApp = [
            '/app/android',
            '/app/ios'
        ];
        for (let i = 0; i < iamgeButton.length; i++) {
            const LinkUrl = await iamgeButton[i].getAttribute('href');
            const expectedURL = linkDownApp[i];
            if (LinkUrl === expectedURL) {
                console.log(`Click button app  ${i + 1} đã đúng sang đường link: ${LinkUrl}`);
            } else {
                console.error(`Click  ${i + 1} đã sai đường link. Thực tế: ${expectedURL}, Actual: ${LinkUrl}`);
            }
        }

    })
    it("Check click các 10 dịch vụ xem có đến đúng trang hay không", async () => {
        try {
            // Chờ đến khi div "luachon" hiển thị
            const luachonDiv = await browser.$('.luachon');
            await luachonDiv.waitForDisplayed();

            // Lấy tất cả các button trong div "luachon"
            const buttons = await luachonDiv.$$('li a');

            // Lặp qua từng button trong mảng
            for (let i = 1; i < buttons.length; i++) {
                const button = buttons[i];
                // Chờ đến khi button hiển thị
                await button.waitForDisplayed();

                // Lấy thông tin URL trang đích từ thuộc tính "href" của button
                const targetUrl = await button.getAttribute('href');

                // Kiểm tra xem button có hiển thị và có được nhấp vào hay không
                if (button.isDisplayed() && button.isEnabled()) {
                    console.log(`Button ${targetUrl} có thể nhấp được`);

                    // Lấy href của button trước khi nhấp vào
                    const previousUrl = await browser.getUrl();

                    // Nhấp vào button và chờ đến khi URL thay đổi
                    await button.click();
                    await browser.waitUntil(async () => {
                        const currentUrl = await browser.getUrl();
                        return currentUrl !== previousUrl;
                    });

                    // Kiểm tra xem đã đến trang đích mong muốn hay không
                    const currentUrl = await browser.getUrl();
                    if (currentUrl === targetUrl) {
                        console.log(`Đã đến trang đích của button ${targetUrl}`);
                    } else {
                        console.log(`Không đến được trang đích của button ${targetUrl} sau khi nhấp vào`);
                    }

                    // Quay lại trang trước
                    await browser.back();

                    // Tạm dừng một khoảng thời gian trước khi làm mới trình duyệt
                    await browser.pause(1000);

                    // Làm mới trình duyệt
                    await browser.refresh();
                } else {
                    console.log(`Button ${targetUrl} không thể nhấp được`);
                }
            }
        } catch (error) {
            console.error('Error:', error);
        }
    })
    it("check carolsel tu dong chuyen slide", async () => {
        const carousel = $('.owl-stage');

        // Lấy slide hiện tại
        const currentSlide = await carousel.$('.owl-item.cloned');
        const slides = await carousel.$$('a');
        const currentSlideIndex = slides.indexOf(currentSlide);

        // Đợi một khoảng thời gian để Carousel tự động chuyển slide
        browser.pause(5000);
        // Lấy slide sau khi Carousel tự động chuyển
        const nextSlide = await carousel.$('.owl-item.active');
        const nextSlideIndex = slides.indexOf(nextSlide);

        // In ra thông tin slide hiện tại và slide trước đó
        console.log(`Current Slide: ${currentSlideIndex}`);
        console.log(`Next Slide: ${nextSlideIndex}`);

        // So sánh slide hiện tại và slide sau khi tự động chuyển
        expect(currentSlideIndex).not.toBe(-1);
        expect(nextSlideIndex).not.toBe(-1);
    })
    it("check click next slide chuyenkhoa pho bien", async () => {
        try {
            let previousSlideCount = 0;
            const chuyenkhoaSection = await browser.$('.slick-track');
            await chuyenkhoaSection.waitForDisplayed();

            // Lấy tất cả các thẻ slide trong phần "Chuyên khoa phổ biến"
            const slides = await chuyenkhoaSection.$$('a');

            // Đếm số lượng slide
            const slideCount = slides.length;
            console.log(`Số lượng slide: ${slideCount}`);

            // Lặp qua từng nhóm 4 slide và click vào nút "Next Slide"
            for (let i = 0; i < slideCount - 0; i += 4) {
                // Chờ đến khi nút "Next Slide" hiển thị
                const nextButton = await browser.$('.slick-next.slick-arrow');
                await nextButton.waitForDisplayed();
                await nextButton.click();
                // Chờ một khoảng thời gian ngắn để slide mới hiển thị hoàn toàn
                await browser.pause(500);

            }

            // Kiểm tra xem đã click next qua tất cả các slide hay không
            const nextButton = await browser.$('.slick-next.slick-arrow');
            const isNextDisabled = await nextButton.getAttribute('aria-disabled');
            if (isNextDisabled === 'true') {

                console.log('Đã click qua tất cả các slide bằng nút "Next Slide" của Chuyên khoa phổ biến');
                const prevButtons = await browser.$('.slick-prev.slick-arrow');
                await prevButtons.click();
                await browser.pause(500);
                console.log('Đã click prev Chuyên Khoa Phổ biến')
            } else {
                console.log('Nút "Next Slide" không click qua tất cả các slide Chuyên Khoa Phổ Biến');
            }
        } catch (error) {
            console.error('Lỗi:', error);
        }
    })
    it("Kiểm tra carousel cho khám từ xa trên trang Bookingcare", async () => {
        try {
            // Đợi phần carousel "Bác sĩ từ xa qua Video" hiển thị
            const carousel = await browser.$('/html/body/main/div[4]/div/div/div[2]/div/div');
            await carousel.waitForDisplayed();

            // Lặp qua từng slide và kiểm tra sự hiển thị sau khi click
            // Lặp qua từng slide và kiểm tra sự hiển thị sau khi click
            let clickCount = 0; // Số lần đã click

            while (true) {
                // Lấy tất cả các slide trong carousel
                const slides = await carousel.$$('a');


                // Lấy số lượng slide mới hiển thị
                const newSlides = [];
                for (const slide of slides) {
                    const classes = await slide.getAttribute('class');
                    if (
                        classes.includes('khamtuxa') &&
                        classes.includes('slick-slide') &&
                        classes.includes('slick-active')
                    ) {
                        newSlides.push(slide);
                    }
                }

                // Kiểm tra số lượng slide mới và kiểm tra điều kiện dừng
                if (newSlides.length < 4) {
                    // Điều kiện dừng: số lượng slide mới không đủ để tạo thành nhóm 4 slide
                    break;
                }

                // Thực hiện click vào nút "Next Slide"
                const nextButton = await carousel.$('/html/body/main/div[4]/div/div/div[2]/button[2]');
                await nextButton.click();

                // Đợi cho slide mới hiển thị hoàn toàn
                await browser.pause(500);

                // Tăng số lần click
                clickCount++;
            }

            console.log(`Số lần click để hiển thị tất cả các slide mới: ${clickCount}`);
        } catch (error) {
            console.error('Lỗi:', error);

        }
    })



})