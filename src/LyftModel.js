
import React from 'react';
import Utils from './Utils';

class LyftModel {
	constructor () {
		this.notify = null;

	}
	subscribe (render) {
		this.notify = render;
	}
    

}
/*ReactDOM.render(<store />, document.getElementById("container"));*/

export default LyftModel;