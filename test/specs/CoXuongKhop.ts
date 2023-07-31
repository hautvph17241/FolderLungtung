import DanhSachChuyenKhoa from "../pageobjects/DanhSachChuyenKhoa.js";
import dropdownPage from "../pageobjects/dropdown.page.js";
import headerChuyenKhoa from "../pageobjects/headerChuyenKhoa.js";

describe('Kiem tra trang chuyen khoa co xuong khop', () => {

    beforeEach('Check vào trang Cơ Xương Khớp', async () => {
        await browser.url('https://bookingcare.vn/#chuyenkhoa');
        browser.maximizeWindow();
        await DanhSachChuyenKhoa.startChuyenKhoaCoXuongKhop();
        const tenChuyenKhoa = await DanhSachChuyenKhoa.titleChuyenKhoa.getText()
        await expect(DanhSachChuyenKhoa.titleChuyenKhoa).toHaveText("Cơ Xương Khớp");
    })
    // afterEach('Check header thanh ChuyenKhoa', async () => {
    //     const hrefExpected = 'https://bookingcare.vn/#chuyenkhoa';
    //     await headerChuyenKhoa.startButtonBack();
    //     const hrefActrual = await browser.getUrl();
    //     if (hrefExpected === hrefActrual) {
    //         console.log('Đã back về đúng trang')
    //     } else {
    //         console.log('Chưa back về đúng trang')
    //     }
    // })

    it('Kiem tra button hotro', async () => {
        await headerChuyenKhoa.startButtonHoTro();
        await expect(headerChuyenKhoa.titileHoTro).toHaveText("Hãy bấm vào nút mục chat bên dưới đây để nhận được hỗ trợ tự động từ BookingCare Chatbot");
        await browser.pause(1000)
    })
    it('Kiem tra đóng mở menu Navbar', async () => {
        const button = await DanhSachChuyenKhoa.openNavbar
        const navbar = await DanhSachChuyenKhoa.navbarElement
        const isNavbarDisplayed: boolean = await navbar.isDisplayed();
        const isOpen: boolean = await button.isExisting();
        if (isOpen) {
            await button.click();
            const isNavbarOpen: boolean = await navbar.isDisplayed();
            if (isNavbarOpen) {
                console.log('Navbar đã mo')
                await browser.pause(1000);

                // Click vào một điểm bất kỳ bên ngoài màn hình (ví dụ: body)
                await browser.$('body').click();

                // Kiểm tra lại sự hiển thị của navbar sau khi click bên ngoài màn hình
                const isNavbarClosed: boolean = await navbar.isDisplayed();

                if (!isNavbarClosed) {
                    // Navbar đã đóng lại
                    console.log('Navbar đã đóng lại');
                } else {
                    // Navbar không đóng lại
                    console.log('Navbar không đóng lại');
                }
            } else {
                console.log('Navbar khong mo')
            }
        } else {
            console.log('Menu button khong tontai')
        }
    })
    it('Kiem tra đường dẫn menu navbar', async () => {
        const nameChuyenKhoa = await DanhSachChuyenKhoa.nameChuyenKhoa.getText();
        const linkExpectedNavbar = [
            '/',
            '/cam-nang',
            '/hop-tac',
            '/suc-khoe-doanh-nghiep-sv10',
            '/goi-chuyen-doi-so',
            'https://tuyendung.bookingcare.vn',
            '/danh-cho-benh-nhan?rel=home',
            '/danh-cho-bac-si',
            '/vai-tro/bac-si-uy-tin-p9',
            '/page/lien-he-p2',
            '/benh-nhan-thuong-hoi',
            '/page/dieu-khoan-su-dung-p7',
            '/thong-tin/quy-trinh-ho-tro-giai-quyet-khieu-nai-p13',
            '/site/quyche',
            '/tk/dangnhap',
        ]
        const linkExpectedIcon = [
            'https://www.facebook.com/bookingcare',
            'https://www.youtube.com/channel/UC9l2RhMEPCIgDyGCH8ijtPQ'
        ]
        const element1 = $("//ul[@class='trinhdon-nhom trinhdon-chinh']")
        const element2 = $("//div[@class='trinhdon-mxh an-ud']")
        const elementNavbar = await DanhSachChuyenKhoa.hrefMenuNavbar.$$('li a')
        const elementNavbarIcon = await DanhSachChuyenKhoa.hrefMenunIcon.$$('li a');
        let checkHref = true;
        for (let i = 0; i < elementNavbar.length; i++) {
            const linkUrl = await elementNavbar[i].getAttribute('href');
            const hrefExpected = linkExpectedNavbar[i];
            if (linkUrl !== hrefExpected) {
                checkHref = false;
                console.log(`Chuyên khoa  ${nameChuyenKhoa} Đường dẫn navbar ${i + 1}không trùng với mong muốn . Mong muốn : ${hrefExpected}, Thực tế: ${linkUrl}`)
            }
        }
        if (checkHref) {
            console.log(`Đường dẫn các menu navbar của chuyên khoa ${nameChuyenKhoa} chính xác r`)
        }
        checkHref = true
        for (let i = 0; i < elementNavbarIcon.length; i++) {
            const linkUrl = await elementNavbarIcon[i].getAttribute('href');
            const hrefExpected = linkExpectedIcon[i];
            if (linkUrl !== hrefExpected) {
                console.log(`Chuyên khoa  ${nameChuyenKhoa} Đường dẫn navbar ${i + 1}không trùng với mong muốn . Mong muốn : ${hrefExpected}, Thực tế: ${linkUrl}`)
            }
        }
        if (checkHref) {
            console.log(`Đường dẫn các icon menu navbar của chuyên khoa ${nameChuyenKhoa} chính xác r`)
        }
    })
    // it('Kiem tra đọc thêm ẩn bớt', async () => {
    //     const clickDocThem = browser.$("(//a[contains(text(),'Đọc thêm')])[1]");

    //     const thongtinHienThem = browser.$("//div[@class='chuyenkhoa-dautrang-nen luoi-tai']//ul[2]");
    //     if (thongtinHienThem.isDisplayed()) {
    //         console.log('abc');
    //     }
    // })
    it('Kiem tra dropDownList', async () => {

        const optionExpected = [
            '0', '1', '79'
        ];
        const optionActrual = null;
        const optionDropDown = await dropdownPage.skillDropDown.$$('option')
        console.log(optionDropDown)
        await dropdownPage.startDropdown();
        const tenChuyenKhoa = await DanhSachChuyenKhoa.titleChuyenKhoa.getText()
        for (let i = 0; i < optionDropDown.length; i++) {
            const optionActrual = await optionDropDown[i].getAttribute('value');
            const optionExpecteds = optionExpected[i];
            if (optionExpecteds === optionActrual) {
                console.log(`dropdown chuyên khoa ${tenChuyenKhoa} hiện thị đủ tỉnh thành`)
            }
            else {
                console.log(`dropdown chuyên khoa ${tenChuyenKhoa} thiếu thành phần`)
            }


        }
    })
    it.only('Kiem tra dropDowList HaNoi', async () => {
        let elementSelect = await browser.$("//select[@id='lk_tinhthanh']");
        await elementSelect.click();
        let optionSelect = await elementSelect.$$("option");
        for (var i = 0; i < optionSelect.length; i++) {
            const text = await optionSelect[i].getText();
            const optionHaNoi = elementSelect.selectByIndex(1);
            await browser.pause(10000)
            if (text === "Hà Nội") {
                let elementDanhSachBacSi = await browser.$("//div[@id='lkbs']");
                let elementThanhPhanBacSi = await elementDanhSachBacSi.$$('div[data-dichvu="khám"]')
                console.log(elementThanhPhanBacSi.length)
                for (var j = 0; j < elementThanhPhanBacSi.length; j++) {
                    console.log(elementThanhPhanBacSi.length);
                }
                break
            } else {
                console.log('đang ở đâu đó')
            }
        }

        // await dropdownPage.startDropdown();
        // await dropdownPage.skillDropDown.selectByIndex(1);
        // const dsBacsi = await $$('#lkbs>div');
        // const elementABC = $('.mot-bs-thongtin');
        // elementABC.isDisplayed();
        // await browser.pause(3000)
        // console.log(dsBacsi.length)
        // const elementCuoitrang = await $("//div[@class='lichkham-gioithieu']");
        // elementCuoitrang.click();
        // // console.log(listDsBacSi.length)
        // for (let i = 0; i < dsBacsi.length; i++) {
        //     console.log(dsBacsi.length)
        //     const element = dsBacsi[i];
        //     const classValue = await element.getAttribute('class');
        //     if (classValue.includes('.mot-bs-diadiem')) {
        //         const elementNameBacSi = await element.$('.mot-bs-ten')
        //         const nameBacSi = elementNameBacSi.getText();
        //         const textDiaDiem = await element.getText();
        //         if (textDiaDiem.includes('Hà Nội')) {
        //             console.log('Tên bác sĩ thuộc Hà Nội: ', nameBacSi)
        //         } else {
        //             console.log('Tên bác sĩ không thuộc hà nội:', nameBacSi)
        //         }
        //     }
        // }
    })
    it('Kiem tra hinh anh bac si', async () => {
        await browser.pause(5000)
        const dsBacsiDiv = await browser.$('.ds-bacsi');
        // Lấy tất cả các thẻ div con bên trong đối tượng sBacsiDiv
        const divCon = await dsBacsiDiv.$$('div')
        console.log(divCon.length)
    })

    it('Kiem tra mô tả của trang chuyên khoa', async () => {
        const moTaChuyenKhoa = await DanhSachChuyenKhoa.descripstionChuyenKhoa.getText();
        const tenChuyenKhoa = await DanhSachChuyenKhoa.titleChuyenKhoa.getText()
        if (moTaChuyenKhoa.length !== 0) {
            console.log('Chuyên khoa có mô tả');
        } else {
            console.log(`chuyên khoa "${tenChuyenKhoa}" chưa có mô tả tiêu đề`)
        }
    })
    it('Kiểm tra nút đọc thêm', async () => {
        const contentInitial = await DanhSachChuyenKhoa.contentChuyenKhoa.getText();
        console.log(await contentInitial)
        await DanhSachChuyenKhoa.clickButtonDocThem();
        await browser.pause(1000);
        const updateContent = await DanhSachChuyenKhoa.contentChuyenKhoa.getText();
        console.log(await updateContent)
        expect(updateContent).not.toEqual(contentInitial);
    })
    it('Kiểm tra nút ẩn bớt', async () => {
        await DanhSachChuyenKhoa.clickButtonDocThem;
        const initContent = await DanhSachChuyenKhoa.contentChuyenKhoa.getText();
        console.log(await initContent)
        await DanhSachChuyenKhoa.clickButtonAnBot;
        await browser.pause(1000);
        const hidentContent = await DanhSachChuyenKhoa.contentChuyenKhoa.getText();
        console.log(await hidentContent)

    })
    it('check 1', async () => {
        const initHeight = await DanhSachChuyenKhoa.contentChuyenKhoa.getCSSProperty('max-height');
        console.log(initHeight.value)
        await DanhSachChuyenKhoa.clickButtonDocThem;
        await browser.pause(1000);
        const updateHeight = await DanhSachChuyenKhoa.contentChuyenKhoa.getCSSProperty('max-height');
        console.log(updateHeight.value)
        if (updateHeight.value != initHeight.value) {
            console.log('check hoàn thành nút đọc thêm')
        } else {
            console.log('lỗi')
        }
    }
    )

})