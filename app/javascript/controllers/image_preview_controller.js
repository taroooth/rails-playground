import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = { maxImageSize: Number, aspectWidth: Number, aspectHeight: Number }
  static targets = ["image"]

  preview(event) {
    var size = this.imageTarget.files[0].size / 1024 / 1024;
    if (size > this.maxImageSizeValue) {
      alert(`ファイルサイズは${this.maxImageSizeValue}MB以下です。`);
      this.imageTarget.value = '';
      return
    }
    const input = event.target
    if (input.files && input.files[0]) {
      const reader = new FileReader()
      const _this = this;
      const aspectWidth = this.aspectWidthValue;
      const aspectHeight = this.aspectHeightValue;
      reader.onload = (e) => {
        const image = new Image();
        image.onload = function () {
          if (aspectWidth != 0 && aspectHeight != 0 && this.width / this.height !== aspectWidth / aspectHeight) {
            alert(`アスペクト比は${aspectWidth}:${aspectHeight}である必要があります。`);
            _this.imageTarget.value = '';
            return;
          }
        }
        image.src = e.target.result
      }
      reader.readAsDataURL(input.files[0])
    }
  }
}
