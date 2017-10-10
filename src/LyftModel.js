
import React from 'react';
import Utils from "./Utils.js";

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

export default LyftModel;