var ganttData = [
	{
		id: 1, 
		name: "ERP项目v1.0.0", 
		headerData:[
			{
				value:"10人",
			},
			{
				value:"20万元"
			}
		],
		series: [
			{ 
				name: "Planned", 
				start: new Date(2019,00,01), 
				end: new Date(2019,00,03) 
			},
			{ name: "Actual", start: new Date(2019,00,02), end: new Date(2019,00,05), color: "#f0f0f0" ,progress:10}
		]
	}, 
	{
		id: 2, name: "项目管理系统v2.1.0",headerData:[
			{
				value:"10人",
			},
			{
				value:"20万元"
			}
		], series: [
			{ name: "Planned", start: new Date(2019,00,05), end: new Date(2019,00,20) },
			{ name: "Actual", start: new Date(2019,00,06), end: new Date(2019,00,17), color: "#f0f0f0" ,progress:100}
		]
	}, 
	{
		id: 3, name: "化学实验1", headerData:[
			{
				value:"10人",
			},
			{
				value:"20万元"
			}
		],series: [
			{ name: "Planned", start: new Date(2019,00,11), end: new Date(2019,01,03) },
			{ name: "Actual", start: new Date(2019,00,15), end: new Date(2019,01,03), color: "#f0f0f0" ,progress:20}
		]
	}, 
	{
		id: 4, name: "机器视觉项目",headerData:[
			{
				value:"10人",
			},
			{
				value:"20万元"
			}
		], series: [
			{ name: "Planned", start: new Date(2019,01,01), end: new Date(2019,01,03) },
			{ name: "Actual", start: new Date(2019,01,01), end: new Date(2019,01,05), color: "#f0f0f0" ,progress:50}
		]
	},
	{
		id: 5, name: "xxxx设备调试", headerData:[
			{
				value:"10人",
			},
			{
				value:"20万元"
			}
		],series: [
			{ name: "Planned", start: new Date(2019,02,01), end: new Date(2019,03,20) },
			{ name: "Actual", start: new Date(2019,02,01), end: new Date(2019,03,26), color: "#f0f0f0" ,progress:80}
		]
	}, 
	{
		id: 6, name: "xxxx项目二期",headerData:[
			{
				value:"10人",
			},
			{
				value:"20万元"
			}
		], series: [
			{ name: "Planned", start: new Date(2019,00,05), end: new Date(2019,00,20) },
			{ name: "Actual", start: new Date(2019,00,06), end: new Date(2019,00,17), color: "#f0f0f0" ,progress:100}
		]
	}, 
	{
		id: 7, name: "xxxx项目二期",headerData:[
			{
				value:"10人",
			},
			{
				value:"20万元"
			}
		], series: [
			{ name: "Planned", start: new Date(2019,00,11), end: new Date(2019,01,03) }
		]
	}, 
	{
		id: 8, name: "xxxx项目三期", headerData:[
			{
				value:"10人",
			},
			{
				value:"20万元"
			}
		],series: [
			{ name: "Planned", start: new Date(2019,01,01), end: new Date(2019,01,03) },
			{ name: "Actual", start: new Date(2019,01,01), end: new Date(2019,01,05), color: "#f0f0f0" ,progress:44}
		]
	}
];