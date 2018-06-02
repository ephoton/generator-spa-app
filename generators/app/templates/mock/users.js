exports.default = [{
  path: '/tools/review/cases',
  method: 'get',
  result: {
    success: true,
    code: 123,
    message: 'hello',
    data: [{
      "query_id": "5AF1CE429D1C12A440D645A",
      "comment": "whatever",
      "golden": "whatever",
      "timestamp": "1526461697163",
      "date": "20180517",
      "speech_score": 3,
      "query": "打开哔哩哔哩",
      "parse_results": [{
        "intent": "打开(哔哩哔哩)",
        // “args” is string
        "args": '{"app": "哔哩哔哩", "pkg": "tv.danmaku.bili"}',
        "pkg": "tv.danmaku.bili",
        "label": 3
      }, {
        "intent": "打开(niconico)",
        "args": '{"app": "niconico", "pkg": "niconico.wtf"}',
        "pkg": "niconico.wtf",
        "label": 0
      }],
      "execute_result": "success",	// "success" or "fail"
      "model": "Mi_Note_3",
      "new_user": 1,
    }, {
      "query_id": "1235AF1CE429D1C12A440D645A",
      "comment": "whatever",
      "golden": "whatever",
      "timestamp": "1526461697163",
      "date": "20180517",
      "speech_score": 3,
      "query": "打开哔哩哔哩",
      "parse_results": [{
        "intent": "打开(哔哩哔哩)",
        // “args” is string
        "args": '{"app": "哔哩哔哩", "pkg": "tv.danmaku.bili"}',
        "pkg": "tv.danmaku.bili",
        "label": 3
      }, {
        "intent": "打开(niconico)",
        "args": '{"app": "niconico", "pkg": "niconico.wtf"}',
        "pkg": "niconico.wtf",
        "label": 0
      }],
      "execute_result": "success",	// "success" or "fail"
      "model": "Mi_Note_3",
      "new_user": 1,
    }, {
      "query_id": "0985AF1CE429D1C12A440D645A",
      "comment": "whatever",
      "golden": "whatever",
      "timestamp": "1526461697163",
      "date": "20180517",
      "speech_score": 3,
      "query": "打开哔哩哔哩",
      "parse_results": [{
        "intent": "打开(哔哩哔哩)",
        // “args” is string
        "args": '{"app": "哔哩哔哩", "pkg": "tv.danmaku.bili"}',
        "pkg": "tv.danmaku.bili",
        "label": 3
      }, {
        "intent": "打开(niconico)",
        "args": '{"app": "niconico", "pkg": "niconico.wtf"}',
        "pkg": "niconico.wtf",
        "label": 0
      }],
      "execute_result": "success",	// "success" or "fail"
      "model": "Mi_Note_3",
      "new_user": 1,
    }]
  }
}, {
  path: '/tools/review/cases',
  method: 'post',
  result: {
    success: true,
    code: 111,
    message: 'nice ',
    data: {}
  }
}, {
  path: '/tools/review/dates',
  method: 'get',
  result: {
    success: true,
    code: 12,
    message: '',
    data: [
      '20180511',
      '20180512',
      '20180513',
      '20180514',
      '20180515',
      '20180516',
      '20180517',
      '20180518'
    ]
  }
}, {
  path: '/tools/review/cases',
  method: 'post',
  result: {
    success: true,
    code: 111,
    message: 'nice ',
    data: {}
  }
}, {
  path: '/tools/review/search/cases/:id',
  method: 'get',
  result: {
    success: true,
    code: 111,
    message: 'nice ',
    data: {
      "query_id": "5AF1CE429D1C12A440D645A",
      "comment": "whatever",
      "golden": "whatever",
      "timestamp": "1526461697163",
      "date": "20180517",
      "speech_score": 3,
      "query": "打开哔哩哔哩",
      "parse_results": [{
        "intent": "打开(哔哩哔哩)",
        "args": '{"app": "哔哩哔哩", "pkg": "tv.danmaku.bili"}',
        "pkg": "tv.danmaku.bili",
        "label": 3
      }, {
        "intent": "打开(niconico)",
        "args": '{"app": "niconico", "pkg": "niconico.wtf"}',
        "pkg": "niconico.wtf",
        "label": 0
      }],
      "execute_result": "success",
      "model": "Mi_Note_3",
      "new_user": 1
    }
  }
}, {
  path: '/tools/review/search/filter',
  method: 'get',
  result: {
    success: true,
    code: 111,
    message: 'nice ',
    data: [{
      "query_id": "5AF1CE429D1C12A440D645A",
      "comment": "NI 开发者平台，提供定制化语音交互解决方案NI 开发者平台，提供定制化语音交互解决方案",
      "golden": "NI 开发者平台，提供定制化语音交互解决方案NI 开发者平台，提供定制化语音交互解决方案",
      "timestamp": "1526461697163",
      "date": "20180517",
      "speech_score": 3,
      "query": "NI 开发者平台，提供定制化语音交互解决方案, NI 开发者平台，提供定制化语音交互解决方案",
      "parse_results": [{
        "intent": "打开(哔哩哔哩)",
        "args": '{"app": "哔哩哔哩", "pkg": "tv.danmaku.bili"}',
        "pkg": "tv.danmaku.bili",
        "label": 3
      }, {
        "intent": "打开(niconico)",
        "args": '{"app": "niconico", "pkg": "niconico.wtf"}',
        "pkg": "niconico.wtf",
        "label": 0
      }],
      "execute_result": "success",
      "model": "Mi_Note_3",
      "new_user": 1
    }, {
      "query_id": "7125AF1CE429D1C12A440D645A",
      "comment": "whatever",
      "golden": "whatever",
      "timestamp": "1526461697163",
      "date": "20180517",
      "speech_score": 3,
      "query": "打开哔哩哔哩",
      "parse_results": [{
        "intent": "打开(哔哩哔哩)",
        "args": '{"app": "哔哩哔哩", "pkg": "tv.danmaku.bili"}',
        "pkg": "tv.danmaku.bili",
        "label": 2
      }, {
        "intent": "打开(niconico)",
        "args": '{"app": "niconico", "pkg": "niconico.wtf"}',
        "pkg": "niconico.wtf",
        "label": 0
      }],
      "execute_result": "success",
      "model": "Mi_Note_3",
      "new_user": 1
    }, {
      "query_id": "6125AF1CE429D1C12A440D645A",
      "comment": "whatever",
      "golden": "whatever",
      "timestamp": "1526461697163",
      "date": "20180517",
      "speech_score": 3,
      "query": "打开哔哩哔哩",
      "parse_results": [{
        "intent": "打开(哔哩哔哩)",
        "args": '{"app": "哔哩哔哩", "pkg": "tv.danmaku.bili"}',
        "pkg": "tv.danmaku.bili",
        "label": 0
      }, {
        "intent": "打开(niconico)",
        "args": '{"app": "niconico", "pkg": "niconico.wtf"}',
        "pkg": "niconico.wtf",
        "label": 0
      }],
      "execute_result": "success",
      "model": "Mi_Note_3",
      "new_user": 1
    }, {
      "query_id": "5125AF1CE429D1C12A440D645A",
      "comment": "whatever",
      "golden": "whatever",
      "timestamp": "1526461697163",
      "date": "20180517",
      "speech_score": 3,
      "query": "打开哔哩哔哩",
      "parse_results": [{
        "intent": "打开(哔哩哔哩)",
        "args": '{"app": "哔哩哔哩", "pkg": "tv.danmaku.bili"}',
        "pkg": "tv.danmaku.bili",
        "label": 1
      }, {
        "intent": "打开(niconico)",
        "args": '{"app": "niconico", "pkg": "niconico.wtf"}',
        "pkg": "niconico.wtf",
        "label": 0
      }],
      "execute_result": "success",
      "model": "Mi_Note_3",
      "new_user": 1
    }, {
      "query_id": "4125AF1CE429D1C12A440D645A",
      "comment": "whatever",
      "golden": "whatever",
      "timestamp": "1526461697163",
      "date": "20180517",
      "speech_score": 3,
      "query": "打开哔哩哔哩",
      "parse_results": [{
        "intent": "打开(哔哩哔哩)",
        "args": '{"app": "哔哩哔哩", "pkg": "tv.danmaku.bili"}',
        "pkg": "tv.danmaku.bili",
        "label": 3
      }, {
        "intent": "打开(niconico)",
        "args": '{"app": "niconico", "pkg": "niconico.wtf"}',
        "pkg": "niconico.wtf",
        "label": 0
      }],
      "execute_result": "success",
      "model": "Mi_Note_3",
      "new_user": 1
    }, {
      "query_id": "3125AF1CE429D1C12A440D645A",
      "comment": "whatever",
      "golden": "whatever",
      "timestamp": "1526461697163",
      "date": "20180517",
      "speech_score": 3,
      "query": "打开哔哩哔哩",
      "parse_results": [{
        "intent": "打开(哔哩哔哩)",
        "args": '{"app": "哔哩哔哩", "pkg": "tv.danmaku.bili"}',
        "pkg": "tv.danmaku.bili",
        "label": 3
      }, {
        "intent": "打开(niconico)",
        "args": '{"app": "niconico", "pkg": "niconico.wtf"}',
        "pkg": "niconico.wtf",
        "label": 0
      }],
      "execute_result": "success",
      "model": "Mi_Note_3",
      "new_user": 1
    }, {
      "query_id": "2125AF1CE429D1C12A440D645A",
      "comment": "whatever",
      "golden": "whatever",
      "timestamp": "1526461697163",
      "date": "20180517",
      "speech_score": 3,
      "query": "打开哔哩哔哩",
      "parse_results": [{
        "intent": "打开(哔哩哔哩)",
        "args": '{"app": "哔哩哔哩", "pkg": "tv.danmaku.bili"}',
        "pkg": "tv.danmaku.bili",
        "label": 3
      }, {
        "intent": "打开(niconico)",
        "args": '{"app": "niconico", "pkg": "niconico.wtf"}',
        "pkg": "niconico.wtf",
        "label": 0
      }],
      "execute_result": "success",
      "model": "Mi_Note_3",
      "new_user": 1
    }, {
      "query_id": "1125AF1CE429D1C12A440D645A",
      "comment": "whatever",
      "golden": "whatever",
      "timestamp": "1526461697163",
      "date": "20180517",
      "speech_score": 3,
      "query": "打开哔哩哔哩",
      "parse_results": [{
        "intent": "打开(哔哩哔哩)",
        "args": '{"app": "哔哩哔哩", "pkg": "tv.danmaku.bili"}',
        "pkg": "tv.danmaku.bili",
        "label": 3
      }, {
        "intent": "打开(niconico)",
        "args": '{"app": "niconico", "pkg": "niconico.wtf"}',
        "pkg": "niconico.wtf",
        "label": 0
      }],
      "execute_result": "success",
      "model": "Mi_Note_3",
      "new_user": 1
    }]
  }
}];

