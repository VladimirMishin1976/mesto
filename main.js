(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{x:()=>W});var t=document.querySelector(".page"),n=t.querySelector(".popup_place_profile"),r=document.forms["edit-profile"],o=r.elements.name,i=r.elements.about,a=n.querySelector(".popup__save"),c=t.querySelector(".profile__edit-button"),u=t.querySelector(".popup_place_add-card"),s=u.querySelector(".popup__save"),l=t.querySelector(".profile__add-button"),f=t.querySelector(".profile__aratar-pointer"),p=t.querySelector(".popup_place_avatar"),h=p.querySelector(".popup__save"),d=(document.forms["avatar-photo"].elements.link,{formSelector:".popup__container",inputSelector:".popup__input",submitButtonSelector:".popup__save",inactiveButtonClass:"popup__save_inactive",labelSelector:".popup__field",inputErrorSelector:".popup__input-error",inputTypeErrorClass:"popup__input_type_error",inputErrorActiveClass:"popup__input-error_active"});function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(t){var n=t.address,r=t.token;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._address=n,this._token=r}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._address,"/users/me"),{headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"editUserInfo",value:function(e){var t=e.name,n=e.about;return fetch("".concat(this._address,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t,about:n})}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._address,"/cards"),{headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"addCard",value:function(e){var t=e.name,n=e.link;return fetch("".concat(this._address,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t,link:n})}).then(this._checkResponse)}},{key:"removeCard",value:function(){return fetch("".concat(this._address,"/cards/").concat(this.elem._id),{method:"DELETE",headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"setCurrentElement",value:function(e){this.elem=e}},{key:"deleteLike",value:function(){return fetch("".concat(this._address,"/cards/likes/").concat(this.elem._id),{method:"Delete",headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"putLike",value:function(){return fetch("".concat(this._address,"/cards/likes/").concat(this.elem._id),{method:"PUT",headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"editAvatarPhoto",value:function(e){var t=e.link;return fetch("".concat(this._address,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:t})}).then(this._checkResponse)}}])&&_(t.prototype,n),e}();function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t){var n=t.item,r=t.selector,o=t.handleCardClick,i=t.handleTrashClick,a=t.handleLikeClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._card=document.querySelector(r).content.querySelector(".card").cloneNode(!0),this._imageCard=this._card.querySelector(".card__image"),this._captionCard=this._card.querySelector(".card__caption"),this._likeIcon=this._card.querySelector(".card__like"),this._trashCard=this._card.querySelector(".card__trash"),this.likeCount=this._card.querySelector(".card__like-count"),this.name=n.name,this.link=n.link,this._likeData=n.likes,this._id=n._id,this._idOwnerCard=n.owner._id,this.likeOwner=this._likeData.some((function(e){return e._id===W})),this._handleCardClick=o,this._handleTrashClick=i,this._handleLikeClick=a}var t,n;return t=e,(n=[{key:"addLike",value:function(e){this._likeIcon.classList.add("card__like_choosed"),this.likeCount.textContent=e}},{key:"deleteLike",value:function(e){this._likeIcon.classList.remove("card__like_choosed"),this.likeCount.textContent=e}},{key:"removeCard",value:function(){this._card.remove(),this._card=null}},{key:"_setEventListeners",value:function(){var e=this;this._likeIcon.addEventListener("click",(function(){return e._handleLikeClick()})),this._trashCard.addEventListener("click",(function(){return e._handleTrashClick()})),this._imageCard.addEventListener("click",(function(){return e._handleCardClick()}))}},{key:"createCard",value:function(){return this._idOwnerCard!==W&&this._trashCard.remove(),this.likeOwner?this.addLike():this.deleteLike(),this._imageCard.alt=this.name,this._imageCard.src=this.link,this._captionCard.textContent=this.name,this.likeCount.textContent=this._likeData.length,this._setEventListeners(),this._card}}])&&v(t.prototype,n),e}();function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var S=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._selectors=t,this._formElement=n}var t,n;return t=e,(n=[{key:"_showInputError",value:function(){var e=this._inputElement.closest(this._selectors.labelSelector).querySelector(this._selectors.inputErrorSelector);this._inputElement.classList.add(this._selectors.inputTypeErrorClass),e.textContent=this._inputElement.validationMessage,e.classList.add(this._selectors.inputErrorActiveClass)}},{key:"_hideInputError",value:function(){var e=this._inputElement.closest(this._selectors.labelSelector).querySelector(this._selectors.inputErrorSelector);this._inputElement.classList.remove(this._selectors.inputTypeErrorClass),e.classList.remove(this._selectors.inputErrorActiveClass),e.textContent=""}},{key:"_checkInputValidity",value:function(e){this._inputElement=e,this._inputElement.validity.valid?this._hideInputError():this._showInputError()}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.disabled=!0,this._buttonElement.classList.add(this._selectors.inactiveButtonClass)):(this._buttonElement.disabled=!1,this._buttonElement.classList.remove(this._selectors.inactiveButtonClass))}},{key:"_setEventListeners",value:function(){var e,t=this;this._inputList=function(e){if(Array.isArray(e))return b(e)}(e=this._formElement.querySelectorAll(this._selectors.inputSelector))||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),this._buttonElement=this._formElement.querySelector(this._selectors.submitButtonSelector),this._toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"resetError",value:function(){var e=this;this._inputList.forEach((function(t){e._inputElement=t,e._hideInputError()}))}}])&&k(t.prototype,n),e}();function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t){var n=t.renderer,r=t.containerSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=n,this._container=document.querySelector(r)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){return t._renderer(e)}))}}])&&C(t.prototype,n),e}();function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this._keyClosePopup="Escape"}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){e.key===this._keyClosePopup&&this.close()}},{key:"_handleOverlayClose",value:function(e){e.target===this._popup&&this.close()}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__close").addEventListener("click",(function(){return e.close()})),this._popup.addEventListener("click",(function(t){return e._handleOverlayClose(t)}))}}])&&g(t.prototype,n),e}();function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t,n){return(j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(r);if(o){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return I(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._imagePopup=t._popup.querySelector(".popup__img"),t._caption=t._popup.querySelector(".popup__img-caption"),t}return t=a,(n=[{key:"open",value:function(e,t){j(R(a.prototype),"open",this).call(this),this._imagePopup.src=t,this._imagePopup.alt=e,this._caption.textContent=e}}])&&L(t.prototype,n),a}(w);function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t,n){return(x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=D(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function U(e,t){return!t||"object"!==T(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(r);if(o){var n=D(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return U(this,e)});function a(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._handleFormSubmit=r,t._inputList=t._popup.querySelectorAll(".popup__input"),t}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())})),x(D(a.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){x(D(a.prototype),"close",this).call(this),this._popup.querySelector("form").reset()}},{key:"open",value:function(){this._inputList.forEach((function(e){return e.dispatchEvent(new Event("input"))})),x(D(a.prototype),"open",this).call(this)}}])&&A(t.prototype,n),a}(w);function J(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var z=function(){function e(t){var n=t.userNameSelector,r=t.userJobSelector,o=t.userAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userJob=document.querySelector(r),this.userAvatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,about:this._userJob.textContent,avatar:this.userAvatar}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,r=e.avatar,o=e._id;this._userName.textContent=t||this._userName.textContent,this._userJob.textContent=n||this._userJob.textContent,this.userAvatar.src=r||this.userAvatar.src,this._userId=o||this._userId}}])&&J(t.prototype,n),e}();function V(e){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function M(e,t,n){return(M="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=G(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function H(e,t){return(H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function $(e,t){return!t||"object"!==V(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function G(e){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var K=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=G(r);if(o){var n=G(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return $(this,e)});function a(e){var t,n=e.popupSelector,r=e.handleSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._handleSubmit=r,t}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit(),M(G(a.prototype),"close",e).call(e)})),M(G(a.prototype),"setEventListeners",this).call(this)}},{key:"removeCard",value:function(e){}}])&&F(t.prototype,n),a}(w);function Q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var W=0,X=new q(".popup_place_img");X.setEventListeners();var Y=function(e){var t=new m({item:e,selector:".template-card",handleCardClick:function(){X.open(t.name,t.link)},handleTrashClick:function(){Z.open(),ee.setCurrentElement(t)},handleLikeClick:function(){ee.setCurrentElement(t),t.likeOwner?ee.deleteLike().then((function(e){t.deleteLike(e.likes.length)})).catch((function(e){return console.error(e)})):ee.putLike().then((function(e){t.addLike(e.likes.length)})).catch((function(e){return console.error(e)}))}});return t.createCard(e)},Z=new K({popupSelector:".popup_place_trash-card",handleSubmit:function(){ee.removeCard().then((function(){ee.elem.removeCard()})).catch((function(e){return console.error(e)}))}});Z.setEventListeners();var ee=new y({address:"https://mesto.nomoreparties.co/v1/cohort-22",token:"1ffa7dc3-7c04-464d-a554-c3e498742c2a"});Promise.all([ee.getInitialCards(),ee.getUserInfo()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(t,n)||function(e,t){if(e){if("string"==typeof e)return Q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Q(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];W=i._id,te.renderItems(o),re.setUserInfo(i)})).catch((function(e){return console.error(e)}));var te=new E({renderer:function(e){te.addItem(Y(e))},containerSelector:".cards__list"}),ne=new N({popupSelector:".popup_place_add-card",handleFormSubmit:function(e){s.textContent="Сохранение...",ee.addCard(e).then((function(e){te.addItem(Y(e)),ne.close()})).catch((function(e){return console.error(e)})).finally((function(){s.textContent="Создать"}))}});ne.setEventListeners(),l.addEventListener("click",(function(){ne.open(),ce.resetError()}));var re=new z({userNameSelector:".profile__title",userJobSelector:".profile__subtitle",userAvatar:".profile__avatar"}),oe=new N({popupSelector:".popup_place_profile",handleFormSubmit:function(e){a.textContent="Сохранение...",ee.editUserInfo(e).then((function(){re.setUserInfo(e),oe.close()})).catch((function(e){return console.error(e)})).finally((function(){a.textContent="Сохранить"}))}});oe.setEventListeners(),c.addEventListener("click",(function(){var e=re.getUserInfo();o.value=e.name,i.value=e.about,oe.open()}));var ie=new N({popupSelector:".popup_place_avatar",handleFormSubmit:function(e){h.textContent="Сохранение...",ee.editAvatarPhoto(e).then((function(e){re.setUserInfo(e),ie.close()})).catch((function(e){return console.error(e)})).finally((function(){h.textContent="Сохранить"}))}});ie.setEventListeners(),f.addEventListener("click",(function(){ie.open(),ue.resetError()}));var ae=new S(d,n),ce=new S(d,u),ue=new S(d,p);ce.enableValidation(),ae.enableValidation(),ue.enableValidation()})();