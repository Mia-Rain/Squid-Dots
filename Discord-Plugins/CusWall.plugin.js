//META{"name":"CusWall"}*//
function CusWall(){};
CusWall.prototype.addToolbarItem = function(){
	document.querySelector('.appMount-3lHmkl').style.background = 'url("https://media.discordapp.net/attachments/739070489514868767/739724355029958686/clouds.png")';
};


CusWall.prototype.getName = function(){
    return "CusWall";
};
CusWall.prototype.getDescription = function(){
    return "Sets a custtom wall";
};
CusWall.prototype.getVersion = function(){
    return "1.1.0";
};
CusWall.prototype.getAuthor = function(){
    return "ThatGeekyWeeb";
};
CusWall.prototype.start = function(){
    this.addToolbarItem();
    console.log("CusWall loaded");
};
CusWall.prototype.stop = function(){
        document.querySelector('.appMount-3lHmkl').style.background = '';
        console.log("CusWall unloaded");
};

CusWall.prototype.onSwitch = function(){
    this.addToolbarItem();
};
