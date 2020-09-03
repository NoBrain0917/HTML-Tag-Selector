//TagSelector 생성
tagSelector = function(text) {
  this.text = text.replace(/\"/g,"").split("\n").map(a=>a.trim()).join("\n");
}

//SelectString 생성
selectString = function(select) {
  this.select = select;
}

//모든 html 지우기
selectString.prototype.text = function() {
  return this.replace(/(<([^>]+)>)/g, "").trim();
}

//문자열화
selectString.prototype.toString = function() {
  return String(this.select);
}

//태그 선택
tagSelector.prototype.select = function(classname) {
  let tag = classname;
  if(classname.includes("[")&&classname.includes("]")) {
    let clasz = classname.match(/\[(.*)\]/).pop().trim();
    tag = classname.match(/(.*)\[/).pop().trim();
    classname = tag + " "+clasz;
  } else if(classname.split(" ").length>1)  {
    tag = classname.split(" ")[0];
  } else if(classname.split(".").length==2) {
    tag = classname.split(".")[0];
    classname = tag + " class="+ classname.split(".")[1]
  }
  let result = [];
  let text = this.text;
  for(var n=0;n<text.split("<"+classname).length-1;n++){
    result.push("<"+classname+text.split("<"+classname)[n+1].split("</"+tag+">")[0]
    +"</"+tag+">");
  }
  this.text = result.join("\n");
  return this;
}

//인덱스에 있는 줄 가져오기
tagSelector.prototype.get = function(index){
  let line = this.text.split("\n");
  if(line.length<(index-2)) {
    throw new Error("The index is larger than the total size.");
  } else if(index<0) {
    throw new Error("Index cannot be negative.");
  } else if(index==null) {
    return selectString(this.text);
  } else {
    return selectString(line[index]);
  }
}

//문자열화
tagSelector.prototype.toString = function(){
  return String(this.text);
}

//크기 구하기
tagSelector.prototype.size = function(){
  return this.text.split("\n").length;
}

//모듈로 불러올때
module.exports.tagSelect = function(text){
  return new tagSelector(text);
}
