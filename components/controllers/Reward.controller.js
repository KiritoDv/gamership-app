import props from "../utils/properties"

class RewardController {

	getRewards(email) {
		return fetch(props.user.rewards, {
			method: "POST",
			headers: {
				"Content-type": "application/json"
			},
			body: JSON.stringify({
				email: email
			})
		})
		.then(r => r.json())
		.then(result => {
			return result
		})
		.catch(err => { return {error: err}})
	}
}

export default RewardController