# Draw

* 线条 弧形 圆 曲线及多边形进行描边与填充
* 通过设置绘图环境的属性来改变所绘图形的外观
* 绘制圆角矩形
* 绘制贝塞尔曲线
* 对2d绘制进行扩展 使之可以绘制虚线
* 使纯色 渐变 及图案对图形进行描边 填充
* 在阴影效果来模拟具有深度立体图形效果

## 恢复动画背景

* 讲所以内容擦除 并重新绘制
* 仅重绘内容发生变化的部分区域
* 从离屏缓冲区中将内容发生变化的部分背景复制到屏幕上

## 利用剪编区域来处理动画背景
## 利用图块复制技术来处理动画背景
## 利用双缓冲技术绘制动画

## Sprite

```javascript
  let Sprite = function(name, painter, behaviors) {
	if(!!name) this.name = name
	if(!!painter) this.painter = painter
        
  	this.top = 0
	this.left = 0
	this.width = 10
	this.height = 10
	this.velocityX = 0
	this.velocityY = 0
	this.visibel = true
	this.animating = false
	this.behaviors = behaviors || []
	return this
  }

  Sprite.prototype = {
	paint: function(context) {
		if(!!this.painter && this.visible) {
			this.painter.paint(this, context)
		}
	},
	update: function(context, time) {
		for(let i = 0; i < this.behaviors.length; ++i) {
			this.behaviors[i].execute(this, context, time)
		}
	}
  }
  
  SpriteSheetPainter = function (cells) {
	this.cells = cells || []
	this.cellIndex = 0
  }

  SpriteSheetPainter.prototype = {
	advance: function () {
		if (this.cellIndex === this.cells.lenght -1) {
			this.cellIndex = 0
		}else{
			this.cellIndex++
		}
	},
	paint: function (sprite, context){
		let cell = this.cells[this.cellIndex]
		context.drawImage(spritesheet, cell.x, cell.y, cell.w, cell.h, sprite.left, sprite.top, cell.w, cell.h)
	}	
  }
```
