describe('Khám chuyên khoa', () => {
    before('vào thành công trang chuyên khoa', async () => {
        await browser.url("https://bookingcare.vn");
        await browser.maximizeWindow();
    })
    it('Đếm số lượng chuyen khoa hiện tjai đang hiển thị', async () => {
        const elementChuyenKhoa = $('.chuyenkhoa-ds');
        // Xác định tất cả các chuyên khoa trên trang
        const chuyenKhoaElements = await elementChuyenKhoa.$$('ul li');
        const client = $('123');
        // Duyệt qua từng chuyên khoa
        for (const chuyenKhoaElement of chuyenKhoaElements) {
            // Click vào chuyên khoa
            await chuyenKhoaElement.click();

            // Kéo xuống cuối trang để tải tất cả thông tin bác sĩ
            await chuyenKhoaElement.execute(() => {
                window.scrollTo(0, document.body.scrollHeight);
            });

            // Chờ một khoảng thời gian để đảm bảo trang tải hoàn toàn
            await chuyenKhoaElement.pause(2000);

            // Kiểm tra hình ảnh mô tả có tồn tại
            const hinhAnhMieuTaElement = await chuyenKhoaElement.$('//*[@id="lkbs"]/div[1]/div[1]/div[1]/a');
            const hinhAnhMieuTaExists = await hinhAnhMieuTaElement.isExisting();

            // Kiểm tra giá khám có tồn tại
            const giaKhamElement = await client.$('.gia-kham');
            const giaKhamExists = await giaKhamElement.isExisting();

            // Kiểm tra lịch khám có tồn tại
            const lichKhamElement = await client.$('.lich-kham');
            const lichKhamExists = await lichKhamElement.isExisting();

            // Kiểm tra khả năng chọn giờ khám
            const gioKhamElement = await client.$('.gio-kham');
            const gioKhamEnabled = await gioKhamElement.isEnabled();

            // In kết quả
            console.log('Hình ảnh mô tả:', hinhAnhMieuTaExists);
            console.log('Giá khám:', giaKhamExists);
            console.log('Lịch khám:', lichKhamExists);
            console.log('Có thể chọn giờ khám:', gioKhamEnabled);

            // Quay trở lại trang chuyên khoa trước để tiếp tục vòng lặp
            await client.back();
        }
    })

})