//META{"name":"Anti-Parency"}*//
function channelCollapseButton(){};
channelCollapseButton.prototype.addToolbarItem = function(){
	if(document.querySelectorAll('.wall-trans').length == 0) {
	var newToolbarItem = document.createElement('span');
                newToolbarItem.classList.add('wall-transform');
                newToolbarItem.classList.add('active');
                newToolbarItem.classList.add(document.querySelector('[class*="toolbar"]').classList[0])
                newToolbarItem.style.width = '26px'
                newToolbarItem.style.position = 'relative'
                newToolbarItem.style.top = '-10px'
                newToolbarItem.style.display = 'flex'
                newToolbarItem.style.flexDirection = 'column'
                newToolbarItem.style.justifyContent = 'flex-start'
                newToolbarItem.style.cursor = 'pointer'
                newToolbarItem.style.paddingTop = '25px'
                newToolbarItem.innerHTML = '<span class="show-channels-button toolbar-1t6TWx active" style="width: 26px; position: relative; top: -2px; display: flex; flex-direction: column; justify-content: flex-start; cursor: pointer;"><span class="show-channels-button toolbar-1t6TWx" style="width: 26px;position: relative;top: -6px;display: flex;flex-direction: column;justify-content: flex-start;cursor: pointer;font-family: serif !important;"><span class="show-channels-button toolbar-1t6TWx active" style="position: relative;top: -2px;display: flex;flex-direction: column;justify-content: flex-start;cursor: pointer;padding-right: 30px;padding-bottom: 25px;"><span class="show-channels-button toolbar-1t6TWx active" style="position: initial;display: flex;flex-direction: column;justify-content: flex-start;cursor: pointer;"><span class="show-channels-button toolbar-1t6TWx active" style="position: absolute;display: flex;flex-direction: column;justify-content: flex-start;cursor: pointer;margin-bottom: 15px;"><span style="display: block;color: var(--text-normal);-webkit-transform: scale(2.0, 1.0);-moz-transform:scale(2.0, 1.0);-ms-transform:scale(2.0, 1.0);-o-transform:scale(2.0, 1.0);transform: scale(5,2);width: 0;height: 1px;text-align: center;">-</span><span style="display: block; color: var(--text-normal); -webkit-transform: scale(5.0, 1.0);-moz-transform:scale(2.0, 1.0);-ms-transform:scale(2.0, 1.0);-o-transform:scale(2.0, 1.0);transform: scale(5,2);width: 0;height: 19px;">-</span><span style="display: block; color: var(--text-normal); -webkit-transform: scale(2.0, 1.0);-moz-transform:scale(2.0, 1.0);-ms-transform:scale(2.0, 1.0);-o-transform:scale(2.0, 1.0);transform: scale(5,2);width: 0;padding-bottom: 5px;">-</span>';
                document.querySelector('.inner-MADQqc').insertBefore(newToolbarItem,document.querySelector('.attachWrapper-2TRKBi'));
	document.querySelector('.wall-transform').addEventListener('click',function(e){
                if(this.classList.contains('active')) {
                	document.querySelector('.appMount-3lHmkl').style.background = 'var(--background-accent)';
                                this.classList.toggle('active');
	} else {
                	document.querySelector('.appMount-3lHmkl').style.background = '';
                                this.classList.toggle('active');
	}
      });
  }
}

channelCollapseButton.prototype.getName = function(){
    return "Anti-Transparency";
};
channelCollapseButton.prototype.getDescription = function(){
    return "Prevents transparency with a button!";
};
channelCollapseButton.prototype.getVersion = function(){
    return "1.0.0";
};
channelCollapseButton.prototype.getAuthor = function(){
    return "Author: ThatGeekyWeeb";
};
channelCollapseButton.prototype.start = function(){
    this.addToolbarItem();
    console.log("channelCollapseButton loaded");
};
channelCollapseButton.prototype.stop = function(){
    if(document.querySelectorAll('.wall-trans').length) {
        document.querySelector('.wall-trans').outerHTML = "";
        delete document.querySelector('.wall-trans');
    }
    document.querySelector('.appMount-3lHmkl').style.background = '';
    this.classList.toggle('active');``
};
channelCollapseButton.prototype.load = function(){
    this.addToolbarItem();
};
channelCollapseButton.prototype.onSwitch = function(){
    this.addToolbarItem();
}
