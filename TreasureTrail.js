(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 400,
	height: 400,
	fps: 24,
	color: "#151515",
	manifest: [
		{src:"images/Bitmap1.png", id:"Bitmap1"},
		{src:"images/Bitmap1copy.png", id:"Bitmap1copy"},
		{src:"images/Bitmap13.png", id:"Bitmap13"},
		{src:"images/Bitmap2.png", id:"Bitmap2"},
		{src:"images/Bitmap4.png", id:"Bitmap4"},
		{src:"images/Bitmap5.jpg", id:"Bitmap5"},
		{src:"images/Bitmap5_1.png", id:"Bitmap5_1"},
		{src:"images/Bitmap6.png", id:"Bitmap6"},
		{src:"images/board.jpg", id:"board"},
		{src:"images/Calendar.png", id:"Calendar"},
		{src:"images/house_icon.png", id:"house_icon"},
		{src:"images/Pheonix.png", id:"Pheonix"}
	]
};



// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,410,410);


(lib.Bitmap1copy = function() {
	this.initialize(img.Bitmap1copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,224,229);


(lib.Bitmap13 = function() {
	this.initialize(img.Bitmap13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,512,512);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,24,24);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,30);


(lib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,736,186);


(lib.Bitmap5_1 = function() {
	this.initialize(img.Bitmap5_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,37,37);


(lib.Bitmap6 = function() {
	this.initialize(img.Bitmap6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,99);


(lib.board = function() {
	this.initialize(img.board);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,420,175);


(lib.Calendar = function() {
	this.initialize(img.Calendar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2400,1800);


(lib.house_icon = function() {
	this.initialize(img.house_icon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,73);


(lib.Pheonix = function() {
	this.initialize(img.Pheonix);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,198,255);


(lib.wilcopy = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(9,9.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D7399").s().p("AhPC5QgkgPgbgcQgbgcgOgmQgPgmgBgsQABgqAQgjQARgkAcgZQAbgaAlgOQAkgPAlAAQAmAAAlAPQAkAOAcAaQAcAZAQAkQAGAMAEAOQAGAYAAAbQAAAegGAbQgEAMgEANQgPAmgbAcQgaAcglAPQglAOgrAAQgqAAglgOg");
	this.shape.setTransform(20,20);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,40,40);


(lib.wil = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(9,9.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D7399").s().p("AhPC5QgkgPgbgcQgbgcgOgmQgPgmgBgsQABgqAQgjQARgkAcgZQAbgaAlgOQAkgPAlAAQAmAAAlAPQAkAOAcAaQAcAZAQAkQAGAMAEAOQAGAYAAAbQAAAegGAbQgEAMgEANQgPAmgbAcQgaAcglAPQglAOgrAAQgqAAglgOg");
	this.shape.setTransform(20,20);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,40,40);


(lib.Tween8 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap5_1();
	this.instance.setTransform(-18.5,-18.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.5,-18.5,37,37);


(lib.Tween7 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap5_1();
	this.instance.setTransform(-18.5,-18.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.5,-18.5,37,37);


(lib.Tween6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Pheonix();
	this.instance.setTransform(-99,-127.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-99,-127.5,198,255);


(lib.Tween5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Pheonix();
	this.instance.setTransform(-99,-127.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-99,-127.5,198,255);


(lib.Tween4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.board();
	this.instance.setTransform(-200,-75,0.952,0.857);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-200,-75,400,150);


(lib.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.board();
	this.instance.setTransform(-200,-75,0.952,0.857);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-200,-75,400,150);


(lib.top_date = function() {
	this.initialize();

	// Layer 2
	this.day = new cjs.Text("1", "60px 'Verdana'");
	this.day.name = "day";
	this.day.textAlign = "center";
	this.day.lineHeight = 62;
	this.day.lineWidth = 113;
	this.day.setTransform(137.8,107.6);

	this.month = new cjs.Text("Febuary", "30px 'Verdana'", "#FFFFFF");
	this.month.name = "month";
	this.month.textAlign = "center";
	this.month.lineHeight = 32;
	this.month.lineWidth = 280;
	this.month.setTransform(140.2,17.8);

	// Layer 3
	this.instance = new lib.Bitmap1copy();
	this.instance.setTransform(23.3,0);

	this.addChild(this.instance,this.month,this.day);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,284.4,229);


(lib.taxy = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOBzIAAgaQgVgBgRgMIALgcQATANASAAQAaAAAAgTQAAgKgHgIQgHgJgSgKQgUgIgIgGQgGgHgEgJQgEgJAAgMQAAgQALgNQAKgNARgEIAAgWIAaAAIAAAVQAXACALAJIgKAbQgRgMgSAAQgKAAgFAGQgHAGAAAJQAAAQAhAQQARAJAJAFQAHAIAEAKQAEAJABAMQAAASgMAMQgKANgUAFIAAAcg");
	this.shape.setTransform(20.3,19.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9E4435").s().p("AhPC5QgkgPgbgcQgbgcgOgmQgPgmgBgsQABgqAQgjQARgkAcgZQAbgaAlgOQAkgPAlAAQAmAAAlAPQAkAOAcAaQAcAZAQAkQAQAjAAAqQAAAsgOAmQgPAmgbAcQgaAcglAPQglAOgrAAQgqAAglgOgAgxBHQARAMAVACIAAAZIAaAAIAAgcQAUgEAKgOQAMgMAAgSQgBgMgEgJQgEgKgHgFQgJgIgRgJQghgQAAgQQAAgIAHgGQAFgHAKAAQASABARALIAKgbQgLgJgXgCIAAgUIgaAAIAAAVQgRAFgKAMQgLANAAAQQAAAMAEAJQAEAKAGAGQAIAHAUAHQASAKAHAJQAHAJAAAJQAAATgaABQgSAAgTgOg");
	this.shape_1.setTransform(20,20);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,40,40);


(lib.Symbol13 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,410,410);


(lib.Symbol11 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8C5836").ss(1,1,1).p("Ak4h0IAAgDAE5h3IAADvIlwAAIAAjv");
	this.shape.setTransform(60,102);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006699").s().p("AmmFUIAAqlIAAgCIEBAAIAADxIFwAAIAAjxIDcAAIAAAJIAAKeg");
	this.shape_1.setTransform(71,124);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004C93").s().p("AigI6IAAjwIkBAAIAAABIkfAAILsuEIKVOMIkVgBIAAgIIjcAAIAADwg");
	this.shape_2.setTransform(70.5,57);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,141,158);


(lib.Symbol8 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#454545").s().p("AADA5IiJAAIAAh4ICJAAIAAg+ICEB8IiEB/g");
	this.shape.setTransform(13.6,12.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,27.1,25.4);


(lib.Symbol7 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap13();
	this.instance.setTransform(0,0,0.039,0.039);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,19.9,19.9);


(lib.Symbol5copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var center = this;
		this.addEventListener("rollover", function (event) {
				center.gotoAndStop(1);
		});
		this.addEventListener("rollout", function (event) {
				center.gotoAndStop(0);
		});
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.text = new cjs.Text("No", "15px 'Verdana'", "#454545");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 182;
	this.text.setTransform(98,4.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#787878").ss(1,1,1).p("AvTidIenAAIAAE7I+nAAg");
	this.shape.setTransform(98,15.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ABABAB").s().p("AvTCeIAAk7IenAAIAAE7g");
	this.shape_1.setTransform(98,15.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8D8D8D").s().p("AvTCeIAAk7IenAAIAAE7g");
	this.shape_2.setTransform(98,15.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_2},{t:this.shape},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,198.1,33.8);


(lib.Symbol5copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var center = this;
		this.addEventListener("rollover", function (event) {
				center.gotoAndStop(1);
		});
		this.addEventListener("rollout", function (event) {
				center.gotoAndStop(0);
		});
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.text = new cjs.Text("Yes", "15px 'Verdana'", "#454545");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 182;
	this.text.setTransform(98,4.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#787878").ss(1,1,1).p("AvTidIenAAIAAE7I+nAAg");
	this.shape.setTransform(98,15.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ABABAB").s().p("AvTCeIAAk7IenAAIAAE7g");
	this.shape_1.setTransform(98,15.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8D8D8D").s().p("AvTCeIAAk7IenAAIAAE7g");
	this.shape_2.setTransform(98,15.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_2},{t:this.shape},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,198.1,33.8);


(lib.Symbol5copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var center = this;
		this.addEventListener("rollover", function (event) {
				center.gotoAndStop(1);
		});
		this.addEventListener("rollout", function (event) {
				center.gotoAndStop(0);
		});
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.text = new cjs.Text("Lets talk about\n something else.", "15px 'Verdana'", "#999999");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 182;
	this.text.setTransform(98,4.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("AvTjrIenAAIAAHXI+nAAg");
	this.shape.setTransform(98,23.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AvTDsIAAnXIenAAIAAHXg");
	this.shape_1.setTransform(98,23.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#787878").ss(1,1,1).p("AvTjrIenAAIAAHXI+nAAg");
	this.shape_2.setTransform(98,23.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8D8D8D").s().p("AvTDsIAAnXIenAAIAAHXg");
	this.shape_3.setTransform(98,23.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{text:"Lets talk about\n something else.",color:"#999999"}}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.text,p:{text:"Lets talk about\nsomething else",color:"#454545"}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,198.1,49.3);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var center = this;
		this.addEventListener("rollover", function (event) {
				center.gotoAndStop(1);
		});
		this.addEventListener("rollout", function (event) {
				center.gotoAndStop(0);
		});
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.text = new cjs.Text("I don't care about this.\n(Leave) ", "15px 'Verdana'", "#999999");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 182;
	this.text.setTransform(98,4.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("AvTjrIenAAIAAHXI+nAAg");
	this.shape.setTransform(98,23.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AvTDsIAAnXIenAAIAAHXg");
	this.shape_1.setTransform(98,23.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#787878").ss(1,1,1).p("AvTjrIenAAIAAHXI+nAAg");
	this.shape_2.setTransform(98,23.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8D8D8D").s().p("AvTDsIAAnXIenAAIAAHXg");
	this.shape_3.setTransform(98,23.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{color:"#999999"}}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.text,p:{color:"#454545"}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,198.1,49.3);


(lib.Symbol4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.house_icon();
	this.instance.setTransform(0,0,0.306,0.306);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,25.4,22.3);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var center = this;
		this.addEventListener("rollover", function (event) {
				center.gotoAndStop(1);
		});
		this.addEventListener("rollout", function (event) {
				center.gotoAndStop(0);
		});
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAeBxIAAgVIgJAAIAAAVIgRAAIAAgVIgHAAIAAAVIgRAAIAAgVIgJAAIAAAVIgOAAIAAgqQgVgGgMgHQgMgJAAgKIAAg6QAAgUAHgQQAHgQAMgOQAMgMAQgIQARgHARAAQASAAAQAHQARAIAMAMQAMAOAHAQQAHAQAAAUIAAA6QAAAKgMAJQgNAIgUAFIAAAqgAgMBGIAZAAIgNgqgAAYAAQgHAIAAALQAAAMAHAIQAIAIALAAQAMAAAIgIQAIgIAAgMQAAgLgIgIQgIgHgMAAQgLAAgIAHgAg+AAQgIAIAAALQAAAMAIAIQAIAIALAAQAMAAAHgIQAIgIAAgMQAAgLgIgIQgHgHgMAAQgLAAgIAHg");
	this.shape.setTransform(20.1,20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#336699").s().p("AhPC5QgkgPgbgcQgbgcgOgmQgPgmgBgsQABgqAQgjQARgkAcgZQAbgaAlgOQAkgPAlAAQAmAAAlAPQAkAOAcAaQAcAZAQAkQAQAjAAAqQAAAsgOAmQgPAmgbAcQgaAcglAPQglAOgrAAQgqAAglgOgAAfBcIAAAVIAOAAIAAgqQAUgFANgIQAMgJgBgKIAAg6QABgUgIgQQgGgQgNgOQgMgMgQgIQgRgHgSAAQgQAAgRAHQgQAIgMAMQgMAOgHAQQgHAQAAAUIAAA6QAAAKAMAJQAMAHAUAGIAAAqIAPAAIAAgVIAJAAIAAAVIARAAIAAgVIAHAAIAAAVIARAAIAAgVgAgLBGIALgqIAOAqgAAZAnQgIgIAAgMQAAgLAIgIQAIgHALAAQAMAAAHAHQAJAIgBALQABAMgJAIQgHAIgMAAQgLAAgIgIgAg9AnQgIgIAAgMQAAgLAIgIQAIgHAKAAQAMAAAIAHQAIAIAAALQAAAMgIAIQgIAIgMAAQgKAAgIgIg");
	this.shape_1.setTransform(20,20);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#547799").s().p("AAYATQgHgHAAgMQAAgJAHgJQAIgJALABQAMgBAIAJQAIAJAAAJQAAAMgIAHQgIAJgMAAQgLAAgIgJgAg+ATQgIgHAAgMQAAgJAIgJQAIgJALABQAMgBAHAJQAIAJAAAJQAAAMgIAHQgHAJgMAAQgLAAgIgJg");
	this.shape_2.setTransform(20.1,22);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#647F99").s().p("AhPC5QgkgPgbgcQgbgcgOgmQgPgmgBgsQABgqAQgjQARgkAcgZQAbgaAlgOQAkgPAlAAQAmAAAlAPQAkAOAcAaQAcAZAQAkQAQAjAAAqQAAAsgOAmQgPAmgbAcQgaAcglAPQglAOgrAAQgqAAglgOgAAfBcIAAAVIAOAAIAAgqQAUgFANgIQAMgJgBgKIAAg6QABgUgIgQQgGgQgNgOQgMgMgQgIQgRgHgSAAQgQAAgRAHQgQAIgMAMQgMAOgHAQQgHAQAAAUIAAA6QAAAKAMAJQAMAHAUAGIAAAqIAPAAIAAgVIAJAAIAAAVIARAAIAAgVIAHAAIAAAVIARAAIAAgVg");
	this.shape_3.setTransform(20,20);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#336699").s().p("AgMAVIAMgpIANApg");
	this.shape_4.setTransform(20.1,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape},{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40,40);


(lib.seasons = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap5();
	this.instance.setTransform(0,0,2.152,2.152);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1584,400.3);


(lib.event = function() {
	this.initialize();

	// Layer 2
	this.story = new cjs.Text("Here is some text detailing what do.", "18px 'Verdana'", "#FFFFFF");
	this.story.name = "story";
	this.story.lineHeight = 20;
	this.story.lineWidth = 358;
	this.story.setTransform(24,114);

	this.text = new cjs.Text("", "35px 'Verdana'", "#FFFFFF");
	this.text.lineHeight = 37;
	this.text.lineWidth = 100;
	this.text.setTransform(92.1,228.9);

	this.text_1 = new cjs.Text("Something Happened!", "35px 'Verdana'", "#FFFFFF");
	this.text_1.lineHeight = 37;
	this.text_1.lineWidth = 404;
	this.text_1.setTransform(10,67.5);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EggBAgMMAAAhAXMBADAAAMAAABAXg");
	this.shape.setTransform(205.1,206.1);

	this.addChild(this.shape,this.text_1,this.text,this.story);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,418.1,412.1);


(lib.bottomcopy = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("UP", "65px 'Verdana'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 67;
	this.text.lineWidth = 636;
	this.text.setTransform(200.1,100.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6699CC").s().p("A/PPnIAA/OMA+eAAAIAAfOg");
	this.shape.setTransform(200,100);

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-118,0,640.2,201.7);


(lib.bottom = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Lawyer", "65px 'Segoe UI Symbol'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 67;
	this.text.lineWidth = 636;
	this.text.setTransform(202.1,9.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6699CC").s().p("A/PPnIAA/OMA+eAAAIAAfOg");
	this.shape.setTransform(200,100);

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-116,0,640.2,200);


(lib.babycopy = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap4();
	this.instance.setTransform(6,5.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#539DA4").s().p("AhPC1QgkgPgbgcQgbgbgOgmQgPgmgBgrQABgrAQgjQARgkAcgaQAbgZAlgOIAagJIBgAAIAaAJQAkAOAcAZQAcAaAQAkQAQAjAAArQAAArgOAmQgPAmgbAbQgaAcglAPQglAPgrABQgqgBglgPg");
	this.shape.setTransform(20,19.7);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,40,39.4);


(lib.baby = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap4();
	this.instance.setTransform(6,5.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#539DA4").s().p("AhPC1QgkgPgbgcQgbgbgOgmQgPgmgBgrQABgrAQgjQARgkAcgaQAbgZAlgOIAagJIBgAAIAaAJQAkAOAcAZQAcAaAQAkQAQAjAAArQAAArgOAmQgPAmgbAbQgaAcglAPQglAPgrABQgqgBglgPg");
	this.shape.setTransform(20,19.7);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,40,39.4);


(lib.Will = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(1));

	// Layer 1
	this.instance = new lib.Symbol3();
	this.instance.setTransform(20,20,0.08,1,0,0,180,20,20);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,skewY:0,alpha:1},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(18.4,0,3.2,40);


(lib.test = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_34 = function() {
		this.stop();
	}
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(34).call(this.frame_34).wait(15).call(this.frame_49).wait(1));

	// Layer 1
	this.skull = new lib.Will();
	this.skull.setTransform(-18.4,0);

	this.btn = new lib.Symbol3();
	this.btn.setTransform(1,21,1,1,0,0,0,20,20);
	this.btn._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.skull}]}).to({state:[{t:this.btn}]},1).to({state:[{t:this.btn}]},16).to({state:[{t:this.btn}]},1).to({state:[{t:this.btn}]},1).to({state:[{t:this.btn}]},1).to({state:[{t:this.btn}]},1).to({state:[{t:this.btn}]},1).to({state:[{t:this.btn}]},1).to({state:[{t:this.btn}]},1).to({state:[{t:this.btn}]},1).to({state:[{t:this.btn}]},1).to({state:[{t:this.btn}]},1).to({state:[{t:this.btn}]},1).to({state:[{t:this.btn}]},1).to({state:[{t:this.btn}]},1).to({state:[{t:this.btn}]},1).to({state:[{t:this.btn}]},1).to({state:[{t:this.btn}]},1).to({state:[{t:this.btn}]},1).to({state:[{t:this.btn}]},1).to({state:[{t:this.btn}]},1).to({state:[{t:this.btn}]},1).to({state:[{t:this.btn}]},1).to({state:[{t:this.btn}]},1).to({state:[{t:this.btn}]},1).to({state:[{t:this.btn}]},1).to({state:[{t:this.btn}]},1).to({state:[{t:this.btn}]},1).to({state:[{t:this.btn}]},1).to({state:[{t:this.btn}]},1).to({state:[{t:this.btn}]},1).to({state:[{t:this.btn}]},1).to({state:[{t:this.btn}]},1).to({state:[{t:this.btn}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1).to({_off:false},0).wait(16).to({x:15.2,y:19},0).wait(1).to({scaleX:1,scaleY:1,x:15.7,y:19.1},0).wait(1).to({scaleX:1,scaleY:1,x:16.7},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:18.1},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:20.3,y:19},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:23.4},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:28,y:19.1},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:35},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:47,y:19},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:82.1},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:126.9},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:139},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:145.3},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:149.2},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:151.6},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:153},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:153.8},0).wait(1).to({x:154},0).wait(1).to({x:153.7},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:152.7},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:150.8},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:147.6},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:142.5},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:134.1,y:19.1},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:118.1,y:19.2},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:67.3,y:19.6},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:29,y:19.8},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:16,y:19.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:9.1,y:20},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:5},0).wait(1).to({scaleX:1,scaleY:1,x:2.7},0).wait(1).to({scaleX:1,scaleY:1,x:1.6},0).wait(1).to({scaleX:1,scaleY:1,x:1.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.2,40);


(lib.tax_icon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(21));

	// Layer 1
	this.instance = new lib.taxy();
	this.instance.setTransform(20,20,0.06,1,0,0,0,20,20);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.06,alpha:0.001},0).wait(1).to({scaleX:0.07,alpha:0.005},0).wait(1).to({scaleX:0.07,alpha:0.013},0).wait(1).to({scaleX:0.08,alpha:0.025},0).wait(1).to({scaleX:0.1,alpha:0.042},0).wait(1).to({scaleX:0.12,alpha:0.068},0).wait(1).to({scaleX:0.16,alpha:0.105},0).wait(1).to({scaleX:0.21,alpha:0.164},0).wait(1).to({scaleX:0.31,alpha:0.27},0).wait(1).to({scaleX:0.58,alpha:0.55},0).wait(1).to({scaleX:0.79,alpha:0.777},0).wait(1).to({scaleX:0.88,alpha:0.867},0).wait(1).to({scaleX:0.92,alpha:0.918},0).wait(1).to({scaleX:0.95,alpha:0.95},0).wait(1).to({scaleX:0.97,alpha:0.971},0).wait(1).to({scaleX:0.99,alpha:0.985},0).wait(1).to({scaleX:0.99,alpha:0.994},0).wait(1).to({scaleX:1,alpha:0.999},0).wait(1).to({scaleX:1,alpha:1},0).wait(1).to({scaleX:1,alpha:0.999},0).wait(1).to({scaleX:1,alpha:0.996},0).wait(1).to({scaleX:0.99,alpha:0.99},0).wait(1).to({scaleX:0.98,alpha:0.981},0).wait(1).to({scaleX:0.97,alpha:0.967},0).wait(1).to({scaleX:0.95,alpha:0.948},0).wait(1).to({scaleX:0.93,alpha:0.921},0).wait(1).to({scaleX:0.89,alpha:0.88},0).wait(1).to({scaleX:0.83,alpha:0.816},0).wait(1).to({scaleX:0.7,alpha:0.677},0).wait(1).to({scaleX:0.32,alpha:0.279},0).wait(1).to({scaleX:0.21,alpha:0.158},0).wait(1).to({scaleX:0.15,alpha:0.099},0).wait(1).to({scaleX:0.12,alpha:0.063},0).wait(1).to({scaleX:0.1,alpha:0.039},0).wait(1).to({scaleX:0.08,alpha:0.022},0).wait(1).to({scaleX:0.07,alpha:0.012},0).wait(1).to({scaleX:0.06,alpha:0.005},0).wait(1).to({scaleX:0.06,alpha:0.001},0).wait(1).to({scaleX:0.06,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(18.8,0,2.4,40);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		exportRoot.cal.visible=true;
	}
	this.frame_37 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(23).call(this.frame_23).wait(14).call(this.frame_37).wait(40));

	// Layer 1
	this.instance = new lib.Symbol13();
	this.instance.setTransform(205,205,1,1,0,0,0,205,205);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({alpha:0.992},0).wait(1).to({alpha:0.982},0).wait(1).to({alpha:0.965},0).wait(1).to({alpha:0.938},0).wait(1).to({alpha:0.895},0).wait(1).to({alpha:0.821},0).wait(1).to({alpha:0.664},0).wait(1).to({alpha:0.301},0).wait(1).to({alpha:0.153},0).wait(1).to({alpha:0.086},0).wait(1).to({alpha:0.047},0).wait(1).to({alpha:0.023},0).wait(1).to({alpha:0.009},0).wait(1).to({alpha:0.002},0).wait(1).to({alpha:0},0).wait(24).to({alpha:0.004},0).wait(1).to({alpha:0.012},0).wait(1).to({alpha:0.026},0).wait(1).to({alpha:0.047},0).wait(1).to({alpha:0.08},0).wait(1).to({alpha:0.132},0).wait(1).to({alpha:0.226},0).wait(1).to({alpha:0.49},0).wait(1).to({alpha:0.783},0).wait(1).to({alpha:0.879},0).wait(1).to({alpha:0.93},0).wait(1).to({alpha:0.961},0).wait(1).to({alpha:0.981},0).wait(1).to({alpha:0.992},0).wait(1).to({alpha:0.998},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,410,410);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
		exportRoot.madeWill = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(1));

	// Layer 1
	this.instance = new lib.Tween7("synched",0);
	this.instance.setTransform(18.5,18.5);

	this.instance_1 = new lib.Tween8("synched",0);
	this.instance_1.setTransform(18.5,55.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:18.6},0).wait(1).to({y:19.1},0).wait(1).to({y:20.1},0).wait(1).to({y:21.9},0).wait(1).to({y:25.6},0).wait(1).to({y:40},0).wait(1).to({y:50.4},0).wait(1).to({y:53.4},0).wait(1).to({y:54.7},0).wait(1).to({y:55.3},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,37,37);


(lib.Symbol1copy = function() {
	this.initialize();

	// Layer 6
	this.instance = new lib.Bitmap6();
	this.instance.setTransform(41.9,57.5);

	// Layer 5
	this.instance_1 = new lib.Symbol11();
	this.instance_1.setTransform(100.2,91,1,1,-1.3,0,0,70.5,79);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(28,10.5,144.5,161.1);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.Bitmap6();
	this.instance.setTransform(41.9,57.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	// Layer 5
	this.instance_1 = new lib.Symbol11();
	this.instance_1.setTransform(100.3,91,1,1,-24.2,0,0,70.5,79);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:100.2},0).wait(1).to({rotation:-24},0).wait(1).to({rotation:-23.7,y:90.9},0).wait(1).to({rotation:-23.1},0).wait(1).to({rotation:-22.3},0).wait(1).to({rotation:-21.2},0).wait(1).to({rotation:-19.5},0).wait(1).to({rotation:-16.8,x:100.3},0).wait(1).to({rotation:-12.1,x:100.2},0).wait(1).to({rotation:0.5},0).wait(1).to({rotation:10.8},0).wait(1).to({rotation:14.8,x:100.3,y:91},0).wait(1).to({rotation:17.1},0).wait(1).to({rotation:18.5},0).wait(1).to({rotation:19.5,x:100.2},0).wait(1).to({rotation:20.1,x:100.3},0).wait(1).to({rotation:20.5},0).wait(1).to({rotation:20.7},0).wait(1).to({rotation:20.8,x:100.2},0).wait(1).to({rotation:20.7},0).wait(1).to({rotation:20.5},0).wait(1).to({rotation:20.2},0).wait(1).to({rotation:19.7},0).wait(1).to({rotation:19},0).wait(1).to({rotation:17.9},0).wait(1).to({rotation:16.3},0).wait(1).to({rotation:13.8},0).wait(1).to({rotation:9.2},0).wait(1).to({rotation:-3.4},0).wait(1).to({rotation:-13.6},0).wait(1).to({rotation:-17.6},0).wait(1).to({rotation:-20},0).wait(1).to({rotation:-21.5},0).wait(1).to({rotation:-22.5},0).wait(1).to({rotation:-23.2},0).wait(1).to({rotation:-23.7},0).wait(1).to({rotation:-24},0).wait(1).to({rotation:-24.2},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.5,-10,193.5,202);


(lib.stethascopecopy = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol7();
	this.instance.setTransform(22,20.2,1,1,0,0,0,10,10);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance.cache(-2,-2,24,24);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#36A08B").s().p("AhPC5QgkgPgbgcQgbgcgOgmQgPgmgBgsQABgqAQgjQARgkAcgZQAbgaAlgOQAkgPAlAAQAmAAAlAPQAkAOAcAaQAcAZAQAkQAQAjAAAqQAAAsgOAmQgPAmgbAcQgaAcglAPQglAOgrAAQgqAAglgOg");
	this.shape.setTransform(20,20);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,40,40);


(lib.stethascope = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol7();
	this.instance.setTransform(22,20.2,1,1,0,0,0,10,10);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance.cache(-2,-2,24,24);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#36A08B").s().p("AhPC5QgkgPgbgcQgbgcgOgmQgPgmgBgsQABgqAQgjQARgkAcgZQAbgaAlgOQAkgPAlAAQAmAAAlAPQAkAOAcAaQAcAZAQAkQAQAjAAAqQAAAsgOAmQgPAmgbAcQgaAcglAPQglAOgrAAQgqAAglgOg");
	this.shape.setTransform(20,20);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,40,40);


(lib.StartButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(1));

	// Layer 1
	this.startBtn = new lib.Symbol1();
	this.startBtn.setTransform(112.2,130.2,1,1,0,0,0,94.8,99);

	this.instance = new lib.Symbol1copy();
	this.instance.setTransform(179.2,194.2,1,1,0,0,0,161.5,162.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.startBtn}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({regX:100.2,regY:91,scaleX:1,scaleY:1,x:117.7,y:122.4},0).wait(1).to({scaleX:1,scaleY:1,x:117.2,y:121.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:116.3,y:121.1},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:115,y:119.8},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:113.1,y:117.9},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:110.4,y:115.3},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:106.7,y:111.7},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:101.7,y:106.8},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:94.6,y:99.8},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:84,y:89.4},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:65.3,y:71.1},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:14.2,y:21.3},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-26.3,y:-18.2},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-42.1,y:-33.8},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-51.5,y:-42.9},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-57.7,y:-49},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-62.1,y:-53.3},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-65.2,y:-56.4},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:-67.5,y:-58.5},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-69,y:-60},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-70,y:-61},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:-70.5,y:-61.5},0).wait(1).to({regX:161.5,regY:162.5,scaleX:0.19,scaleY:0.19,x:-58.9,y:-47.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(20.9,21.2,193.5,202);


(lib.sa = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol4();
	this.instance.setTransform(19.7,19.5,1,1,0,0,0,12.7,11.2);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance.cache(-2,-2,29,26);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#349B75").s().p("AhPC5QgkgPgbgcQgbgcgOgmQgPgmgBgsQABgqAQgjQARgkAcgZQAbgaAlgOQAkgPAlAAQAmAAAlAPQAkAOAcAaQAcAZAQAkQAQAjAAAqQAAAsgOAmQgPAmgbAcQgaAcglAPQglAOgrAAQgqAAglgOg");
	this.shape.setTransform(20,20);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,40,40);


(lib.pheonix = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_46 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(46).call(this.frame_46).wait(20));

	// Layer 1
	this.instance = new lib.Pheonix();

	this.instance_1 = new lib.Tween5("synched",0);
	this.instance_1.setTransform(99,127.5);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween6("synched",0);
	this.instance_2.setTransform(296.7,127.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},28).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(28).to({_off:false},0).wait(1).to({x:99.3},0).wait(1).to({x:100.2},0).wait(1).to({x:101.9},0).wait(1).to({x:104.6},0).wait(1).to({x:108.7},0).wait(1).to({x:114.7},0).wait(1).to({x:124},0).wait(1).to({x:139.4},0).wait(1).to({x:172.3},0).wait(1).to({x:237.1},0).wait(1).to({x:263.9},0).wait(1).to({x:277.1},0).wait(1).to({x:285},0).wait(1).to({x:290},0).wait(1).to({x:293.3},0).wait(1).to({x:295.3},0).wait(1).to({x:296.3},0).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(46).to({_off:false},0).wait(1).to({x:296.4},0).wait(1).to({x:295.6},0).wait(1).to({x:294.1},0).wait(1).to({x:291.7},0).wait(1).to({x:288.2},0).wait(1).to({x:283},0).wait(1).to({x:275.4},0).wait(1).to({x:263.4},0).wait(1).to({x:241.5},0).wait(1).to({x:184.8},0).wait(1).to({x:142.4},0).wait(1).to({x:125.1},0).wait(1).to({x:115.2},0).wait(1).to({x:108.9},0).wait(1).to({x:104.7},0).wait(1).to({x:101.9},0).wait(1).to({x:100.2},0).wait(1).to({x:99.3},0).wait(1).to({x:99},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,198,255);


(lib.menu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(1));

	// bottom
	this.instance = new lib.bottom();
	this.instance.setTransform(200,100,1,1,0,0,0,200,100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:204.1,x:204.1,y:99.8},0).wait(1).to({y:99},0).wait(1).to({y:97.5},0).wait(1).to({y:95.2},0).wait(1).to({y:91.9},0).wait(1).to({x:204,y:87.1},0).wait(1).to({y:80.4},0).wait(1).to({x:203.9,y:70.6},0).wait(1).to({x:203.7,y:55.6},0).wait(1).to({x:203.4,y:28.9},0).wait(1).to({x:202.9,y:-22.6},0).wait(1).to({x:202.6,y:-60},0).wait(1).to({x:202.4,y:-77.6},0).wait(1).to({x:202.3,y:-87.7},0).wait(1).to({x:202.2,y:-94},0).wait(1).to({y:-98},0).wait(1).to({y:-100.4},0).wait(1).to({y:-101.6},0).wait(1).to({regX:200,x:198,y:-102},0).wait(1));

	// bottom copy
	this.instance_1 = new lib.bottomcopy();
	this.instance_1.setTransform(200,300,1,1,0,0,0,200,100);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:202.1,regY:100.8,x:202.1,y:301},0).wait(1).to({y:301.8},0).wait(1).to({y:303.3},0).wait(1).to({y:305.6},0).wait(1).to({y:309},0).wait(1).to({y:313.7},0).wait(1).to({y:320.5},0).wait(1).to({y:330.3},0).wait(1).to({y:345.3},0).wait(1).to({y:371.9},0).wait(1).to({y:423.4},0).wait(1).to({y:460.8},0).wait(1).to({y:478.4},0).wait(1).to({y:488.5},0).wait(1).to({y:494.8},0).wait(1).to({y:498.8},0).wait(1).to({y:501.2},0).wait(1).to({y:502.4},0).wait(1).to({regX:200,regY:100,x:200,y:502},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118,0,642.2,401.7);


