import "./style.scss";

function Sim() {
  this.sldrRoot = document.querySelector(".sim-slider");
  this.sldrList = this.sldrRoot.querySelector(".sim-slider-list");
  this.sldrElements = this.sldrList.querySelectorAll(".sim-slider-element");
  this.sldrElemFirst = this.sldrList.querySelector(".sim-slider-element");
  this.leftArrow = this.sldrRoot.querySelector("div.sim-slider-arrow-left");
  this.rightArrow = this.sldrRoot.querySelector("div.sim-slider-arrow-right");

  this.options = Sim.defaults;
  Sim.initialize(this);
}

Sim.defaults = {
  loop: true,
  arrows: true,
};

Sim.prototype.elemPrev = function (num) {
  num = num || 1;

  const prevElement = this.currentElement;
  this.currentElement -= num;
  if (this.currentElement < 0) this.currentElement = this.elemCount - 1;

  this.sldrElements[this.currentElement].style.opacity = "1";
  this.sldrElements[prevElement].style.opacity = "0";
};

Sim.prototype.elemNext = function (num) {
  num = num || 1;

  const prevElement = this.currentElement;
  this.currentElement += num;
  if (this.currentElement >= this.elemCount) this.currentElement = 0;

  this.sldrElements[this.currentElement].style.opacity = "1";
  this.sldrElements[prevElement].style.opacity = "0";
};

Sim.initialize = function (that) {
  that.elemCount = that.sldrElements.length;

  that.currentElement = 0;

  if (that.elemCount >= 1) {
    that.sldrElemFirst.style.opacity = "1";
  }

  if (that.options.arrows) {
    that.leftArrow.addEventListener(
      "click",
      () => {
        that.elemPrev();
      },
      false
    );
    that.rightArrow.addEventListener(
      "click",
      () => {
        that.elemNext();
      },
      false
    );
  } else {
    that.leftArrow.style.display = "none";
    that.rightArrow.style.display = "none";
  }
};

new Sim();
