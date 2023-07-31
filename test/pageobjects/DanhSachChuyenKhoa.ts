
class DanhSachChuyenKhoa { // Nên đổi tên thành ChuyenKhoaPageObject
    // Mấy cái text locator nên tách ra chứ về sau main tain cực khó, tưởng tượng nếu locator đó được sử dụng cho 5 hàm, mà dev thay đổi locator trong code dev thì sao ? Ngồi sửa 5 hàm thay vì chỉ cần sửa 1 chỗ String bên dưới ah
    // VD: String coXuongKhopTitleButton = //div[@class='chuyenkhoa-ds']//h3[contains(text(),'Cơ Xương Khớp')]
    // private openChuyenKhoaCoXuongKhop() { return $(coXuongKhopTitleButton) }; 
    private openChuyenKhoaCoXuongKhop() { return $("//div[@class='chuyenkhoa-ds']//h3[contains(text(),'Cơ Xương Khớp')]") };
    get titleChuyenKhoa() { return $('.chuyenkhoa-modau>h1'); }
    get descripstionChuyenKhoa() { return $('.chuyenkhoa-gioithieu.docthem-noidung') }
    private buttonDocThemMoTa() { return $('.docthem-nut-hien') };
    private buttonAnBotMoTa() { return $('.docthem-nut-an') }
    get contentChuyenKhoa() { return $('.chuyenkhoa-gioithieu.docthem-noidung') };
    get hrefMenuNavbar() { return $("//ul[@class='trinhdon-nhom trinhdon-chinh']") }
    get hrefMenunIcon() { return $("//div[@class='trinhdon-mxh an-ud']") }
    get nameChuyenKhoa() { return $("//h1[contains(text(),'Cơ Xương Khớp')]") }
    get openNavbar() { return $("//button[@class='trinhdon-congtac']") }
    get navbarElement() { return $("//nav[@class='trinhdon phai']") }
    get elementBacSi() {
        return $('#lkbs')
    } // Này ko phải ở page chuyenkhoa
    get() { return $$('.mot-bs-thongtin div div h2 a') }


    private get specialCoXuongKhop() {
        return $('chuyenkhoa-modau');
    }

    private get imageDoctor() {
        let elementImageDoctor = $('mot-bs-anh')
        return elementImageDoctor.$$('a img')
    }
    private get nameDoctor() {
        let elementClassNameDoctor = $('mot-bs-ten')
        return elementClassNameDoctor.$$('a')
    }
    private get describeDoctor() {
        return $('mot-bs-tomtat')
    }
    private get namePlaceClinic() {
        let elemenNameClinicPlace = $('lichkham-ten');
        let elementAndressClinicPlace = $('lichkham-diachi')
        return {
            elemenNameClinicPlaces: elemenNameClinicPlace,
            elementAndressClinicPlaces: elementAndressClinicPlace
        };
    }
    private get priceClinic() {
        let elementPrice = $('lichkham-giakham');
        return elementPrice.$$('h3')
    }
    private get insuranceClinic() {
        let elementInsurance = $('lichkham-baohiem');
        return elementInsurance.$$('h3')
    }
    private get dayClinic() {
        return $('mot-bs-chon-gio');
    }
    private get hourClinic() {
        return $('mot-bs-co-lichkham');
    }
    async startChuyenKhoaCoXuongKhop() {
        await this.openChuyenKhoaCoXuongKhop().click();
    }
    async clickButtonDocThem() {
        await this.buttonDocThemMoTa().click();
    }
    async clickButtonAnBot() {
        await this.buttonAnBotMoTa().click();
    }
}
export default new DanhSachChuyenKhoa();
