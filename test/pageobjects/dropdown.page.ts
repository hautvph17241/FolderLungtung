class DropDownSpecSpecialist {
    get skillDropDown() { return $("//select[@id='lk_tinhthanh']") };
    get optionDropDown() { return $$("//select[@id='lk_tinhthanh'] option") }

    async startDropdown() {
        await this.skillDropDown.click();
    }

}
export default new DropDownSpecSpecialist();