(lib.leavecopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(21));

	// Layer 1
	this.instance = new lib.Symbol5copy2();
	this.instance.setTransform(98,74.7,1,1,0,0,0,98,23.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:23.6,y:74.5},0).wait(1).to({y:74.3},0).wait(1).to({y:74},0).wait(1).to({y:73.4},0).wait(1).to({y:72.5},0).wait(1).to({y:71.2},0).wait(1).to({y:69.4},0).wait(1).to({y:66.7},0).wait(1).to({y:62.3},0).wait(1).to({y:53.1},0).wait(1).to({y:38.5},0).wait(1).to({y:32},0).wait(1).to({y:28.6},0).wait(1).to({y:26.6},0).wait(1).to({y:25.3},0).wait(1).to({y:24.5},0).wait(1).to({y:24},0).wait(1).to({y:23.7},0).wait(1).to({regY:23.7},0).wait(1).to({regY:23.6},0).wait(1).to({y:23.8},0).wait(1).to({y:24.2},0).wait(1).to({y:24.7},0).wait(1).to({y:25.4},0).wait(1).to({y:26.5},0).wait(1).to({y:28},0).wait(1).to({y:30.2},0).wait(1).to({y:33.5},0).wait(1).to({y:39.6},0).wait(1).to({y:53.3},0).wait(1).to({y:63.4},0).wait(1).to({y:67.9},0).wait(1).to({y:70.4},0).wait(1).to({y:72.1},0).wait(1).to({y:73.1},0).wait(1).to({y:73.9},0).wait(1).to({y:74.3},0).wait(1).to({y:74.5},0).wait(1).to({regY:23.7,y:74.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,50.5,197.1,48.3);


(lib.leave = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(21));

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.setTransform(98,74.7,1,1,0,0,0,98,23.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:23.6,y:74.5},0).wait(1).to({y:74.3},0).wait(1).to({y:74},0).wait(1).to({y:73.4},0).wait(1).to({y:72.5},0).wait(1).to({y:71.2},0).wait(1).to({y:69.4},0).wait(1).to({y:66.7},0).wait(1).to({y:62.3},0).wait(1).to({y:53.1},0).wait(1).to({y:38.5},0).wait(1).to({y:32},0).wait(1).to({y:28.6},0).wait(1).to({y:26.6},0).wait(1).to({y:25.3},0).wait(1).to({y:24.5},0).wait(1).to({y:24},0).wait(1).to({y:23.7},0).wait(1).to({regY:23.7},0).wait(1).to({regY:23.6},0).wait(1).to({y:23.8},0).wait(1).to({y:24.2},0).wait(1).to({y:24.7},0).wait(1).to({y:25.5},0).wait(1).to({y:26.6},0).wait(1).to({y:28.2},0).wait(1).to({y:30.5},0).wait(1).to({y:34.4},0).wait(1).to({y:42.6},0).wait(1).to({y:59},0).wait(1).to({y:65.7},0).wait(1).to({y:69},0).wait(1).to({y:71},0).wait(1).to({y:72.4},0).wait(1).to({y:73.3},0).wait(1).to({y:73.9},0).wait(1).to({y:74.3},0).wait(1).to({y:74.5},0).wait(1).to({regY:23.7,y:74.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,50.5,197.1,48.3);


(lib.house_icon_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(21));

	// Layer 1
	this.instance = new lib.sa();
	this.instance.setTransform(20,20,0.06,1,0,0,0,20,20);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.06,alpha:0.001},0).wait(1).to({scaleX:0.07,alpha:0.005},0).wait(1).to({scaleX:0.07,alpha:0.013},0).wait(1).to({scaleX:0.08,alpha:0.024},0).wait(1).to({scaleX:0.1,alpha:0.041},0).wait(1).to({scaleX:0.12,alpha:0.066},0).wait(1).to({scaleX:0.16,alpha:0.101},0).wait(1).to({scaleX:0.21,alpha:0.154},0).wait(1).to({scaleX:0.29,alpha:0.241},0).wait(1).to({scaleX:0.46,alpha:0.422},0).wait(1).to({scaleX:0.73,alpha:0.708},0).wait(1).to({scaleX:0.85,alpha:0.836},0).wait(1).to({scaleX:0.91,alpha:0.901},0).wait(1).to({scaleX:0.95,alpha:0.941},0).wait(1).to({scaleX:0.97,alpha:0.967},0).wait(1).to({scaleX:0.98,alpha:0.983},0).wait(1).to({scaleX:0.99,alpha:0.993},0).wait(1).to({scaleX:1,alpha:0.998},0).wait(1).to({scaleX:1,alpha:1},0).wait(1).to({scaleX:1,alpha:0.999},0).wait(1).to({scaleX:1,alpha:0.996},0).wait(1).to({scaleX:0.99,alpha:0.99},0).wait(1).to({scaleX:0.98,alpha:0.981},0).wait(1).to({scaleX:0.97,alpha:0.967},0).wait(1).to({scaleX:0.95,alpha:0.948},0).wait(1).to({scaleX:0.93,alpha:0.92},0).wait(1).to({scaleX:0.89,alpha:0.88},0).wait(1).to({scaleX:0.83,alpha:0.813},0).wait(1).to({scaleX:0.69,alpha:0.666},0).wait(1).to({scaleX:0.31,alpha:0.266},0).wait(1).to({scaleX:0.2,alpha:0.153},0).wait(1).to({scaleX:0.15,alpha:0.096},0).wait(1).to({scaleX:0.12,alpha:0.061},0).wait(1).to({scaleX:0.1,alpha:0.038},0).wait(1).to({scaleX:0.08,alpha:0.022},0).wait(1).to({scaleX:0.07,alpha:0.011},0).wait(1).to({scaleX:0.06,alpha:0.005},0).wait(1).to({scaleX:0.06,alpha:0.001},0).wait(1).to({scaleX:0.06,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(18.8,0,2.4,40);


(lib.Calandar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if(exportRoot.beginSim){
			this.parent.increment();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B91A19").s().p("AhSBoQgFgBgFgFQgFAAgEgCQgIgEgFgIQBrAMBIAAQABAAAvgzQAMgJALgEQAAguAZgaQAPgPAYgKIANgFQgXBGgZAzQgIARgKAKQhIAfhVAAQgjAAglgFgAiYA6IgUg6IgegKIgKhQIAHgSQARAHAMALQAMALACARIAAAbQAAATgCANIAPAXIAXAug");
	this.shape.setTransform(122.4,57.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.Calendar, null, new cjs.Matrix2D(0.18,0,0,0.18,-224.9,-45.9)).s().p("Ah4DFQgFgHgCgKIgEgBIgYguIgPgZQADgNAAgUIAAgaQgCgRgMgLQgMgLgRgHQAhhLAvgxQARgTAGgcIA8gnICoAAIAKAKQANAMAbgDIAeAfQAKAKAAAUIgUgfQgHBrAaBIQABAEAAAFIgDALIgNAFQgYAJgPAQQgaAaAAAwQgKAEgMAJQgvAzgCgBQhIABhrgMgABDh5QAGAEAIAAIABAAIAVALIAmAqIAEAIIACACIACAIIAAAFIAAASIABABIgBAFIABAKQACAIAKgBQAOABAAgbIABgJIAAgJIAAgCIgBgEIAAAAIABgEIAAgBIgBgGIgBgEQgDgIgCgIQgCgGgCgCIgIgYIgMghQgFgRgMABQgLABAAALQAAAIAKAZQgPgMgUgMQhSgzAAAeQAAAFANAIIgFAAQgnAAAAAMIABAFQgKAGgEADQgOAHAAAGQAAAEACAEQgHAIgBAIQgHACgIAGIgCACIgCAAQgMAAgXAWIgHAEQgKAHgBAHQgGAGAAAFQAAAEACADQADAFAJAAQAPABAFgKIAEgGIAHgGIABAAIAEgCIADgCIAFgDQAKgDAKgIIABgBIACAAQAFAAAFgCQAJgCAAgLIAAgBIAAgBIAEgGIAEgLQAHgHAJgHIAEgEQAEgBACgFIAKgEIALgGIAWAAIAGgBIAPABg");
	this.shape_1.setTransform(122.9,45.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},5).wait(1));

	// Layer 3
	this.top_date = new lib.top_date();
	this.top_date.setTransform(119,158.3,1,1,0,0,0,142.2,114.3);

	this.timeline.addTween(cjs.Tween.get(this.top_date).wait(1).to({regY:114.5,rotation:0.5,x:119.3,y:162.6},0).wait(1).to({rotation:2.5,x:120.5,y:180.2},0).wait(1).to({rotation:9.4,x:124.6,y:241.1},0).wait(1).to({rotation:33.3,x:139,y:449.4},0).wait(1).to({rotation:37,x:141.4,y:482.3},0).wait(1).to({regX:142.3,regY:114.2,rotation:37.7,x:142,y:488.4},0).wait(1));

	// Layer 1
	this.bottom_date = new lib.top_date();
	this.bottom_date.setTransform(119,158.3,1,1,0,0,0,142.2,114.3);

	this.timeline.addTween(cjs.Tween.get(this.bottom_date).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.2,25,284.4,248);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10).call(this.frame_19).wait(1));

	// Layer 1
	this.instance = new lib.Symbol8();
	this.instance.setTransform(13.6,12.7,1,1,0,0,0,13.6,12.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:12.9},0).wait(1).to({y:13.8},0).wait(1).to({y:15.7},0).wait(1).to({y:20.4},0).wait(1).to({y:38.8},0).wait(1).to({y:46.9},0).wait(1).to({y:49.4},0).wait(1).to({y:50.4},0).wait(1).to({y:50.7},0).wait(2).to({y:50.9},0).wait(1).to({y:51.8},0).wait(1).to({y:53.7},0).wait(1).to({y:58.4},0).wait(1).to({y:76.9},0).wait(1).to({y:85.3},0).wait(1).to({y:87.9},0).wait(1).to({y:89},0).wait(1).to({y:89.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27.1,25.4);


(lib.tray = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var will = this.will;
		var baby = this.baby;
		var scope = this.scope;
		
		will.alpha = .5;
		baby.alpha = .5;
		scope.alpha = .5;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.scope = new lib.stethascopecopy();
	this.scope.setTransform(19.1,141.1,0.736,0.736,0,0,0,19.9,20.1);

	this.baby = new lib.babycopy();
	this.baby.setTransform(19.1,101.7,0.736,0.736,0,0,0,19.9,19.8);

	this.will = new lib.wilcopy();
	this.will.setTransform(18.6,64.3,0.736,0.736,0,0,0,19.9,20.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#444444").ss(1,1,1).p("AjHNDIAA6FIGPAAIAAaF");
	this.shape.setTransform(20,83.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(68,68,68,0.698)").s().p("AjHNDIAA6FIGOAAIAAaFg");
	this.shape_1.setTransform(20,83.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.will},{t:this.baby},{t:this.scope}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,42,169);


(lib.timeline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var alert = this.alert;
		alert.alpha =0;
		
		var months = new Array(
		"January",
		"Febuary",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
		);
		
		var month_days = new Array(
			31,
			28,
			31,
			30,
			31,
			30,
			31,
			31,
			30,
			31,
			30,
			31
		);
		
		var the_month = 1;
		var the_day = 3;
		var cal = this.cal;
		var seasons = this.seasons;
		this.increment = increment;
		var date = 0;
		var dates = new Array(35);
		
		function whatDo(){
			cal.stop();
			exportRoot.beginSim=false;
			if(exportRoot.madeWill){
				alert.story.text="You were hit by a car and died shorty afterward. On the bright side you were smart enough to make a will so all you assets were taken care of."
		    }else{
				alert.story.text="You were hit by a car and died shorty afterward. To make matters worse you did not have a will so your assets were misappropriated. Should have lawyered up.";
			}
			createjs.Tween.get(alert)
		         .wait(500)
		         .to({alpha:.95, visible:true}, 1000)
		         .call(handleComplete);
		    function handleComplete() {
		        
		    }
		}
		
		
		function increment(){
			
			cal.bottom_date.month.text=months[the_month];
			cal.bottom_date.day.text = the_day;
			
			the_day++;
			date++;
			if(the_day>month_days[the_month]){
				the_month++;
				the_day = 1;
			}
			
			
			cal.top_date.month.text=months[the_month];
			cal.top_date.day.text = the_day;
			if(date==99){
				whatDo();
			}
		}
		increment();
		
		
		createjs.Ticker.addEventListener("tick", handleTick);
		function handleTick(event) {
			if (!event.paused) {
		         // Actions carried out when the Ticker is not paused.
			}
			if(exportRoot.beginSim){
				seasons.x-=.5;
			}
		 }
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.alert = new lib.event();
	this.alert.setTransform(280,200.4,1,1,0,0,0,205.1,206.1);

	this.timeline.addTween(cjs.Tween.get(this.alert).wait(1));

	// Calandar
	this.cal = new lib.Calandar();
	this.cal.setTransform(324.5,192.2,1,1,0,0,0,154.5,161.8);

	this.timeline.addTween(cjs.Tween.get(this.cal).wait(1));

	// Bitmap 5
	this.seasons = new lib.seasons();
	this.seasons.setTransform(792,200.2,1,1,0,0,0,792,200.2);

	this.timeline.addTween(cjs.Tween.get(this.seasons).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.Calendar, null, new cjs.Matrix2D(0.18,0,0,0.18,-421.2,-259)).s().p("AhlKFIAA0JIDLAAIAAUJg");
	this.shape.setTransform(552.2,289.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-5.7,1584,412.1);


(lib.trayy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(16));

	// Layer 2
	this.arrow = new lib.arrow();
	this.arrow.setTransform(-78.5,50.4);

	this.scope = new lib.stethascope();
	this.scope.setTransform(-27.3,142,0.736,0.736,0,0,0,19.9,20.1);

	this.baby = new lib.baby();
	this.baby.setTransform(-27.3,102.6,0.736,0.736,0,0,0,19.9,19.8);

	this.will = new lib.wil();
	this.will.setTransform(-27.8,65.2,0.736,0.736,0,0,0,19.9,20.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.will},{t:this.baby},{t:this.scope},{t:this.arrow}]}).wait(30));

	// Layer 1
	this.tray = new lib.tray();
	this.tray.setTransform(20,83.5,1,1,0,0,0,20,83.5);

	this.timeline.addTween(cjs.Tween.get(this.tray).wait(1).to({x:19.9},0).wait(1).to({x:19.6},0).wait(1).to({x:18.9},0).wait(1).to({x:17.8},0).wait(1).to({x:15.9},0).wait(1).to({x:12.9},0).wait(1).to({x:7.4},0).wait(1).to({x:-6},0).wait(1).to({x:-17.5},0).wait(1).to({x:-21.9},0).wait(1).to({x:-24.1},0).wait(1).to({x:-25.2},0).wait(1).to({x:-25.8},0).wait(1).to({x:-26},0).wait(1).to({x:-25.9},0).wait(1).to({x:-25.6},0).wait(1).to({x:-25},0).wait(1).to({x:-24},0).wait(1).to({x:-22.5},0).wait(1).to({x:-20},0).wait(1).to({x:-15.2},0).wait(1).to({x:0.1},0).wait(1).to({x:11.7},0).wait(1).to({x:15.6},0).wait(1).to({x:17.7},0).wait(1).to({x:18.9},0).wait(1).to({x:19.6},0).wait(1).to({x:19.9},0).wait(1).to({x:20},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.5,-0.5,119.1,168);


(lib.board_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_30 = function() {
		this.stop();
		
		var skully = this.skull;
		var skullBtn = this.skull.skull;
		var houseBtn = this.house_icon;
		var taxBtn = this.tax_icon;
		var leaveBtn = this.leaveBtn;
		var topicBtn = this.topicBtn;
		var tray = this.tray;
		var me = this;
		leaveBtn.visible = false;
		
		var will = this.tray.will;
		var baby = this.tray.baby;
		var scope = this.tray.scope;
		var arrow = this.tray.arrow;
		var contract = this.parent.contract;
		
		var yes = this.yes;
		var no = this.no;
		var prompt=false;
		
		yes.visible = false;
		no.visible = false;
		will.visible = false;
		baby.visible = false;
		scope.visible = false;
		arrow.visible = false;
		
		
		createjs.Ticker.addEventListener("tick", handleTick);
		var i=0;
		var messages = new Array(
			"Hello, I am Jack. Your trusty law consulator.",
			"I want to make sure that you are well equipt and in good legal health so that you can be properlly protected",
			"Essential legal information you should always know is..",
			"Creating a will and planning for unplanned circumstances...",
			"Managing property payments..",
			"and of course taxes.",
			"click on the subject you wish to talk in detail about"
		);
		
		
		var will_script = new Array(
			"Great choice!",
			"Great choice!",
			"Lets begin with you're will. Would you like to make one?"
		);
		
		var children_script = new Array(
			"That is a wise decision. By having a will you can ensure that you assets are distributed the way you wish after death.",
			"Now let's discuss your children",
			"Do you have any?"
		);
		
		var menu_man = new Array(
			"Very well, what would you like to discuss?"
		);
		
		var leave_man = new Array(
			"So early? There are still many things we should cover before you go out into the world.",
			"But if you must go then just know I'm available whenever you need me."
		);
		
		var a=0;
		var box = this.say;
		
		
		
		leaveBtn.addEventListener("click", leave);
		function leave(event){
			me.removeAllEventListeners("click");
			messages = leave_man;
			i=0;
			a=0;
			me.addEventListener("click",continu);
		}
		
		function continu(event){
			scriptHandler();
			if(i==1 && a > messages[i].length-5){
				me.removeAllEventListeners("click");
				exportRoot.startSim();
			}
		}
		
		function handleTick(event) {
			if (!event.paused) {
		         // Actions carried out when the Ticker is not paused.
			}
			box.text = messages[i].substring(0,a);
			if(a<messages[i].length){
				a++;
			}else if(prompt){
				prompt = false;
				 setTimeout(function(){
					  yes.visible = true;
					  no.visible = true;
					  yes.addEventListener("click",function(){
						   yes.visible = false;
						   no.visible = false;
						   contract.play();
						   yes.removeEventListener("click",this);
						   messages.push("That is a wise decision. By having a will you can ensure that you assets are distributed the way you wish after death.");
						  });
				 }, 1500);
			}
		 }
		 
		 function ticker(event){
			 yes.visible = false;
			 no.visible = false;
			 yes.removeEventListener("click",tickler);
		 }
		 
		 
		function changeTopic(event){
			topicBtn.play();
			leaveBtn.play();
			messages = menu_man;
			i=0;
			a=0;
			yes.visible = false;
			no.visible = false;
			houseBtn.play();
			taxBtn.play();
			tray.play();
			skully.play();
			arrow.visible = false;
			will.visible = false;
			baby.visible = false;
			scope.visible = false;
		}
		 
		 this.addEventListener("click",clicked);
		 function clicked(event){
			 scriptHandler();
			 if(i==3 && skullBtn.currentFrame==0){
				 skullBtn.play();
				 skullBtn.addEventListener("click", function clicked(){
						taxBtn.play();
						houseBtn.play();
						skullBtn.parent.play();
						tray.play();
						leaveBtn.play();
						topicBtn.play();
						topicBtn.addEventListener("click", changeTopic);
						messages = will_script;
						
						i=0;
						a=0;
					 me.removeEventListener("click",clicked);
					 me.addEventListener("click", sub_clicks);
				 });
			 }
			 else if(i==4 && houseBtn.currentFrame==0){
				 houseBtn.play();
			 }else if(i==5 && taxBtn.currentFrame==0){
				 taxBtn.play();
			 }else if(i==6 && leaveBtn.currentFrame==0){
				 leaveBtn.visible = true;
				 leaveBtn.play();
			 }
		 }
		 
		 function sub_clicks(event){
			
			 scriptHandler();
			 if(i==2){
				 setTimeout(function(){
					  arrow.visible = true;
					  will.visible = true;
					 }, 1000);
				
				 prompt = true;
			 }
			 
			 if(i==3){
				  messages = children_script;
				  i=0;
				  a=0;
				  me.removeEventListener("click",clicked);
				  me.addEventListener("click", suber_clicks);
			 }
			
		 }
		 
		 function suber_clicks(event){
			 scriptHandler();
			 console.log(i);
			 if(i==2){
				 arrow.play();
				 baby.play();
			 }
		 }
		 
		 function scriptHandler(){
			 if(a<messages[i].length){
				 a=messages[i].length;
				 console.log("Skipping..  "+i+"/"+(messages.length-1));
			 }else if(i<messages.length-1){
				i++;
				a=0;
			 }
		 }
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30).call(this.frame_30).wait(32));

	// Layer 2
	this.skull = new lib.test();
	this.skull.setTransform(217.4,-339.4,1,1,0,0,0,-7.6,20);

	this.tax_icon = new lib.tax_icon();
	this.tax_icon.setTransform(327.1,-339.4,1,1,0,0,0,20,20);

	this.house_icon = new lib.house_icon_1();
	this.house_icon.setTransform(278.1,-339.4,1,1,0,0,0,20,20);

	this.say = new cjs.Text("", "14px 'Verdana'", "#CCCCCC");
	this.say.name = "say";
	this.say.lineHeight = 16;
	this.say.lineWidth = 374;
	this.say.setTransform(10,-139.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#539DA4").s().p("AgvACQAXgDAYAAQAZAAAXADg");
	this.shape.setTransform(258.8,-318.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.say},{t:this.house_icon},{t:this.tax_icon},{t:this.skull}]},30).to({state:[]},1).wait(31));

	// Layer 1
	this.instance = new lib.Tween3("synched",0);
	this.instance.setTransform(200,75);

	this.instance_1 = new lib.Tween4("synched",0);
	this.instance_1.setTransform(200,-75);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({y:74.9},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({y:74.3},0).wait(1).to({y:73.3},0).wait(1).to({y:71.8},0).wait(1).to({y:69.5},0).wait(1).to({y:66.2},0).wait(1).to({y:61.5},0).wait(1).to({y:54.5},0).wait(1).to({y:42.9},0).wait(1).to({y:15.8},0).wait(1).to({y:-37.1},0).wait(1).to({y:-53.8},0).wait(1).to({y:-62.2},0).wait(1).to({y:-67.4},0).wait(1).to({y:-70.7},0).wait(1).to({y:-72.8},0).wait(1).to({y:-74.1},0).wait(1).to({y:-74.8},0).to({_off:true},1).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({_off:false},0).wait(1).to({startPosition:0},0).wait(18).to({y:-74.6},0).wait(1).to({y:-73.3},0).wait(1).to({y:-70.8},0).wait(1).to({y:-66.3},0).wait(1).to({y:-58.5},0).wait(1).to({y:-43.1},0).wait(1).to({y:12.2},0).wait(1).to({y:51.3},0).wait(1).to({y:63.5},0).wait(1).to({y:69.6},0).wait(1).to({y:72.9},0).wait(1).to({y:74.5},0).wait(1).to({y:75},0).wait(1));

	// prompts
	this.no = new lib.Symbol5copy4();
	this.no.setTransform(213,-230.6,1,1,0,0,0,98,23.7);

	this.yes = new lib.Symbol5copy3();
	this.yes.setTransform(213,-262.4,1,1,0,0,0,98,23.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.yes},{t:this.no}]},30).to({state:[]},1).wait(31));

	// Layer 4
	this.topicBtn = new lib.leavecopy2();
	this.topicBtn.setTransform(302,-154.8,1,1,0,0,0,98,42.5);
	this.topicBtn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.topicBtn).wait(30).to({_off:false},0).to({_off:true},1).wait(31));

	// Layer 3
	this.leaveBtn = new lib.leave();
	this.leaveBtn.setTransform(302,-154.8,1,1,0,0,0,98,42.5);

	this.tray = new lib.trayy();
	this.tray.setTransform(425,-281.4,1,1,0,0,0,20,83.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.tray},{t:this.leaveBtn}]},30).to({state:[]},1).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,150);


