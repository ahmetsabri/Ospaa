/*
 *  jquery-emojiRatings - v1.0.0
 *  Adds a simple rating input made of emojis
 *  http://jqueryemojiratings.com
 *
 *  Made by Geoff Ellerby
 *  Under MIT License
 */
!function(a,b,c,d){"use strict";function e(b,c){this.element=b,this.settings=a.extend({},k,c),this._defaults=k,this._name=i,this.init()}function f(a){return l[a]}function g(a){return a.indexOf("U+")<0&&(a=f(a)),"&#x"+a.slice(2)+";"}var h,i="emojiRating",j=!1,k={emoji:"U+2B50",count:5,fontSize:16,inputName:"rating",onUpdate:null},l={smile:"U+1F603",wink:"U+1F609",laughing:"U+1F606",blush:"U+1F60A",heart_eyes:"U+1F60D",kissing_heart:"U+1F618",heart:"U+2764",heart_with_arrow:"U+1F498",broken_heart:"U+1F494",tongue_out_wink:"U+1F61C",tongue_out_eyes_closed:"U+1F61D",angry:"U+1F620",crying:"U+1F622",scream:"U+1F631",pray:"U+1F64F",poo:"U+1F4A9",star:"U+2B50",thinking:"U+1F914",hugging:"U+1F917"};a.extend(e.prototype,{init:function(){h=a(this.element),this.count=0,this.setupStyles(),this.renderEmojis(),this.handleClick(),this.handleHover()},setupStyles:function(){var a="cursor:pointer;opacity:0.2;text-decoration:none;",b="font-size:"+this.settings.fontSize+"px;",c=".jqEmoji{"+a+b+"}";h.append("<style>"+c+"</style>")},renderEmojis:function(){for(var a,b=g(this.settings.emoji),c=this.settings.count,d="<div class='jqEmoji-container'>",e=0;c>e;e++)a="<span class='jqEmoji' data-index='"+e+"'>"+b+"</span>",d+=a;d+="</div>",h.append(d)},clearEmojis:function(){h.find(".jqEmoji").each(function(){a(this).css("opacity",.2)})},colorEmojis:function(a){this.clearEmojis();for(var b=0;a>b;b++)h.find(".jqEmoji").eq(b).css("opacity",1)},handleClick:function(){var b=this;h.on("click",".jqEmoji",function(){var c=a(this).data("index"),d=parseInt(c,10)+1;b.colorEmojis(d),b.count=d,j?b.updateInput(d):(b.appendInput(d),j=!0),a.isFunction(b.settings.onUpdate)&&b.settings.onUpdate.call(b,d)})},handleHover:function(){var b=this;h.on({mouseenter:function(){var c=parseInt(a(this).data("index"),10)+1;j||b.colorEmojis(c)},mouseleave:function(){j||b.clearEmojis()}},".jqEmoji")},appendInput:function(a){var b=this.settings.inputName,c="<input type='hidden' class='emoji-rating'",d=c+" name='"+b+"' value='"+a+"' />";h.append(d)},updateInput:function(a){var b=h.find("input.emoji-rating");b.val(a)}}),a.fn[i]=function(b){return this.each(function(){a.data(this,"plugin_"+i)||a.data(this,"plugin_"+i,new e(this,b))})}}(jQuery,window,document);