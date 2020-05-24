
// alert("test");
const rocks = []

function rockObj(ypost,xpost) {
	//define properties
	this.name = "YOLO";
	this.xpost = xpost;
	this.ypost = ypost;

	//define passive actions
	this.rock = document.createElement("div");
	rocks.push(this.rock);
	this.rock.className = "rock";
	// this.rock.style.position = "relative";
	this.rock.style.top = this.ypost +"px";
	this.rock.style.left = this.xpost +"px";

	document.getElementById("GameWindow").appendChild(this.rock)
	
	//define methods
	this.rockDelete = function() {
		this.rock.remove()
		rocks.shift()
	}
	// setInterval( this.moveRock() , 1);

	//Other

}

function dodgerObj() {
	//define properties
	this.xpos = 230
	//define methods.
	this.dodger = document.createElement("div");
	this.dodger.id = "dodger";
	this.dodger.style.top = '480px';
	this.dodger.style.left = `${this.xpos}px`;
	document.getElementById("GameWindow").appendChild(this.dodger)

	this.moveDodgerRight = function() {
		if (this.xpos < 500) {
		this.xpos +=10
		this.dodger.style.left =`${this.xpos}px`
		}
	}

	this.moveDodgerLeft = function() {
		if (this.xpos > 0) {
			this.xpos -=10
			this.dodger.style.left =`${this.xpos}px`
		}
	}
}


function gameWindowObj() {
	this.name = "GameWindow"

	this.window = document.createElement("div");
	this.window.id = "GameWindow";

	document.getElementsByTagName('body')[0].appendChild(this.window)
}


//CREATE GAME WINDOW
var game = new gameWindowObj();
var dodger = new dodgerObj();
var dodger2 = new dodgerObj();

//CREATE ROCKS
function createRock() {
	var rock = new rockObj(-20,Math.floor(Math.random()*480));

	setInterval(function move() { 
		if (rock.ypost == 500) {
			clearInterval(createRock)
			rock.rockDelete();
		} else {
		rock.ypost +=1
		rock.rock.style.top = rock.ypost + "px";
		}
	},1)

	
}
// window.addEventListener('keydown', moveDodger)
window.addEventListener('keydown', action);
window.addEventListener('keydown', action1);

function action(e) {
	if (e.keyCode == 39) {
		//move right
		dodger.moveDodgerRight();
	} else if (e.keyCode == 37) {
		//move left
		dodger.moveDodgerLeft();
	}

}

function action1(e) {

	//move player 2
	if (e.keyCode == 65) {
		//move left
		dodger2.moveDodgerLeft();
	}

	else if (e.keyCode == 68) {
		//move left
		dodger2.moveDodgerRight();
	}

}

setInterval(createRock,6000)


