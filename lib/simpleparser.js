
function Builder()
{
	this.letter = letter;	
	this.digit = digit;
		
	this.seq = function() {
		var args = arguments;
		
		return function(text, position) {
			if (position == null)
				position = 0;
			var res = [];
			
			for (var n in args)
			{
				var element = args[n](text[position]);
				if (!element)
					return null;
				res.push(element);
				position+=length(element);
			}
			return res;
		};
	}
}

function length(element)
{
	if (!element)
		return 0;
	if (!Array.isArray(element))
		return element.length;
		
	var result = 0;
	
	for (n in element)
		result += length(element[n]);
	
	return result;
}

function letter(ch) {
	if (!ch || ch.length != 1)
		return null;
	if (ch >= 'A' && ch <= 'Z')
		return ch;
	if (ch >= 'a' && ch <= 'z')
		return ch;
	return null;
};

function digit(ch) {
	if (!ch || ch.length != 1)
		return null;
	if (ch >= '0' && ch <= '9')
		return ch;
	return null;
};

module.exports = exports = new Builder();

