
import React from 'react';
import Utils from './Utils';

class LyftModel {
	constructor () {
		this.notify = null;
		this.state = {
			name : 'name',
			email : 'email',
		}
	}
	subscribe (render) {
		this.notify = render;
	}
    

}
/*ReactDOM.render(<store />, document.getElementById("container"));*/

export default LyftModel;