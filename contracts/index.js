const distribution = require("./migrations/distro.json")
const contracts = require("./contracts.json")
const rewards = require("./vlcvx_token_rewards.json")

const findPool = function (key) {
    for(const pool of contracts.pools) {
        for(const element of pool) {
	    if(element == key) {
		return pool;
	    }
	}
    }
}

const utils = { findPool }

const version = "1.2.0"

module.exports = { version, utils, distribution , contracts, rewards }