var cash = 1000;
var turns = 0;

function addTurns(turns) {
	var adding = prompt("Would you like to add a turn?");
	switch(adding.toLowerCase()) {
		case("yes") :
			turns++;
			break;
		default :
			break;
	};
	var hack = prompt("Do you want to input a code?");
	switch (hack) {
		case("9001"):
			units++;
			createGoku();
			break;
		case("S-117"):
			units++;
			createJohn();
			break;
		case("Dovahkin"):
			units++;
			createDragonborn();
			break;
		default:
			break;
	}
	//I need to add createGoku(), createJohn(), and createDragonborn().
}



function addMoney() {
	if (turns % 2 === 0) {
		cash += 100;
		break;
	}
}

var units = 0;

function Vehicle(cost, attack, hitPoints, speed, range, accuracy) {
	this.cost = cost;
	this.attack = attack;
	this.fullHP = hitPoints;
	this.hitPoints = hitPoints;
	this.speed = speed;
	this.range = range;
	this.accuracy = accuracy;
	this.hitPoints = this.hitPoints - attack;
	this.level = 1;
	this.healthPack = function() {
		cash -= 100;
		var oldHP = this.hitPoints;
		this.hitPoints += 25;
		if (this.hitPoints > oldHP) {
			this.hitPoints = this.fullHP;
		};
	units++
}

	function Motorbike() {
		this.name = name;
	}
	Motorbike.prototype = new Vehicle(75, 12, 8, 14, 10, 10);

	function ArmoredCar() {
		this.name = name;
	}
	ArmoredCar.prototype = new Vehicle(125, 12, 20, 14, 6, 6);

	function ArmoredTruck() {
		this.name = name;
	}
	ArmoredTruck.prototype = new Vehicle(125, 12, 24, 10, 6, 6);

	function Tank() {
		this.name = name;
	}
	Tank.prototype = new Vehicle(200, 20, 15, 5, 10, 10);

function Special(cost, range) {
	this.cost = cost;
	this.range = range;
}

	function Nuke() {
		this.attack = 70;
	}
	Nuke.prototype = new Special(3000, 70);
	
	function DeathLaser() {
		this.attack = 50;
	}
	DeathLaser.prototype = new Special(2000, 50);
	
	function ShieldGen() {
		this.hitPoints = 90;
	}
	ShieldGen.prototype = new Special(2000, 50);
	
	function RobotLander() {
		this.attack = 25;
	}
	RobotLander.prototype = new Special(500, 15);
	
	function Ordnance() {
		var chance = Math.floor(Math.random * 3);
		switch(chance) {
			case (0):
				this.weapon = "Rocket Launcher";
				break;
			case (1):
				this.weapon = "Sniper";
				break;
			case (2):
				this.weapon = "Machine Gun";
				break;
		};
	}
	Ordnance.prototype = new Special(150, 10);
	
	function CashExtractor() {
		cash += 500;
	}
	CashExtractor.prototype = new Special(150, 0);