
class headerChuyenKhoa {
    private get buttonBack() { return $('.bt-g.bt-g-muiten-trai') }
    private get buttonHoTro() { return $(".dieuhuong-nut") }
    private get buttonPhone() { return $("//a[@class='dieuhuong-nut hotline']") };
    private get buttonMenu() { return $(".trinhdon-congtac") }
    private
    get titileHoTro() { return $("//p[contains(text(),'Hãy bấm vào nút mục chat bên dưới đây để nhận được')]") }
    async startButtonBack() {
        await this.buttonBack.click();
    }
    async startButtonHoTro() {
        await this.buttonHoTro.click();
    }
    async startButtonPhone() {
        await this.buttonPhone.click();
    }
    async startButtonMenu() {
        await this.buttonMenu.click();
    }
}
export default new headerChuyenKhoa();