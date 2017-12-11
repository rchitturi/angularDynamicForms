/**
 * Created by Philip on 11/9/15.
 */
var config = require('./config.json');

module.exports = {
	API: [
		/**
		 *
		 	Sample API Configuration
			{
				url: config.API.PREFIX + "/language",	<-- URL path of API
				path: "lang/en.json",					<-- Path to actual json file relative to JSON folder in project folder
				method: "POST",							<-- Method Call
				headers: [								<-- configure custom header requirements for API call
					{
						"Accept-Language": "en"
					}
				],
				delay: "20-500" 						<-- accepts range "20-500" in ms or single integer value 2 = seconds
			}
		 */
		{
			url: config.API.PREFIX + "/user/profile",
			path: "profile.json",
			method: "GET",
			delay: "500-600"
		},
    {
      url: config.API.PREFIX + "/auth/login",
      path: "login.json",
      method: "POST",
      delay: "500-600"
    },
		{
			url: config.API.PREFIX + "/dma",
			path: "dma.json",
			method: "GET",
			delay: "500-600"
		},
		{
			url: config.API.PREFIX + "/franchise",
			path: "franchise.json",
			method: "GET",
			delay: "500-600"
		},
		{
			url: config.API.PREFIX + "/location/states",
			path: "states.json",
			method: "GET",
			delay: "500-600"
		},
		{
			url: config.API.PREFIX + "/ownershipTypes",
			path: "ownershipTypes.json",
			method: "GET",
			delay: "500-600"
		},
		{
			url: config.API.PREFIX + "/store/search",
			path: "restaurants.json",
			method: "POST",
			delay: "500-600"
		},
		{
			url: config.API.PREFIX + "/ip-addresses",
			path: "ip.json",
			method: "GET",
			param: [
				"isRootNodeQuery",
				"curentLevel",
				"parentLevel",
				"levelCode"
			],
			delay: "500-600"
		},
		{
			url: config.API.PREFIX + "/store/:storeId/map/:type",
			path: "maps",
			suffix: "type",
			method: "GET",
			delay: "500-600"
		},
		{
			url: config.API.PREFIX + "/store/:storeId/map/POS/override/:answer",
			path: "maps_pos",
			suffix: "answer",
			method: "GET",
			delay: "500-600"
		},
		{
			url: config.API.PREFIX + "/store/:storeId/map/process/start",
			path: "maps_start.json",
			method: "POST",
			delay: "500-600"
		},
		{
			url: config.API.PREFIX + "/store/:storeId/map/process/next",
			path: "maps_next1.json",
			method: "POST",
			delay: "500-600"
		},
		{
			url: config.API.PREFIX + "/store/:storeId/map/process/save",
			path: "maps_save.json",
			method: "POST",
			delay: "500-600"
		},
		{
			url: config.API.PREFIX + "/store/:storeId/map/process/reset",
			path: "maps_reset.json",
			method: "GET",
			delay: "500-600"
		},
		{
			url: config.API.PREFIX + "/bookmark",
			path: "bookmark.json",
			method: "GET",
			delay: "500-600"
		},
		{
			url: config.API.PREFIX + "/store/:storeId/map/compare",
			path: "compare.json",
			method: "GET",
			delay: "500-600"
		},
    {
        url: config.API.PREFIX + "/store/process/schedule",
        path: "schedule1.json",
        method: "PUT",
        delay: "500-600"
    },
    {
        url: config.API.PREFIX + "/store/process/schedule/delete",
        path: "schedule1.json",
        method: "PUT",
        delay: "500-600"
    },
    {
        url: config.API.PREFIX + "/store/process/schedule",
        path: "schedule.json",
        method: "GET",
        delay: "500-600"
    },
    {
        url: config.API.PREFIX + "/reports/config",
        path: "report_config.json",
        method: "GET",
        delay: "500-600"
    },
    {
        url: config.API.PREFIX + "/reports/configs",
        path: "report_config.json",
        method: "GET",
        delay: "500-600"
    },
    {
        url: config.API.PREFIX + "/reports/:id",
        path: "report",
        suffix: "id",
        method: "POST",
        delay: "500-600"
    },
    {
        url: config.API.PREFIX + "/store/:storeId/map/test/fileUpload",
        path: "upload_response.json",
        method: "POST",
        delay: "500-600"
    },
    {
        url: config.API.PREFIX + ":storeList/test/loadMultiplePOSFiles",
        path: "maps_multiple_POS.json",
        method: "POST",
        delay: "500-600"
    }
	]
};
