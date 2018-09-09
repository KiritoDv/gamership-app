import props from "../utils/properties"

class TournamentController {
	
	getTournaments(_params) {
		return fetch(props.user.tournaments, {
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

export default TournamentController