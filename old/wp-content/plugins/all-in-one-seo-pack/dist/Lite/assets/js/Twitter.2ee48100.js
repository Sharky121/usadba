import{T as r}from"./ToolsSettings.fc44d740.js";import{I as n,U as l}from"./Image.d7ae93cb.js";import{J as c}from"./JsonValues.08065e69.js";import{M as m}from"./MaxCounts.5a7ca2fd.js";import{n as u}from"./vueComponentNormalizer.58b0a173.js";import{e as g,a as p}from"./index.f5a89b52.js";import{B as d}from"./Img.a4f31f70.js";import{B as _}from"./RadioToggle.18d51233.js";import{C as f}from"./index.d42c878d.js";import{C as h}from"./Card.9d319c36.js";import{C as w}from"./HtmlTagsEditor.967fcae2.js";import{C as $}from"./SettingsRow.8a127375.js";import{C as y}from"./TwitterPreview.9a551bc8.js";import{S as T}from"./Plus.6ec3819c.js";import"./attachments.8194ef98.js";import"./cleanForSlug.788b395f.js";import"./isArrayLikeObject.5268a676.js";import"./constants.9efee5f7.js";import"./default-i18n.0e73c33c.js";import"./Index.c9d66bbe.js";import"./client.d00863cc.js";import"./_commonjsHelpers.10c44588.js";import"./translations.3bc9d58c.js";import"./portal-vue.esm.272b3133.js";import"./Tooltip.a1ab116b.js";import"./Slide.8aaa5049.js";import"./Editor.9de10f9e.js";import"./UnfilteredHtml.6a533d31.js";import"./Row.dfea53f7.js";import"./dannie-profile.e0152a9f.js";import"./Book.7d439a03.js";var v=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"aioseo-twitter"},[e("core-card",{attrs:{slug:"twitter","header-text":t.strings.twitterCardSettings}},[e("div",{staticClass:"aioseo-settings-row aioseo-section-description"},[t._v(" "+t._s(t.strings.description)+" "),e("span",{domProps:{innerHTML:t._s(t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"twitter",!0))}})]),e("core-settings-row",{attrs:{name:t.strings.enableTwitterCard},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-toggle",{model:{value:t.options.social.twitter.general.enable,callback:function(s){t.$set(t.options.social.twitter.general,"enable",s)},expression:"options.social.twitter.general.enable"}})]},proxy:!0}])}),t.options.social.twitter.general.enable?e("core-settings-row",{staticClass:"default-card-type",attrs:{name:t.strings.defaultCardType,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-select",{attrs:{size:"medium",options:t.twitterCards,value:t.getCardOptions(t.options.social.twitter.general.defaultCardType)},on:{input:function(s){return t.options.social.twitter.general.defaultCardType=s.value}}})]},proxy:!0}],null,!1,4142204625)}):t._e(),t.options.social.twitter.general.enable?e("core-settings-row",{staticClass:"twitter-default-image-source",attrs:{name:t.strings.defaultImageSourcePosts,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-select",{attrs:{size:"medium",options:t.imageSourceOptions,value:t.getImageSourceOption(t.options.social.twitter.general.defaultImageSourcePosts)},on:{input:function(s){return t.options.social.twitter.general.defaultImageSourcePosts=s.value}}})]},proxy:!0}],null,!1,3131312444)}):t._e(),t.options.social.twitter.general.enable&&t.options.social.twitter.general.defaultImageSourcePosts==="custom"?e("core-settings-row",{attrs:{name:t.strings.postCustomFieldName,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-input",{attrs:{size:"medium"},model:{value:t.options.social.twitter.general.customFieldImagePosts,callback:function(s){t.$set(t.options.social.twitter.general,"customFieldImagePosts",s)},expression:"options.social.twitter.general.customFieldImagePosts"}})]},proxy:!0}],null,!1,3337947198)}):t._e(),t.options.social.twitter.general.enable?e("core-settings-row",{staticClass:"twitter-image",attrs:{name:t.strings.defaultTwitterImagePosts,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("div",{staticClass:"twitter-image-upload"},[e("base-input",{attrs:{size:"medium",placeholder:t.strings.pasteYourImageUrl},model:{value:t.options.social.twitter.general.defaultImagePosts,callback:function(s){t.$set(t.options.social.twitter.general,"defaultImagePosts",s)},expression:"options.social.twitter.general.defaultImagePosts"}}),e("base-button",{staticClass:"insert-image",attrs:{size:"medium",type:"black"},on:{click:function(s){t.openUploadModal("defaultImagePosts",function(i){return t.options.social.twitter.general.defaultImagePosts=i})}}},[e("svg-circle-plus"),t._v(" "+t._s(t.strings.uploadOrSelectImage)+" ")],1),e("base-button",{staticClass:"remove-image",attrs:{size:"medium",type:"gray"},on:{click:function(s){t.options.social.twitter.general.defaultImagePosts=null}}},[t._v(" "+t._s(t.strings.remove)+" ")])],1),e("div",{staticClass:"aioseo-description"},[t.options.social.twitter.general.defaultCardType==="summary"?e("span",[t._v(t._s(t.strings.minimumSizeSummary))]):t._e(),t.options.social.twitter.general.defaultCardType==="summary_large_image"?e("span",[t._v(t._s(t.strings.minimumSizeSummaryWithLarge))]):t._e()]),e("base-img",{attrs:{src:t.options.social.twitter.general.defaultImagePosts}})]},proxy:!0}],null,!1,3356147045)}):t._e(),t.options.social.twitter.general.enable?e("core-settings-row",{staticClass:"twitter-default-image-source",attrs:{name:t.strings.defaultImageSourceTerms,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[t.isUnlicensed?t._e():e("base-select",{attrs:{size:"medium",options:t.getTermImageSourceOptions(),value:t.getImageSourceOption(t.options.social.twitter.general.defaultImageSourceTerms)},on:{input:function(s){return t.options.social.twitter.general.defaultImageSourceTerms=s.value}}}),t.isUnlicensed?e("base-select",{attrs:{size:"medium",options:t.getTermImageSourceOptions(),value:t.getImageSourceOption("default"),disabled:""}}):t._e(),t.isUnlicensed?e("core-alert",{staticClass:"inline-upsell",attrs:{type:"blue"}},[e("div",{domProps:{innerHTML:t._s(t.strings.defaultTermImageSourceUpsell)}})]):t._e()]},proxy:!0}],null,!1,4034726477)}):t._e(),t.options.social.twitter.general.enable&&t.options.social.twitter.general.defaultImageSourceTerms==="custom"&&!t.isUnlicensed?e("core-settings-row",{attrs:{name:t.strings.termsCustomFieldName,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-input",{attrs:{size:"medium"},model:{value:t.options.social.twitter.general.customFieldImageTerms,callback:function(s){t.$set(t.options.social.twitter.general,"customFieldImageTerms",s)},expression:"options.social.twitter.general.customFieldImageTerms"}})]},proxy:!0}],null,!1,2341435720)}):t._e(),t.options.social.twitter.general.enable&&!t.isUnlicensed?e("core-settings-row",{staticClass:"twitter-image",attrs:{name:t.strings.defaultTwitterImageTerms,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("div",{staticClass:"twitter-image-upload"},[e("base-input",{attrs:{size:"medium",placeholder:t.strings.pasteYourImageUrl},model:{value:t.options.social.twitter.general.defaultImageTerms,callback:function(s){t.$set(t.options.social.twitter.general,"defaultImageTerms",s)},expression:"options.social.twitter.general.defaultImageTerms"}}),e("base-button",{staticClass:"insert-image",attrs:{size:"medium",type:"black"},on:{click:function(s){t.openUploadModal("defaultImageTerms",function(i){return t.options.social.twitter.general.defaultImageTerms=i})}}},[e("svg-circle-plus"),t._v(" "+t._s(t.strings.uploadOrSelectImage)+" ")],1),e("base-button",{staticClass:"remove-image",attrs:{size:"medium",type:"gray"},on:{click:function(s){t.options.social.twitter.general.defaultImageTerms=null}}},[t._v(" "+t._s(t.strings.remove)+" ")])],1),e("div",{staticClass:"aioseo-description"},[t.options.social.twitter.general.defaultCardType==="summary"?e("span",[t._v(t._s(t.strings.minimumSizeSummary))]):t._e(),t.options.social.twitter.general.defaultCardType==="summary_large_image"?e("span",[t._v(t._s(t.strings.minimumSizeSummaryWithLarge))]):t._e()]),e("base-img",{attrs:{src:t.options.social.twitter.general.defaultImageTerms}})]},proxy:!0}],null,!1,902467603)}):t._e(),t.options.social.twitter.general.enable?e("core-settings-row",{attrs:{name:t.strings.showTwitterAuthor,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-radio-toggle",{attrs:{name:"showTwitterAuthor",options:[{label:t.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:t.$constants.GLOBAL_STRINGS.yes,value:!0}]},model:{value:t.options.social.twitter.general.showAuthor,callback:function(s){t.$set(t.options.social.twitter.general,"showAuthor",s)},expression:"options.social.twitter.general.showAuthor"}})]},proxy:!0}],null,!1,536929787)}):t._e(),t.options.social.twitter.general.enable?e("core-settings-row",{attrs:{name:t.strings.additionalData,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-radio-toggle",{attrs:{name:"additionalData",options:[{label:t.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:t.$constants.GLOBAL_STRINGS.enabled,value:!0}]},model:{value:t.options.social.twitter.general.additionalData,callback:function(s){t.$set(t.options.social.twitter.general,"additionalData",s)},expression:"options.social.twitter.general.additionalData"}}),e("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.additionalDataDescription)+" ")])]},proxy:!0}],null,!1,4194794700)}):t._e(),t.options.social.twitter.general.enable?e("core-settings-row",{attrs:{name:t.strings.useDataFromFacebook,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-radio-toggle",{attrs:{name:"useOgData",options:[{label:t.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:t.$constants.GLOBAL_STRINGS.yes,value:!0}]},model:{value:t.options.social.twitter.general.useOgData,callback:function(s){t.$set(t.options.social.twitter.general,"useOgData",s)},expression:"options.social.twitter.general.useOgData"}}),e("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.useOgDataDescription)+" ")])]},proxy:!0}],null,!1,3629670821)}):t._e()],1),t.options.social.twitter.general.enable?e("core-card",{attrs:{slug:"twitterHomePageSettings","header-text":t.strings.homePageSettings}},[t.$aioseo.data.staticHomePage?e("div",{staticClass:"aioseo-settings-row aioseo-section-description"},[e("span",{domProps:{innerHTML:t._s(t.strings.homePageDisabledDescription)}}),t._v(" \xA0 "),e("span",{domProps:{innerHTML:t._s(t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"staticHomePageTwitter",!0))}})]):t._e(),t.$aioseo.data.staticHomePage?e("br"):t._e(),e("core-settings-row",{attrs:{name:t.$constants.GLOBAL_STRINGS.preview},scopedSlots:t._u([{key:"content",fn:function(){return[e("core-twitter-preview",{attrs:{image:t.options.social.twitter.homePage.image,card:t.options.social.twitter.homePage.cardType},scopedSlots:t._u([{key:"site-title",fn:function(){return[t.$aioseo.data.staticHomePage?e("span",{domProps:{innerHTML:t._s(t.truncate(t.parseTags(t.$aioseo.data.staticHomePageTwitterTitle||"#site_title"),100))}}):t._e(),t.$aioseo.data.staticHomePage?t._e():e("span",{domProps:{innerHTML:t._s(t.truncate(t.parseTags(t.options.social.twitter.homePage.title||"#site_title"),100))}})]},proxy:!0},{key:"site-description",fn:function(){return[t.$aioseo.data.staticHomePage?e("span",{domProps:{innerHTML:t._s(t.truncate(t.parseTags(t.$aioseo.data.staticHomePageTwitterDescription||"#tagline")))}}):t._e(),t.$aioseo.data.staticHomePage?t._e():e("span",{domProps:{innerHTML:t._s(t.truncate(t.parseTags(t.options.social.twitter.homePage.description||"#tagline")))}})]},proxy:!0}],null,!1,1448835471)})]},proxy:!0}],null,!1,1072122056)}),t.$aioseo.data.staticHomePage?t._e():e("core-settings-row",{staticClass:"default-card-type",attrs:{name:t.strings.cardType,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-select",{attrs:{size:"medium",options:t.twitterCards,value:t.getCardOptions(t.options.social.twitter.homePage.cardType)},on:{input:function(s){return t.options.social.twitter.homePage.cardType=s.value}}})]},proxy:!0}],null,!1,3610407505)}),t.$aioseo.data.staticHomePage?t._e():e("core-settings-row",{staticClass:"twitter-image",attrs:{name:t.strings.homePageImage,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("div",{staticClass:"twitter-image-upload"},[e("base-input",{attrs:{size:"medium",placeholder:t.strings.pasteYourImageUrl},model:{value:t.options.social.twitter.homePage.image,callback:function(s){t.$set(t.options.social.twitter.homePage,"image",s)},expression:"options.social.twitter.homePage.image"}}),e("base-button",{staticClass:"insert-image",attrs:{size:"medium",type:"black"},on:{click:function(s){t.openUploadModal("homePageImage",function(i){return t.options.social.twitter.homePage.image=i})}}},[e("svg-circle-plus"),t._v(" "+t._s(t.strings.uploadOrSelectImage)+" ")],1),e("base-button",{staticClass:"remove-image",attrs:{size:"medium",type:"gray"},on:{click:function(s){t.options.social.twitter.homePage.image=null}}},[t._v(" "+t._s(t.strings.remove)+" ")])],1),e("div",{staticClass:"aioseo-description"},[t.options.social.twitter.homePage.cardType==="summary"?e("span",[t._v(t._s(t.strings.minimumSizeSummary))]):t._e(),t.options.social.twitter.homePage.cardType==="summary_large_image"?e("span",[t._v(t._s(t.strings.minimumSizeSummaryWithLarge))]):t._e()]),e("base-img",{attrs:{src:t.options.social.twitter.homePage.image}})]},proxy:!0}],null,!1,1972909273)}),t.$aioseo.data.staticHomePage?t._e():e("core-settings-row",{attrs:{name:t.strings.homePageTitle},scopedSlots:t._u([{key:"content",fn:function(){return[e("core-html-tags-editor",{staticClass:"twitter-meta-input",attrs:{"line-numbers":!1,single:"","tags-context":"homePage","default-tags":["site_title","tagline","separator_sa"]},on:{counter:function(s){return t.updateCount(s,"titleCount")}},scopedSlots:t._u([{key:"tags-description",fn:function(){return[t._v(" "+t._s(t.strings.clickToAddHomePageTitle)+" ")]},proxy:!0}],null,!1,4162175994),model:{value:t.options.social.twitter.homePage.title,callback:function(s){t.$set(t.options.social.twitter.homePage,"title",s)},expression:"options.social.twitter.homePage.title"}}),e("div",{staticClass:"max-recommended-count",domProps:{innerHTML:t._s(t.maxRecommendedCount(t.titleCount,70))}})]},proxy:!0}],null,!1,1897915047)}),t.$aioseo.data.staticHomePage?t._e():e("core-settings-row",{attrs:{name:t.strings.homePageDescription},scopedSlots:t._u([{key:"content",fn:function(){return[e("core-html-tags-editor",{staticClass:"twitter-meta-input",attrs:{"line-numbers":!1,"tags-context":"homePage","default-tags":["site_title","tagline","separator_sa"]},on:{counter:function(s){return t.updateCount(s,"descriptionCount")}},scopedSlots:t._u([{key:"tags-description",fn:function(){return[t._v(" "+t._s(t.strings.clickToAddHomePageDescription)+" ")]},proxy:!0}],null,!1,3376949532),model:{value:t.options.social.twitter.homePage.description,callback:function(s){t.$set(t.options.social.twitter.homePage,"description",s)},expression:"options.social.twitter.homePage.description"}}),e("div",{staticClass:"max-recommended-count",domProps:{innerHTML:t._s(t.maxRecommendedCount(t.descriptionCount,200))}})]},proxy:!0}],null,!1,2511677049)})],1):t._e()],1)},P=[];const S={components:{BaseImg:d,BaseRadioToggle:_,CoreAlert:f,CoreCard:h,CoreHtmlTagsEditor:w,CoreSettingsRow:$,CoreTwitterPreview:y,SvgCirclePlus:T},mixins:[n,c,m,r,l],data(){return{titleCount:0,descriptionCount:0,option:null,pagePostOptions:[],strings:{twitterCardSettings:this.$t.__("Twitter Card Settings",this.$td),description:this.$t.__("Enable this feature if you want Twitter to display a preview card with images and a text excerpt when a link to your site is shared.",this.$td),enableTwitterCard:this.$t.__("Enable Twitter Card",this.$td),useDataFromFacebook:this.$t.__("Use Data from Facebook Tab",this.$td),useOgDataDescription:this.$t.__("Choose whether you want to use the OG data from the Facebook tab in your individual pages/posts by default.",this.$td),defaultCardType:this.$t.__("Default Card Type",this.$td),summary:this.$t.__("Summary",this.$td),summaryLarge:this.$t.__("Summary with Large Image",this.$td),defaultImageSourcePosts:this.$t.__("Default Post Image Source",this.$td),defaultImageSourceTerms:this.$t.__("Default Term Image Source",this.$td),width:this.$t.__("Width",this.$td),height:this.$t.__("Height",this.$td),postCustomFieldName:this.$t.__("Post Custom Field Name",this.$td),termsCustomFieldName:this.$t.__("Term Custom Field Name",this.$td),defaultTwitterImagePosts:this.$t.__("Default Post Twitter Image",this.$td),defaultTwitterImageTerms:this.$t.__("Default Term Twitter Image",this.$td),uploadOrSelectImage:this.$t.__("Upload or Select Image",this.$td),pasteYourImageUrl:this.$t.__("Paste your image URL or select a new image",this.$td),minimumSizeSummary:this.$t.__("Minimum size: 144px x 144px, ideal ratio 1:1, 5MB max. JPG, PNG, WEBP and GIF formats only.",this.$td),minimumSizeSummaryWithLarge:this.$t.__("Minimum size: 300px x 157px, ideal ratio 2:1, 5MB max. JPG, PNG, WEBP and GIF formats only.",this.$td),homePageSettings:this.$t.__("Home Page Settings",this.$td),homePageImage:this.$t.__("Home Page Image",this.$td),homePageTitle:this.$t.__("Home Page Title",this.$td),useHomePageTitle:this.$t.__("Use the home page title",this.$td),clickToAddHomePageTitle:this.$t.__("Click on the tags below to insert variables into your home page title.",this.$td),homePageDescription:this.$t.__("Description",this.$td),useHomePageDescription:this.$t.__("Use the home page description",this.$td),clickToAddHomePageDescription:this.$t.__("Click on the tags below to insert variables into your description.",this.$td),remove:this.$t.__("Remove",this.$td),showTwitterAuthor:this.$t.__("Show Twitter Author",this.$td),homePageDisabledDescription:this.$t.sprintf(this.$t.__("You are using a static home page which is found under Pages. You can %1$sedit your home page settings%2$s directly to change the title, meta and image.",this.$td),`<a href="${this.$aioseo.urls.staticHomePage}">`,"</a>"),cardType:this.$t.__("Card Type",this.$td),additionalData:this.$t.__("Additional Data",this.$td),additionalDataDescription:this.$t.__("Enable this option to show additional Twitter data on your posts and pages (i.e., who the post was written by and how long it might take to read the article).",this.$td),defaultTermImageSourceUpsell:this.$t.sprintf(this.$t.__("Default Term Image Source is only available for licensed %1$s users. %2$s",this.$td),"<strong>AIOSEO Pro</strong>",this.$links.getUpsellLink("general-facebook-settings",this.$constants.GLOBAL_STRINGS.learnMore,"default-term-image-soruce",!0))}}},computed:{...g(["isUnlicensed"]),...p(["options"]),twitterCards(){return[{label:this.strings.summary,value:"summary"},{label:this.strings.summaryLarge,value:"summary_large_image"}]}},methods:{getCardOptions(t){return this.twitterCards.find(a=>a.value===t)}}},o={};var b=u(S,v,P,!1,C,null,null,null);function C(t){for(let a in o)this[a]=o[a]}const it=function(){return b.exports}();export{it as default};