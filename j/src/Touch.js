(function (TipTap, _, $) {

	// namespacing
	TipTap.Touch = {
		debugMe: true,

		START_EVENT_NAME:  'touchstart',
		DRAG_EVENT_NAME:   'touchmove',
		END_EVENT_NAME:    'touchend',
		CANCEL_EVENT_NAME: 'touchcancel',

		buildEtList: function (e) {

			var pointersList = TipTap._getEvent(e).changedTouches;

			for (var i = 0, l = pointersList.length; i < l; i++) {

				var pointer = pointersList[i];

				// adds timestamp to each touch
				pointer.timeStamp = e.timeStamp;

				this._addTarget(pointer, pointer);

			}

			return pointersList;

		},

		onStart: function (eventTouch) {
		},

		onDrag: function (eventTouch) {
		},

		onEnd: function (eventTouch) {
		},

		onCancel:   function (eventTouch) {
		},

		// todo: base Device class with these jQuery-related methods
		// will be set to either saveTargetNojQuery or saveTargetjQuery, depending.
		_addTarget: function (dest, src) {

		},

		_addTargetjQuery: function (dest, src) {

			// add jQuery object wrapper for the DOM
			dest.$target = $(src.target);

		},

		usejQuery: function () {

			this._addTarget = this._addTargetjQuery;

		},

		shouldCaptureDrag: function (e) {

			return true;

		}

	};

}(window.TipTap, _, window.jQuery));
