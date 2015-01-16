var cash = 1000;
var turns = 0;
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

	function Motorbike(name) {
		this.name = name;
	}
	Motorbike.prototype = new Vehicle(75, 12, 8, 14, 10, 10);

	function ArmoredCar(name) {
		this.name = name;
	}
	ArmoredCar.prototype = new Vehicle(125, 12, 20, 14, 6, 6);

	function ArmoredTruck(name) {
		this.name = name;
	}
	ArmoredTruck.prototype = new Vehicle(125, 12, 24, 10, 6, 6);

	function Tank(name) {
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
function Infantry(cost, level, attack, defense, speed, range, accuracy) {
		this.cost = cost;
		this.level = level;
		this.attack = attack;
		this.defense = defense;
		this.speed = speed;
		this.range = range;
		this.accuracy = accuracy;
		Infantry.instances++;
	}
	Infantry.instances = 0;
	function Rifleman(name) {
		this.name = name;
	} 
	Rifleman.prototype = new Infantry(25, 1, 10, 10, 10, 10, 10);
	function Heavy(name) {
		this.name = name;
	}
	Heavy.prototype = new Infantry(50, 1, 12, 15, 7, 10, 8);
	function Commander(name) {
		this.name = name;
	}
	Commander.prototype = new Infantry(75, 1, 6, 6, 15, 12, 15);
	function Flamethrower(name) {
		this.name = name;
	} 
	Flamethrower.prototype = new Infantry(75, 1, 20, 10, 9, 5, 10);
	function Sniper(name) {
		this.name = name;
	} 
	Sniper.prototype = new Infantry(100, 1, 15, 4, 7, 15, 15);
	function Mortar(name) {
		this.name = name;
	} 
	Mortar.prototype = new Infantry(100, 1, 15, 15, 0, 17, 9);
	function Aircraft(cost, level, attack, defense, speed, range, accuracy) {
		this.cost = cost;
		this.level = level;
		this.attack = attack;
		this.defense = defense;
		this.speed = speed;
		this.range = range;
		this.accuracy = accuracy;
		Aircraft.instances++;
	}
	Aircraft.instances = 0;
	function Paratrooper(name) {
		this.name = name;
	}
	Paratrooper.prototype = new Aircraft(75, 1, 12, 8, 14, 12, 8);
	function Helicopter(name) {
		this.name = name;
	}
	Helicopter.prototype = new Aircraft(150, 1, 12, 12, 14, 12, 10);
	function Airplane(name) {
		this.name = name;
	}
	Airplane.prototype = new Aircraft(175, 1, 16, 12, 12, 12, 10);
	function Bomber(name) {
		this.name = name;
	}
	Bomber.prototype = new Aircraft(200, 1, 20, 10, 12, 12, 10);