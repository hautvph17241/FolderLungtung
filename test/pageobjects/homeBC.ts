class headerBookingCare {
    private get buttonBack() { return $('.bt-g.bt-g-muiten-trai') }
    async startButtonBack() {
        await this.buttonBack.click()
    }
}