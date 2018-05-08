function btnCalculate_onclick()
{
	// get textboxes and assign to variables
	var lengthTextbox = document.getElementById("txtLength");
	var widthTextbox = document.getElementById("txtWidth");
	var areaTextbox = document.getElementById("txtArea");
	var perimeterTextbox = document.getElementById("txtPerimeter");
	
	//getting value from user could be decimal or a whole number 
	var length = lengthTextbox.value;
	length = parseFloat(length);
	
	var width = widthTextbox.value;
	width = parseFloat(width);
	
	var area = areaTextbox.value;
	area = parseFloat(area);
	
	var perimeter = perimeterTextbox.value;
	perimeter = parseFloat(perimeter);
	
	
	// time for some perimeter and area calculations 
	
	area = (length * width);
	areaTextbox.value = area;
	
	perimeter = ((length + width) *2);
	perimeterTextbox.value = perimeter; 
	
	
}