var shape = {
  type: '',
  getType: function() { return this.type; }
};

function Triangle(a, b, c) {
  this.type = 'triangle';
  this.a = a;
  this.b = b;
  this.c = c;
}

Triangle.prototype = shape; 
Triangle.prototype.constructor = Triangle; 
Triangle.prototype.type = 'triangle'; 


Triangle.prototype.getPerimeter = function() {
  return this.a + this.b + this.c;
};

for (var i in t) { 
    if (t.hasOwnProperty(i)) { 
      console.log(i, '=', t[i]); 
   } 
} 

Array.prototype.shuffle = function () { 
    return this.sort(function () { 
      return Math.random() - 0.5; 
    }); 
};