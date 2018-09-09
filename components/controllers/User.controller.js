import props from "../utils/properties"

class UserController {
	
	doRegister(_params) {
		return fetch(props.user.register, {
				method: "POST",
				headers: {
					"Content-type": "application/json"
				},
				body: JSON.stringify(_params)
			})
			.then(r => r.json())
			.then(result => {
				return result
			})
			.catch(err => { return {error: err}})
	}
	doLogin(_params) {
		return fetch(props.user.login, {
				method: "POST",
				headers: {
					"Content-type": "application/json"
				},
				body: JSON.stringify(_params)
			})
			.then(r => r.json())
			.then(result => {
				return result
			})
			.catch(err => { return {error: err}})
	}
}

export default UserController