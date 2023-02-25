var Glitch = function() {
	function Glitch() {
		this._text = document.querySelector('.glitch_heading');
		this._filter = document.querySelector('.svg-filters');
		this._turb = this._filter.querySelector('#filter feTurbulence');
		this._turbVal = {
			val: 0.000001
		};
		this._turbValX = {
			val: 0.000001
		};
		this.createTimeline();
	}
	Glitch.prototype.createTimeline = function() {
		var _this = this;
		this.timeline = new TimelineMax({
			repeat: -1,
			repeatDelay: 2,
			onUpdate: function() {
				_this._turb.setAttribute('baseFrequency', _this._turbVal.val + ' ' + _this._turbValX.val);
			}
		});
		this.timeline.from(this._text, 3, {
			opacity: 1,
			scale: 1
		});
		this.timeline.to(this._turbValX, 0.1, {
			val: 0.4,
			ease: Power0.easeNone
		}, 3);
		this.timeline.to(this._turbVal, 0.1, {
			val: 0.02,
			ease: Power0.easeNone
		}, 3);
		this.timeline.set(this._turbValX, {
			val: 0,
			ease: Power0.easeNone
		});
		this.timeline.set(this._turbVal, {
			val: 0,
			ease: Power0.easeNone
		});
		this.timeline.to(this._turbValX, 0.4, {
			val: 0.4,
			ease: Power0.easeNone
		}, 5);
		this.timeline.to(this._turbVal, 0.4, {
			val: 0.02,
			ease: Power0.easeNone
		}, 5);
		this.timeline.set(this._turbValX, {
			val: 0,
			ease: Power0.easeNone
		});
		this.timeline.set(this._turbVal, {
			val: 0,
			ease: Power0.easeNone
		});
	};
	return Glitch;
}();
new Glitch();