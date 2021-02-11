var GameScene1 = new Phaser.Class({

    Extends: Phaser.Scene,
    initialize:
        function GameScene1() {
        Phaser.Scene.call(this, { key: 'GameScene1' });
    },
    preload: function() { },
    create: function() {
        this.txt = this.add.text();
        this.dist = this.add.text(0, 20);
    },
    update: function() {
        var x1, x2, y1, y2;
        var cnd = false;
        var pointer = this.input.activePointer;

        this.txt.text = 'X:' + pointer.x + '   Y:' + pointer.y;

        this.input.on('pointerdown', function(pointer) {
            x1 = pointer.x;
            y1 = pointer.y;
            cnd = true;
        });

        this.input.on('pointerup', function(pointer) {
            if(cnd) {
                x2 = pointer.x;
                y2 = pointer.y;
                cnd = false;
                this.scene.dist.text = 'Distance: ' + Math.sqrt( (x2 - x1)*(x2 - x1) + (y2 - y1)*(y2 - y1) );
            }
        });
    }
});

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: 10,
        }
    },
    backgroundColor: 0x00000,
    scale: { autoCenter: Phaser.Scale.CENTER_BOTH },
    scene: [GameScene1],
};

var game = new Phaser.Game(config);