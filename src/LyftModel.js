import React from 'react';
<<<<<<< HEAD
=======
import data from './data/Data';
>>>>>>> d6dd61674ee539f8e3615f7b9aa2deb2b60c148e
import Utils from './Utils';

class LyftModel {
	constructor () {
		this.notify = null;
		this.userInfo = {
			name: null,
			surname : null,
			email : null,
			phone : null
		}
		this.properties = data.properties;
		this.activeProperty = data.properties[0]
		this.isRouting = false;
		this.targetPlace = null;
	}
	setUserInfo (info) {
		this.userInfo = info;
		//Utils.store('lyft', this.userInfo);
		this.notify();
	}

	subscribe (render) {
		this.notify = render;
	}
<<<<<<< HEAD
    
=======
	setActiveProperty (property) {
		this.activeProperty = property;
		this.notify();
	}
>>>>>>> d6dd61674ee539f8e3615f7b9aa2deb2b60c148e

	setTarget (targetPlace) {
		this.targetPlace  = targetPlace;
		this.notify();
	}

	setIsRouting ( ) {
		this.isRouting = true;
		this.notify();
	}
}
/*ReactDOM.render(<store />, document.getElementById("container"));*/

export default LyftModel;