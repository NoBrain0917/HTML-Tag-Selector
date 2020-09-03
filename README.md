# HTML Tag Selector (such as jsoup)
HTML Tag Selector 는
```cheerio```가 어려운 당신에게, 또는 다른 엔진을 쓰는 당신에게
조금 더 편리하게 데이터를 가져오게 도와줍니다.

`Jsoup`의 `select`와 비슷한 형식으로
HTML 태그를 가져옵니다.

```javascript
const tagSelector = require("tagSelector.js");

var ts = tagSelector.tagSelect(HTML);
  //select 방식
  ts.select("div");//또는
  ts.select("li.nav_item");//또는
  ts.select("span class=bold");//또는
  ts.select("span[class=blind]");//이런식으로 사용 가능

  ts.select(TAG).get(INDEX).text();//INDEX 번째 줄에 글자만 불러옴
```
