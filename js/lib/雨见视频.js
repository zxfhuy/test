var rule={
	//模板: '自动',//
	//模板: 'vfed',
    title: 'yjsp',
	//host: 'http://yj.appss.cc/',
    host: 'http://yjsp.mxys8.com/',
	url: './index.php/vod/type/id/fyclassfyfilter.html',
	//url: './index.php/vod/type/id/fyfilter.html',
	filter_url:'/id/{{fl.cateId}}/letter/{{fl.letter}}/page/fypage/year/{{fl.year}}',///year
    searchUrl: '/index.php/vod/search/page/fypage/wd/**.html',
    searchable: 2,
    quickSearch: 0,
    filterable: 1,
	play_parse: true,
    headers: {
    'User-Agent': 'Mozilla/5.0',
    },
	//class_parse: '.hl-nav&&.hl-nav-item;a&&Text;a&&href;/(\\w+).html',
	class_name:"电视剧&电影库&综艺库&动漫库",
	class_url:"2&1&3&4&",
	lazy: '',
    limit: 6, 
    推荐: 'body&&.hl-list-item;a&&title;a&&data-original;.hl-pic-text&&Text;a&&href',
    //double: true,
    一级: 'body&&.hl-list-item;a&&title;a&&data-original;.hl-lc-1 remarks&&Text;a&&href',
    二级: {
    "title": ".hl-dc-title&&Text;span.hl-text-conch&&Text",
    "img": ".hl-lazy&&data-original",
    "desc": ".hl-col-xs-12:eq(5)&&Text;.hl-col-xs-12:eq(6)&&Text;.hl-col-xs-12:eq(2)&&Text;.hl-col-xs-12:eq(3)&&Text",
    "content": "li.hl-col-xs-12:eq(11)&&Text",
    "tabs": ".hl-tabs-btn",
    "lists": ".hl-plays-list:eq(#id) a"
          },
    搜索: 'body .hl-list-item;.hl-item-title&&Text;.hl-lazy&&data-original;.hl-lazy&&Text;a&&href;.hl-item-sub&&Text',
	tab_rename:{'HME高清':'酷影💠HME高清','FF高清':'酷影💠FF高清','BF高清':'酷影💠BF高清','LZ资源':'酷影💠LZ资源','YK高清':'酷影💠YK高清','MY蓝光1080P':'酷影💠MY蓝光1080P'},
    filter: 
    {
        "2": [ {"key": "year","name": "年份","value": 
			    [
				 {"n": "全部","v": "全部"},{"n": "2024","v": "2024"},{"n": "2023","v": "2023"},{"n": "2022","v": "2022"},
				 {"n": "2021","v": "2021"},
				 {"n": "2020","v": "2020"},{"n": "2019","v": "2019"},{"n": "2018","v": "2018"},{"n": "2017","v": "2017"},
				 {"n": "2016","v": "2016"},{"n": "2015","v": "2015"},{"n": "2014","v": "2014"},{"n": "2013","v": "2013"},
				 {"n": "2012","v": "2012"},{"n": "2011","v": "2011"},{"n": "2010","v": "2010"}
			    ]
			  },
			  {   "key":"letter","name":"字母","value":
			    [
				{"n": "全部","v": "全部"},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},
				{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},
				{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},
				{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},
				{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"},{"n": "0-9","v": "0-9"}
				]
			  }	
	       ],
        "1": [ {"key": "year","name": "年份","value": 
			     [
				 {"n": "全部","v": "全部"},{"n": "2024","v": "2024"},{"n": "2023","v": "2023"},{"n": "2022","v": "2022"},
				 {"n": "2021","v": "2021"},
				 {"n": "2020","v": "2020"},{"n": "2019","v": "2019"},{"n": "2018","v": "2018"},{"n": "2017","v": "2017"},
				 {"n": "2016","v": "2016"},{"n": "2015","v": "2015"},{"n": "2014","v": "2014"},{"n": "2013","v": "2013"},
				 {"n": "2012","v": "2012"},{"n": "2011","v": "2011"},{"n": "2010","v": "2010"}
			     ]
			   },
			   {"key":"letter","name":"字母","value":
			    [
				{"n":"全部","v":"全部"},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},
				{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},
				{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},
				{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},
				{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"},{"n": "0-9","v": "0-9"}
				]
			   }	
	        ],
        "3": [ {"key": "year","name": "年份","value": 
			     [
				 {"n": "全部","v": "全部"},{"n": "2024","v": "2024"},{"n": "2023","v": "2023"},{"n": "2022","v": "2022"},
				 {"n": "2021","v": "2021"},
				 {"n": "2020","v": "2020"},{"n": "2019","v": "2019"},{"n": "2018","v": "2018"},{"n": "2017","v": "2017"},
				 {"n": "2016","v": "2016"},{"n": "2015","v": "2015"},{"n": "2014","v": "2014"},{"n": "2013","v": "2013"},
				 {"n": "2012","v": "2012"},{"n": "2011","v": "2011"},{"n": "2010","v": "2010"}
			     ]
			   },
			    {"key":"letter","name":"字母","value":
			    [
				{"n":"全部","v":"全部"},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},
				{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},
				{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},
				{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},
				{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"},{"n": "0-9","v": "0-9"}
				]
			   }	
	        ],
        "4": [ {"key": "year","name": "年份","value": 
			     [
				 {"n": "全部","v": "全部"},{"n": "2024","v": "2024"},{"n": "2023","v": "2023"},{"n": "2022","v": "2022"},
				 {"n": "2021","v": "2021"},
				 {"n": "2020","v": "2020"},{"n": "2019","v": "2019"},{"n": "2018","v": "2018"},{"n": "2017","v": "2017"},
				 {"n": "2016","v": "2016"},{"n": "2015","v": "2015"},{"n": "2014","v": "2014"},{"n": "2013","v": "2013"},
				 {"n": "2012","v": "2012"},{"n": "2011","v": "2011"},{"n": "2010","v": "2010"}
			     ]
			    },
			   {"key":"letter","name":"字母","value":
			    [
				{"n":"全部","v":"全部"},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},
				{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},
				{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},
				{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},
				{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"},{"n": "0-9","v": "0-9"}
				]
			   }	
	         ]
    },
    filter_def: {
		2:{cateId:'2'},
		1:{cateId:'1'},
		3:{cateId:'3'},
		4:{cateId:'4'}
    },
    //class_parse: '.hl-nav-wrap&&ul&&li;a&&Text;a&&href;/(\\d+).html',
    //class_exclude:'留言|首页|',
}