// stage content:



(lib.TreasureTrail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.enableMouseOver(20);
		
		var menu = this.menu;
		var startBtn = this.startBtn;
		var board = this.board;
		var pheonix = this.pheonix;
		var cal = this.cal;
		var background = this.background;
		
		this.madeWill = false;
		this.beginSim = false;
		
		cal.visible = false;
		var me = this;
		this.startBtn.addEventListener("click", function (event) {
			menu.play();
			startBtn.play();
			board.play();
			pheonix.play();
		});
		
		this.startSim = startSim;
		function startSim(){
			console.log("Simulaiton Starting..");
			pheonix.play();
			board.play();
			background.play();
			me.beginSim = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.startBtn = new lib.StartButton();
	this.startBtn.setTransform(203.1,197,1,1,0,0,0,117.1,120.1);

	this.menu = new lib.menu();
	this.menu.setTransform(200,200,1,1,0,0,0,200,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.menu},{t:this.startBtn}]}).wait(1));

	// Layer 5
	this.contract = new lib.Symbol10();
	this.contract.setTransform(75.5,-13.5,1,1,0,0,0,18.5,18.5);

	this.board = new lib.board_1();
	this.board.setTransform(200,475,1,1,0,0,0,200,75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.board},{t:this.contract}]}).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(68,68,68,0.949)").s().p("A/UC+IAAl6MA+pAAAIAAF6g");
	this.shape.setTransform(199.5,17);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 4
	this.pheonix = new lib.pheonix();
	this.pheonix.setTransform(-87,148.1,0.879,0.879,0,0,0,99,127.5);

	this.timeline.addTween(cjs.Tween.get(this.pheonix).wait(1));

	// Layer 3
	this.background = new lib.Symbol12();
	this.background.setTransform(202,202,1,1,0,0,0,205,205);

	this.timeline.addTween(cjs.Tween.get(this.background).wait(1));

	// Layer 6
	this.cal = new lib.timeline();
	this.cal.setTransform(713.1,199.9,1,1,0,0,0,792,200.2);

	this.timeline.addTween(cjs.Tween.get(this.cal).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(26,168,1679.1,582);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;