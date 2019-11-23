(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 189,
	height: 47,
	fps: 24,
	color: "#0000CC",
	manifest: []
};



// symbols:



// stage content:
(lib.gif = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgJCoIAAiMQgbAjglAdQglAdguAWIgHgIQgEgHgDgCQBVgkBDhJIiTAAIAAgRICcAAIAAhkIiHAAIAAgQICHAAIAAgzIASAAIAAAzICKAAIAAAQIiKAAIAABkICcAAIAAARIiSAAQAeAjAmAaQAlAaAtARIgMARQhjgpgxhFIAACMgAMsCnIAAi4IhRAAQACBzg5BFQgGgGgLgHQAbgeANgsQANgsgBg5IAAh3QAjgCBugLIALgBIAGASIglAEQhGAHgjACIAABYICdAAIAAASIg6AAIAAC4gAEdChIgJgMQBMgOAqgUIhMggIAfgpIg2AAIAAgRIBCAAIAWgkIAUAHIgUAdICQAAIAAARIgvAAQgLAWgMASQgMASgNAMIARAHQAdAJAvATIgMARIgdgMQgugWgWgHQgWAPggAKQggALgqAIgAFZBNIBCAbQAOgLAMgQQAMgPAKgUIhXAAgAmECaQAkghASgyQASgxABg+IADgiIg3AAIAAgTIA3AAIAAgjIABgnIASAAIAABKIBdAAIAAARQgCBggDBVQgCAagNAOQgMANgYABIgsAAQgCgNgFgKIAwACQAQAAAJgIQAIgIABgRQAEhEABhvIhKAAIgBAjQAABAgTA0QgTA0gmAmgAtvCgQAUhDAPg6IASAIQgTBGgNA2gAsECmIAAinICyAAIAAB8QABASgJAJQgJAJgTABIgvABIgBgHIgDgLIAtAAQANABAGgGQAGgFgBgMIAAgOIiOAAIAAA7gAryBbICOAAIAAggIiOAAgAryArICOAAIAAgfIiOAAgAC6CPIAfACQALAAAFgEQAFgFgBgKIAAhmQgXAFgXAJIgDgVIAxgMIAAhVIgtAAIAAgRIAtAAIAAhGIASAAIAABGIAlAAIAAARIglAAIAABQIAmgIIACAIIAAAIIgoAKIAABsQABATgJAJQgJAKgSgBIgdABgAmLBvIh8AMIgIgQQALgJAHgRQANgbAehIIg9AAIAAgUIChAAIAAAUIhPAAQgaA/gcA5QAugCAzgGIgcg9IAQgHQAQAdAbA5IACAHIgSAHgAI6B5IAAkAIBgAAIAADcIhOAAIAAAkgAJMBFIA8AAIAAi7Ig8AAgApEgEIAAgfIjOAAIAAAfIgTAAIAAguIAfAAIAAhmIC0AAIAABmIAhAAIAAAugArzhmIBkAAIAAA0IAqAAIAAhVIiOAAgArzgyIBRAAIAAglIhRAAgAt3g3IALgMIA3ApIgOAPQgUgSgggagAA1gcIAwg1IAPALIgxA4gAhxhHIAOgMIAOAQQAUAWAKAOIgPANQgWgdgVgYgAEogYIAAgQICGAAQAVgdASgfIARAKIglAyIBPAAIAAAQgAFUhaIAPgKIAjAvIgRAKQgKgQgXgfgAtriVIANgMIA4AvIgOAOgAEzhpIAAgRIBrAAQgIgUgMgSIARgHIAVAmIgPAHIBkAAIAAARgAoAh2IAAgSICEAAIAAASg");
	mask.setTransform(92.4,24.7);

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.561)","#FFFFFF","#FFFFFF","rgba(255,255,255,0)"],[0,0.427,0.529,1],-39.2,-12.7,39.3,12.8).s().p("ArrPLMALJgiTIMOD+MgLJAiTg");
	this.shape.setTransform(-51.3,19.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0.533)","rgba(255,255,255,0.961)","#FFFFFF","rgba(255,255,255,0.047)","rgba(255,255,255,0)"],[0,0.416,0.525,0.98,1],-39.2,-12.7,39.3,12.8).s().p("ArrPLMALJgiTIMOD+MgLJAiTg");
	this.shape_1.setTransform(-29.3,21.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0.51)","rgba(255,255,255,0.925)","#FFFFFF","rgba(255,255,255,0.09)","rgba(255,255,255,0)"],[0,0.404,0.522,0.957,1],-39.2,-12.7,39.3,12.8).s().p("ArrPLMALJgiTIMOD+MgLJAiTg");
	this.shape_2.setTransform(-7.4,24);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0.482)","rgba(255,255,255,0.886)","#FFFFFF","rgba(255,255,255,0.137)","rgba(255,255,255,0)"],[0,0.392,0.514,0.937,1],-39.2,-12.7,39.3,12.8).s().p("ArrPLMALJgiTIMOD+MgLJAiTg");
	this.shape_3.setTransform(14.5,26.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0.459)","rgba(255,255,255,0.851)","#FFFFFF","rgba(255,255,255,0.18)","rgba(255,255,255,0)"],[0,0.38,0.51,0.914,1],-39.2,-12.7,39.3,12.8).s().p("ArrPLMALJgiTIMOD+MgLJAiTg");
	this.shape_4.setTransform(36.4,28.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,255,255,0.431)","rgba(255,255,255,0.812)","#FFFFFF","rgba(255,255,255,0.227)","rgba(255,255,255,0)"],[0,0.369,0.506,0.894,1],-39.2,-12.7,39.3,12.8).s().p("ArrPLMALJgiTIMOD+MgLJAiTg");
	this.shape_5.setTransform(58.4,30.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(255,255,255,0.408)","rgba(255,255,255,0.773)","#FFFFFF","rgba(255,255,255,0.275)","rgba(255,255,255,0)"],[0,0.353,0.502,0.871,1],-39.2,-12.7,39.3,12.8).s().p("ArrPLMALJgiTIMOD+MgLJAiTg");
	this.shape_6.setTransform(80.3,33);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(255,255,255,0.384)","rgba(255,255,255,0.737)","#FFFFFF","rgba(255,255,255,0.318)","rgba(255,255,255,0)"],[0,0.341,0.498,0.851,1],-39.2,-12.7,39.3,12.8).s().p("ArrPLMALJgiTIMOD+MgLJAiTg");
	this.shape_7.setTransform(102.2,35.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(255,255,255,0.357)","rgba(255,255,255,0.698)","#FFFFFF","rgba(255,255,255,0.365)","rgba(255,255,255,0)"],[0,0.329,0.494,0.827,1],-39.2,-12.7,39.3,12.8).s().p("ArrPLMALJgiTIMOD+MgLJAiTg");
	this.shape_8.setTransform(124.2,37.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(255,255,255,0.333)","rgba(255,255,255,0.663)","#FFFFFF","rgba(255,255,255,0.408)","rgba(255,255,255,0)"],[0,0.318,0.486,0.808,1],-39.2,-12.7,39.3,12.8).s().p("ArrPLMALJgiTIMOD+MgLJAiTg");
	this.shape_9.setTransform(146.1,39.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(255,255,255,0.306)","rgba(255,255,255,0.624)","#FFFFFF","rgba(255,255,255,0.455)","rgba(255,255,255,0)"],[0,0.306,0.482,0.784,1],-39.2,-12.7,39.3,12.8).s().p("ArrPLMALJgiTIMOD+MgLJAiTg");
	this.shape_10.setTransform(168,42);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(255,255,255,0.282)","rgba(255,255,255,0.588)","#FFFFFF","rgba(255,255,255,0.502)","rgba(255,255,255,0)"],[0,0.294,0.478,0.765,1],-39.2,-12.7,39.3,12.8).s().p("ArrPLMALJgiTIMOD+MgLJAiTg");
	this.shape_11.setTransform(190,44.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(255,255,255,0.255)","rgba(255,255,255,0.549)","#FFFFFF","rgba(255,255,255,0.545)","rgba(255,255,255,0)"],[0,0.282,0.475,0.745,1],-39.2,-12.7,39.3,12.8).s().p("ArrPLMALJgiTIMOD+MgLJAiTg");
	this.shape_12.setTransform(211.9,46.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(255,255,255,0.227)","rgba(255,255,255,0.51)","#FFFFFF","rgba(255,255,255,0.592)","rgba(255,255,255,0)"],[0,0.271,0.471,0.722,1],-39.2,-12.7,39.3,12.8).s().p("ArrPLMALJgiTIMOD+MgLJAiTg");
	this.shape_13.setTransform(233.8,48.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(255,255,255,0.204)","rgba(255,255,255,0.475)","#FFFFFF","rgba(255,255,255,0.635)","rgba(255,255,255,0)"],[0,0.259,0.463,0.702,1],-39.2,-12.7,39.3,12.8).s().p("ArrPLMALJgiTIMOD+MgLJAiTg");
	this.shape_14.setTransform(255.7,51);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(255,255,255,0.176)","rgba(255,255,255,0.435)","#FFFFFF","rgba(255,255,255,0.682)","rgba(255,255,255,0)"],[0,0.247,0.459,0.678,1],-39.2,-12.7,39.3,12.8).s().p("ArrPLMALJgiTIMOD+MgLJAiTg");
	this.shape_15.setTransform(277.7,53.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(255,255,255,0.153)","rgba(255,255,255,0.4)","#FFFFFF","rgba(255,255,255,0.725)","rgba(255,255,255,0)"],[0,0.235,0.455,0.659,1],-39.2,-12.7,39.3,12.8).s().p("ArrPLMALJgiTIMOD+MgLJAiTg");
	this.shape_16.setTransform(299.6,55.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(255,255,255,0.129)","rgba(255,255,255,0.361)","#FFFFFF","rgba(255,255,255,0.773)","rgba(255,255,255,0)"],[0,0.22,0.451,0.635,1],-39.2,-12.7,39.3,12.8).s().p("ArrPLMALJgiTIMOD+MgLJAiTg");
	this.shape_17.setTransform(321.5,57.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["rgba(255,255,255,0.102)","rgba(255,255,255,0.322)","#FFFFFF","rgba(255,255,255,0.82)","rgba(255,255,255,0)"],[0,0.208,0.447,0.616,1],-39.2,-12.7,39.3,12.8).s().p("ArrPLMALJgiTIMOD+MgLJAiTg");
	this.shape_18.setTransform(343.5,60);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(255,255,255,0.078)","rgba(255,255,255,0.286)","#FFFFFF","rgba(255,255,255,0.863)","rgba(255,255,255,0)"],[0,0.196,0.443,0.592,1],-39.2,-12.7,39.3,12.8).s().p("ArrPLMALJgiTIMOD+MgLJAiTg");
	this.shape_19.setTransform(365.4,62.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["rgba(255,255,255,0.051)","rgba(255,255,255,0.247)","#FFFFFF","rgba(255,255,255,0.91)","rgba(255,255,255,0)"],[0,0.184,0.435,0.573,1],-39.2,-12.7,39.3,12.8).s().p("ArrPLMALJgiTIMOD+MgLJAiTg");
	this.shape_20.setTransform(387.3,64.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(255,255,255,0.027)","rgba(255,255,255,0.212)","#FFFFFF","rgba(255,255,255,0.953)","rgba(255,255,255,0)"],[0,0.173,0.431,0.549,1],-39.2,-12.7,39.3,12.8).s().p("ArrPLMALJgiTIMOD+MgLJAiTg");
	this.shape_21.setTransform(409.2,66.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.173)","#FFFFFF","#FFFFFF","rgba(255,255,255,0)"],[0,0.161,0.427,0.529,1],-39.2,-12.7,39.3,12.8).s().p("ArrPLMALJgiTIMOD+MgLJAiTg");
	this.shape_22.setTransform(431.2,69);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = this.shape_20.mask = this.shape_21.mask = this.shape_22.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).wait(35));

	// Layer 6
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.698)").s().p("AgJCoIAAiMQgbAjglAdQglAdguAWIgHgIQgEgHgDgCQBVgkBDhJIiTAAIAAgRICcAAIAAhkIiHAAIAAgQICHAAIAAgzIASAAIAAAzICKAAIAAAQIiKAAIAABkICcAAIAAARIiSAAQAeAjAmAaQAlAaAtARIgMARQhjgpgxhFIAACMgAMsCnIAAi4IhRAAQACBzg5BFQgGgGgLgHQAbgeANgsQANgsgBg5IAAh3QAjgCBugLIALgBIAGASIglAEQhGAHgjACIAABYICdAAIAAASIg6AAIAAC4gAEdChIgJgMQBMgOAqgUIhMggIAfgpIg2AAIAAgRIBCAAIAWgkIAUAHIgUAdICQAAIAAARIgvAAQgLAWgMASQgMASgNAMIARAHQAdAJAvATIgMARIgdgMQgugWgWgHQgWAPggAKQggALgqAIgAFZBNIBCAbQAOgLAMgQQAMgPAKgUIhXAAgAmECaQAkghASgyQASgxABg+IADgiIg3AAIAAgTIA3AAIAAgjIABgnIASAAIAABKIBdAAIAAARQgCBggDBVQgCAagNAOQgMANgYABIgsAAQgCgNgFgKIAwACQAQAAAJgIQAIgIABgRQAEhEABhvIhKAAIgBAjQAABAgTA0QgTA0gmAmgAtvCgQAUhDAPg6IASAIQgTBGgNA2gAsECmIAAinICyAAIAAB8QABASgJAJQgJAJgTABIgvABIgBgHIgDgLIAtAAQANABAGgGQAGgFgBgMIAAgOIiOAAIAAA7gAryBbICOAAIAAggIiOAAgAryArICOAAIAAgfIiOAAgAC6CPIAfACQALAAAFgEQAFgFgBgKIAAhmQgXAFgXAJIgDgVIAxgMIAAhVIgtAAIAAgRIAtAAIAAhGIASAAIAABGIAlAAIAAARIglAAIAABQIAmgIIACAIIAAAIIgoAKIAABsQABATgJAJQgJAKgSgBIgdABgAmLBvIh8AMIgIgQQALgJAHgRQANgbAehIIg9AAIAAgUIChAAIAAAUIhPAAQgaA/gcA5QAugCAzgGIgcg9IAQgHQAQAdAbA5IACAHIgSAHgAI6B5IAAkAIBgAAIAADcIhOAAIAAAkgAJMBFIA8AAIAAi7Ig8AAgApEgEIAAgfIjOAAIAAAfIgTAAIAAguIAfAAIAAhmIC0AAIAABmIAhAAIAAAugArzhmIBkAAIAAA0IAqAAIAAhVIiOAAgArzgyIBRAAIAAglIhRAAgAt3g3IALgMIA3ApIgOAPQgUgSgggagAA1gcIAwg1IAPALIgxA4gAhxhHIAOgMIAOAQQAUAWAKAOIgPANQgWgdgVgYgAEogYIAAgQICGAAQAVgdASgfIARAKIglAyIBPAAIAAAQgAFUhaIAPgKIAjAvIgRAKQgKgQgXgfgAtriVIANgMIA4AvIgOAOgAEzhpIAAgRIBrAAQgIgUgMgSIARgHIAVAmIgPAHIBkAAIAAARgAoAh2IAAgSICEAAIAAASg");
	this.shape_23.setTransform(92.4,24.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(57));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(98.1,31.3,177.8,33.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;