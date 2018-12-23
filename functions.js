const fs = require('fs');

// read full file 
const readFile = () => {
	console.log('start reading file');
	const contents = JSON.parse(fs.readFileSync('./filedata.json'));
	console.log(contents);
}

// read file by title
const showData = (title) => {
	console.log('start read file then search the particular data');
	const contents = JSON.parse(fs.readFileSync('./filedata.json'));
	const data = contents.filter(x => x.title == title);
	console.log(data);
}

// add data in file
const addData = (title,body) => {
	console.log('starting add new object in file');
	const obj = {"title": title,"body": body};
	var contents = JSON.parse(fs.readFileSync('./filedata.json'));
	contents.push(obj);
	fs.writeFileSync('./filedata.json',JSON.stringify(contents));
}

// remove all data and put new data
const clearAndAdd = (title,body) => {
	console.log('starting remove all data in file and put new data');
	var obj = {"title":title,"body":body};
	let arr = [];
	arr.push(obj);
	fs.writeFileSync('./filedata.json',JSON.stringify(arr));
}

// check data is exists or not if not then add
const checkUniqueAndAdd = (title,body) => {
	console.log('start check data is exists or not tf not then add into file');
	const contents = JSON.parse(fs.readFileSync('./filedata.json'));
	const data = contents.filter(x => x.title == title);
	if(data.length>0)
	{
		console.log('Title already exists...');
	}
	else
	{
		let obj = {"title":title,"body":body};
		contents.push(obj);
		fs.writeFileSync('./filedata.json',JSON.stringify(contents));
		console.log('Added successfully..');
	}
}

// delete file
const deleteData = (title) => {
	console.log('start delting data');
	const contents = JSON.parse(fs.readFileSync('./filedata.json'));
	var array = [];
	for(var c in contents)
	{
		if(contents[c].title == title)
		{

		}
		else
		{
			array.push(contents[c]);
		}
	}
	const new_contents = JSON.stringify(array);
	fs.writeFileSync('./filedata.json',new_contents);
}

/*module.exports = readFile;
module.exports = showData;*/
module.exports = {readFile,showData,addData,clearAndAdd,checkUniqueAndAdd,deleteData}