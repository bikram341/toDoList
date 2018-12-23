const method = process.argv[2];
const yargs = require('yargs').argv;

/*const title = yargs.title;
const body = yargs.body;*/
const {title,body} = yargs;

/*const readFile = require('./functions.js');
const showData = require('./functions.js');*/
const {readFile,showData,addData,clearAndAdd,checkUniqueAndAdd,deleteData} = require('./functions.js')

switch(method)
{
	case "Read":
		readFile();
		break;
	case "Show":
		showData(title);
		break;
	case "Write":
		addData(title,body);
		break;
	case "clearAdd":
		clearAndAdd(title,body);
		break;
	case "uniqueAdd":
		checkUniqueAndAdd(title,body);
		break;
	case "Delete":
		deleteData(title);
		break;
	default :
		console.log("Please choose correct method");
}
