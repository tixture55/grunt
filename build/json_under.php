<html>

<head>


</head>
<body>

<div class="hoge">テスト1</div>
<div>テスト2</div>
<div class="hoge">テスト3</div>
<div>テスト4</div>
<div>テスト5</div>


<script src="http://underscorejs.org/underscore-min.js"></script>
<script src="../js/goodnight/goodnight.min.js"></script>
<script src="../js/goodnight/goodnight.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>


<script>

(function() {
 var x;
 //x = _.shuffle([2,8,10,3]);
 x = _([2,8,10,3]).shuffle();
 //console.log(x);
 alert(x);
 })();

if(/abc/.test("asbcdefg") ){
	alert('aaa');
}

$('div').click(function(){
    if($(this).hasClass('hoge')){
        $(this).css('color','red');
    }
});

/* Cat雛形の作成 */

function Cat(name) {
  this.setName(name);
};
Cat.prototype = {
  setName: function(name) {
    this._name = name;
  },
/*
	extractRecipeIDFromURL : function(url){
      //url: http://store.nike.com/us/en_us/product/free-flyknit-id/?copbid=10699835&recipeid=345677
      var recipeID;
      var recipeReg =/recipeid=(\w+)/i;
      var matches = url.match(recipeReg);
      if(matches && matches.length){
        recipeID = matches[1];
      }
      return recipeID;
    },
*/
  loadPersonalization : function(){
      //var recipeID = this.CCService.extractRecipeIDFromURL(window.location.href);
      var recipeID = '865412';
      var commerceItemId = nike.util.UrlUtil.getParameter(window.location.href, 'commerceItemId');
      var pdpUrl;

      if(recipeID && !this.isConsumerChoiceLoaded){
        this.isConsumerChoiceLoaded = true;

        if(commerceItemId) {
          this.isdPidLoadedFromCart = true;
        }

        //remove recipeId from url after retreiving our personalization and update history
        pdpUrl = nike.util.UrlUtil.removeURLParameter(window.location.href, 'recipeid');
        nike.dispatchEvent(nike.gadget.Event.REPLACE_HISTORY_STATE, {query: pdpUrl, title: document.title});

        //load from cart
        return this.CCService.getPersonalization(recipeID);
      }
      return $.Deferred().reject('No recipeId returned');
    },
  walk: function() {
    console.log(this._name + 'が歩いてます');
  }
};

/* Catからオブジェクトを作成 */

var cat1 = new Cat('タマ');
var cat2 = new Cat('コタロー');
cat1.walk(); // タマが歩いています
cat2.walk(); // コタローが歩いています
cat1.loadPersonalization();






function doublePromise(value){
  return new Promise(function(fulfill,resolve){
    setTimeout(function(){
      fulfill(value*2);
    },5000);
  });
}

var p1 = Promise.resolve(4);
p1.then(function(result){
  return doublePromise(result);
})
.then(function(result){
  console.log("p2: ",result);
});


var xhr=new XMLHttpRequest();

xhr.open("GET","jbox.html");
xhr.send(null);
xhr.addEventListener("load",function(e){
  //console.log(xhr.status, xhr.responseText);
});

</script>

<?php

$a = 'additional';
$b = 'あがさたな';
$astr = strpos($a,0,2);
$bre = strrev($a);
echo $bre;
echo $astr;
echo $bre;
echo $bre;
echo $bre;
echo $bre;





