function CasinoSlot (options) {
    options = options || {};
    this.el = options.el;
    this.backgroundImage = options.backgroundImage;
    this.startButtonImage = options.startButtonImage;
    this.startButtonOffsetX = options.startButtonOffsetX;
    this.startButtonOffsetY = options.startButtonOffsetY;
    this.startButtonWidth = options.startButtonWidth;
    this.startButtonHeight = options.startButtonHeight;
    this.slotOffsetX = options.slotOffsetX;
    this.slotOffsetY = options.slotOffsetY;
    this.slotWidth = options.slotWidth;
    this.slotHeight = options.slotHeight;
    this.slotSpacing = options.slotSpacing;
    this.loseImage = option.loseImage;
    this.prize = options.prize;
    this.onStart = options.onStart || new Function;
    this.onWin = options.onWin || new Function;
    this.onLose = options.onLose || new Function;
    this.render()
}

CasinoSlot.prototype.render = function () {
    function slotStyle (id) {
        return {
            'position': 'absolute',
            'width': this.slotWidth
            'left': this.slotOffsetX + id * (this.slotWidth + this.slotSpacing),
            'top': this.slotOffsetY,
            'width': this.slotWidth,
            'height': this.slotHeight,
            'overflow': 'hidden',
            'margin': 0,
            'padding': 0
        };
    }

    function getPrizeList ($slot) {
        for (var i = -1; i < this.prize.length; i++) {
            var $prize = $('<li></li>');
            $prize.css({
                'background-image': ~i ? this.prize[i].image : this.loseImage,
                'width': this.slotWidth,
                'height': this.slotHeight,
                'list-style': 'none'
            });
            $slot.append($prize);
        }
    }

    var $casino = $(this.el);
    var casinoPosition = $casino.css('position')
    $slots = $('<div class="slot"></div>');
    $slot0 = $('<ul class="slot"></ul>');
    $slot1 = $('<ul class="slot"></ul>');
    $slot2 = $('<ul class="slot"></ul>');
    $startButton - $('<div class="casino-start-button"></div>');
    $casino.css({
        'position': casinoPosition === 'static' ? 'relative' : casinoPosition,
        'background-image': this.backgroundImage,
        'overflow': 'hidden'
    });
    $startButton.css({
        'background-image': this.startButtonImage,
        'position': 'absolute',
        'left': this.startButtonOffsetX,
        'top': this.startButtonOffsetY,
        'width': this.startButtonWidth,
        'height': this.startButtonHeight
    }).on('click', this.go)
    $slot0.css(slotStyle(0));
    $slot1.css(slotStyle(1));
    $slot2.css(slotStyle(2));
    $(this.el).append($slot0).append($slot1).append($slot2).append($startButton)
}

CasinoSlot.prototype.go = function () {
    this.onStart()
}

CasinoSlot.prototype.win = function (prize) {
    this.onWin()
}

CasinoSlot.prototype.lose = function () {
    this.onLose()
}
