DOM Root Nodes:
document.documentElement => এটার মাধ্যমে আমরা HTML এর full Document কে Access করতে পারি।
document.head => এটার মাধ্যমে আমরা HTML document এর head Element কে Access করতে পারি।
document.body => এটার মাধ্যমে আমরা HTML document এর body Element কে Access করতে পারি।
document.write() =>
document.title => এটার মাধ্যমে আমরা HTML document এর title কে Access করতে পারি।
document.forms => এটার মাধ্যমে আমরা HTML document এ থাকা সকল forms কে পাতে পারি।
document.baseURI => এটার মাধ্যমে আমরা HTML document এর URL কে Access করতে পারি।
document.URL => এটার মাধ্যমে আমরা HTML document এর URL কে Access করতে পারি।
Finding/Selecting the HTML Elements:
getElementById(id)
=> getElementById() method এর মাধ্যমে আমরা সরাসরি HTML Document থেকে id যুক্ত কোন element কে Select বা find করতে পারি। আমরা জানি Html Document এ Id unique হয়ে থাকে। তাই আমরা একটা unique element কে Select করতে পারব। getElementById() এই method আমাদেরকে select করা সম্পূর্ণ Html element কে return করে থাকে।

getElementsByClassName(className)
=> getElementsByClassName() method এর মাধ্যমে আমরা সরাসরি HTML Document থেকে class যুক্ত কোন Elements কে Select বা find করতে পারি। আমরা জানি Html Document এ একই class name এর আন্ডারে অনেক Elements তাকতে পারে। তাই getElementsByClassName() method আমাদেরকে select করা সম্পূর্ণ Html elements গুলোর একটা HTML Collection return করে থাকে। যেটা মুলত একটা iterable object হয়ে থাকে। এইটার মধ্যে আমরা loop ব্যবহার করতে পারব। তবে এইটা কোন Array না তাই Array এর method গুলো এইখানে কাজ করবে না। একটি HTML Collection হল document element এর একটি সংগ্রহ।

getElementsByTagName(tagName)
=> getElementsByTagName() method এর মাধ্যমে আমরা সরাসরি HTML Document থেকে Tag গুলোকে Select বা find করতে পারি। আমরা জানি Html Document এ একই Tag Name যুক্ত অনেকগুলো Elements তাকতে পারে। তাই getElementsByTagName() method আমাদেরকে select করা সম্পূর্ণ Html elements গুলোর একটা HTML Collection return করে থাকে। যেটা মুলত একটা iterable object হয়ে থাকে। এইটার মধ্যে আমরা loop ব্যবহার করতে পারব। তবে এইটা কোন Array না তাই Array এর method গুলো এইখানে কাজ করবে না। একটি HTML Collection হল document element এর একটি সংগ্রহ।

querySelector()
=> querySelector() method এর মাধ্যমে আমরা HTML Element কে Select বা find করতে পারি। এইটাকে CSS Selector ও বলা হয়। কারণ এই method এর মধ্যে আমাদের CSS Selector এর মত করে argument পাঠাতে হয়। যেমন id যুক্ত element select করার সময় (#) এবং class যুক্ত elements select করার সময় (.) ব্যবহার করতে হবে। querySelector() এই method আমাদেরকে select করা সম্পূর্ণ Html element কে return করে থাকে।

querySelectorAll()
=> querySelectorAll() method, querySelector() method এর মত কাজ করে থাকে। তবে এদের মধ্যে পার্থক্য হচ্ছে querySelector() method শুধুমাত্র single element কে return করে থাকে কিন্তু querySelectorAll() method match হয়েছে এইরকম সকল HTML Elements কে একটা Nodelist আকারে return করে থাকে। এটাও HTML Collection এর মত একটা iterable object হয়ে থাকে। এইটার মধ্যে আমরা loop ব্যবহার করতে পারব। তবে এইটা কোন Array না তাই Array এর method গুলো এইখানে কাজ করবে না। একটি Nodelist Document Nodes এর একটি সংগ্রহ (element node, attribute node এবং text node)।

Note: Nodelist on the time update হয় না। কিন্তু HTML Collection on the time update হয়ে যায়।

Adding or Changing HTML Elements:
innerHTML
=> innerHTML property এর মাধ্যমে আমরা Selected Element এর ভিতরে থাকা children HTML Elements গুলোকে পেতে পারি এবং change বা update করতে পারি।

innerText
=> innerText property এর মাধ্যমে আমরা Selected Element এর ভিতরে থাকা text গুলোকে পেতে পারি এবং change বা update করতে পারি। তবে যদি CSS দ্বারা কোন element কে display করা না হয় অর্থাৎ Hidden রাখা হয় সেক্ষেত্রে innerText property এর মাধ্যমে আমরা সেই element এর Text কে পাব না। অর্থাৎ innerText property এর মাধ্যমে আমরা browser এ যা show করবে শুধুমাত্র সেই text গুলোকে পাব। Hidden Text গুলোকে পাব না।

textContent
=> textContent property এর মাধ্যমে আমরা Selected Element এর ভিতরে থাকা text গুলোকে পেতে পারি এবং change বা update করতে পারি। এইক্ষেত্রে যদি CSS দ্বারা কোন element কে display করা না হয় অর্থাৎ Hidden রাখা হয় সেই element এর Text কে আমরা পাব এই property এর মাধ্যমে।

Creating New HTML Element:
createElement(element)
=> createElement() method এর মাধ্যমে আমরা চাইলে নতুন একটা HTML element তৈরি করতে পারি। createElement() method একটি parameter accept করে থাকে। এই parameter এ কোন element টি তৈরি করতে হবে সেটার নাম বলে দিতে হবে। এটি return value হিসেবে একটি HTML element return করে থাকে।

createTextNode(data)
=> createTextNode() method এর মাধ্যমে আমরা একটা নতুন text Node তৈরি করতে পারি। এই method একটি parameter accept করে থাকে। Parameter হিসেবে একটি string পাঠাতে হবে। এটি return value হিসেবে একটি Text Node return করে থাকে।

setAttribute(name,value)
=> setAttribute() method এর মাধ্যমে আমরা select করা element এর মধ্যে attribute add করতে পারি। setAttribute() method দুইটি parameter accept করে থাকে। প্রথমটি হচ্ছে attribute name আর দ্বিতীয়টি হচ্ছে attribute value.

removeAttribute(name)
=> removeAttribute() method এর মাধ্যমে আমরা select করা element এর মধ্যে থাকা attribute remove করতে পারি। removeAttribute() method একটি parameter Accept করে থাকে। এই parameter এ কোন attribute টি remove করতে হবে সেটার নাম বলে দিতে হবে।

appendChild(aNode)
=> appendChild() method এর মাধ্যমে আমরা নির্দিষ্ট parent Node এর Children list এর সাথে একটা node যুক্ত করতে পারি। এই method শুধুমাত্র একটি parameter accept করে থাকে। Parameter হিসেবে একটি Node পাঠাতে হবে অর্থাৎ আমরা যেই Node টিকে append করতে চাই সেই node টি দিতে হবে। এটি return value হিসেবে append করা node টিকে return করে থাকে।

append(param1,param2,...)
=> append() method এর মাধ্যমে আমরা নির্দিষ্ট parent Node এর Children list এর সাথে এক বা একাধিক node object বা string object যুক্ত করতে পারি। এখানে string object Text Node হিসেবে যুক্ত হয়ে থাকে। অর্থাৎ প্রতিটা string একেকটা node হিসেবে যুক্ত হয়ে থাকে। এটি এক বা একাধিক parameter accept করে থাকে। parameter হিসেবে string বা element node পাঠাতে হবে। এটি কোন value return করে না।

Note: Parent Node cara baki sob node ke amra caile parent er child hisebe append korte pari.

cloneNode(deep)
=> cloneNode() method এর মাধ্যমে আমরা কোন একটা node কে চাইলে clone বা copy করতে পারি। এই method একটিমাত্র parameter accept করে থাকে। এই method parameter value হিসেবে Boolean value Accept করে থাকে। By default এটা false হয়ে থাকে। cloneNode() method by default শুধুমাত্র node টাকে clone করে থাকে অর্থাৎ node এর ভিতরে থাকা কোন node বা value কে clone করে না। আমরা যদি সম্পূর্ণ Node টাকে clone করতে চাই তাহলে parameter এর value হিসেবে true পাঠাতে হবে। এরপর return value হিসেবে আমরা সম্পূর্ণ Node টাকে পাব।

removeChild(Node)
=> removeChild() method এর মাধ্যমে আমরা parent element এর কোন child কে remove বা delete করে দিতে পারি। এই method একটি parameter accept করে থাকে এবং এটি required হয়ে থাকে। Parameter হিসেবে এটি একটি node কে accept করে থাকে। আমরা যেই node টিকে delete করতে চাই সেই node টি এই method এর parameter হিসেবে পাঠাতে হবে। এটি return value হিসেবে remove করা node টি return করে থাকে। remove করা node টি অবশ্যই parent node এর child হতে হবে তা না হলে এটা error প্রধান করবে।

remove()
=> remove() method এর মাধ্যমে আমরা DOM থেকে যেকোন element কে remove বা delete করে দিতে পারি। এটি কোন parameter accept করে না এবং কোন value ও return করে না। removeChild() এবং remove() method এর মধ্যে পার্থক্য হচ্ছে, removeChild() method ব্যবহার করা যায় parent element এর উপর এবং এর মধ্যে কোন child কে remove করব সেটা parameter হিসেবে পাঠাতে হয়। কিন্তু remove() method এর ক্ষেত্রে parent element এর প্রয়োজন পরে না যেই element কে delete করব শুধুমাত্র সেই element এর সাথে call করে দিলে element টি remove হয়ে যায়।

replaceChild(newChild, oldChild)
=> replaceChild() method এর মাধ্যমে আমরা previous old element কে new element দ্বারা replace করে দিতে পারি। এই method, দুইটি parameter accept করে থাকে। প্রথম parameter হিসেবে newElemt টি দিতে হবে যেই element টি আমরা relpace করতে চাই আর second parameter হিসেবে সেই element টি দিতে হবে যার উপর replace টি করতে চাই। এই method return value হিসেবে replace করা element কে return করে থাকে।

insertBefore(newNode, referenceNode)
=> insertBefore() method এর মাধমে আমরা কোন element এর আগে new element Add করতে পারি। আমরা append() method এর মাধমে যখন কোন element add করে থাকি তখন সেই element টি parent element এর child এর সবার শেষে গিয়ে add হয়ে থাকে। এখন insertBefore() method এর মাধ্যমে আমরা কোন element এর আগে যুক্ত করতে পারব। এই method দুইটি parameter accept করে থাকে। প্রথম parameter হিসেবে সেই node টি দিতে হবে যেটা আমরা add করতে চাই আর second parameter হিসেবে সেই node টি দিতে হবে যেটার আগে আমরা প্রথম parameter এর node টি বসাতে চাই। এইটা return value হিসেবে new Node কে return করে থাকে।

insertAdjacentElement(position, element)
=> insertAdjacentElement() method এর মাধমে আমরা কোন element এর বিভিন্ন position এর মধ্যে new element Add করতে পারি। এই method টি দুইটি parameter Accept করে থাকে। প্রথম parameter হিসেবে position টি বলে দিতে হবে অর্থাৎ যেই position এ আমরা new element টি Add করতে চাইছি সেটা বলে দিতে হবে। Second parameter হিসেবে new element টি দিতে হবে। position হিসেবে যেই string গুলো ব্যবহার করতে হবে সেগুলো হল:

'beforebegin' : এটি আমাদের target element এর আগে বা উপরে new element কে add করে থাকে।
'afterbegin' : এটি আমাদের target element এর মধ্যে first element/child হিসেবে new element কে add করে
থাকে। এটি অনেকটা append method এর মত কাজ করে থাকে।
'beforeend' : এটি আমাদের target element এর মধ্যে last element/child হিসেবে new element কে add করে থাকে।
'afterend' : এটি আমাদের target element এর পরে বা নিচে new element কে add করে থাকে।
classList.add(class1,class2 ...)
=> classList.add() method এর মাধ্যমে আমরা চাইলে element এর মধ্যে multiple class add করতে পারি।

classList.remove(class1,class2 ...)
=> classList.remove() method এর মাধ্যমে আমরা চাইলে element এর মধ্যে থাকা multiple class remove করতে পারি।

classList.toggle()
=> classList.add() ebong classList.remove() method er combination hocche toggle. eta babohar kora hoy kono event er sathe. zemon click event er sathe babohar korle protom click e class add hobe ditio click e class ti remove hoye jabe. ar porer kaj aibabe colthe takbe.

classList.replace(newClass, oldClass)
=> classList.replace() method এর মাধ্যমে আমরা কোন element এর old class কে new class দ্বারা replace করে দিতে পারি।

classList.contains(className)
=> classList.contains() method এর মাধ্যমে আমরা class list এর মধ্যে কোন class আছে কিনা সেটা খুজে বের করতে পারি। এটা আমাদের কে boolean value true অথবা false return করে থাকে।

classList.item(index)
=> classList.item() method এর মাধ্যমে আমরা index ধরে ধরে class গুলো পেতে পারি।

classList.length
=> classList.length properties এর মাধ্যমে আমরা কয়টা class আছে সেটার length টা পেতে পারি।

Add Properties into DOM Element
element.id = value element.className = value element.attribute = new value element.style.property = new style

Add Event:
Event Type:
onclick
ondblclick
onload
onchange
onfocus
onsubmit
onkeyup
onkeypress
onkeydown
onmouseover
onmouseout
onmousedown
onmouseup
onmouseenter
onmousemove
onmousewheel
onmouseleave
ondrag
ondragstart
ondragend
ondragleave
ondragenter
ondragover
ondrop
onselect
onscroll
onprogress
oninput
onfrominput
onfromchange
oncopy
oncut
onpaste
Event with EventListener
addEventListener(event, function, useCapture)
=> addEventListener() method এর মাধ্যমে আমরা কোন element এর মধ্যে javascript এর মাধ্যমে event Add করতে পারি। অর্থাৎ HTML এ কোন code না লিখে সরাসরি javascript এর মাধ্যমে element এর মধ্যে event Add করতে পারি। এই method টি তিনটি parameter Accept করে থাকে। প্রথম parameter হিসেবে পাঠাতে হয় event type, second parameter হিসেবে পাঠাতে হয় একটি function অর্থাৎ event টি ঘটলে কি কাজ করতে হবে সেটা আমরা এই function এর মাধ্যমে বলে দিতে পারি এবং তৃতীয় parameter হিসেবে boolean value true অথবা false পাঠাতে হয়। By default এটি false হয়ে থাকে। By default বা false অবস্থায় এটি Bubble up mode এ হয়ে থাকে। true অবস্থায় এইটা Capturing mode এ হয়ে থাকে।

Bubble up mode:
=> এটা by default একটা আচরণ হয়ে থাকে। আমরা যখন parent element কে event দিয়ে থাকি এবং তার মধ্যে তার child element কেউ event দিয়ে থাকি তখন যেটা হবে সেটা হল আমরা যখন child element কে click করব তখন এটা নিচে থেকে উপরের দিকে যত গুলো element এ event দেওয়া থাকবে সব গুলোকে fire বা call করে দিবে। এতে করে child এর সাথে সাথে parent element এর event গুলো ও একসাথে fire হয়ে থাকে। আর এইটা হয়ে থাকে bottom to up অর্থাৎ child থেকে parent এর দিকে। এইটা একটা by default আচরণ। যদিও এঈটা আমাদের কাছে একটা অদ্ভদ আচরণ মনে হচ্ছে কিন্তু এটার অনেক সুবিধা আছে। আবার আমরা চাইলে এই কাজটাকে বন্ধ ও করে দিতে পারি event method stopPropagation() এর মাধ্যমে।

Capture mode:
=> capture mode টা হচ্ছে bubble up এর বিপরীত। অর্থাৎ bubble up bottom থেকে top এ সকল element কে fire করে থাকে। আর capture mode top to bottom এ event গুলোকে fire করে থাকে। এখানে ekhane প্রথমে parent তারপর তার child এরপর তার child এভাবে করে chain আকারে event গুলো fire হয়ে থাকে।

Event Delegation
=> Event delegation হচ্ছে parent element এর event এর মাধ্যমে child element এর event গুলো handle করা। আমরা bubble up আচরণ সম্পর্কে জানি। আমরা জানি এই আচরণের জন্য child এর কোন element এর মধ্যে event fire করলে সেটা শেষ পর্যন্ত parent element এর event এর কাছে যাবে। তাহলে এখন আমরা parent element এর মধ্যে child element এর event কে handle করতে পারব। অর্থাৎ child এর কোন element এ event fire হয়েছে সেটা আমরা parent element এ catch করতে পারব। এতে করে আমাদের parent এ যদি আরও new child add হয়ে থাকে সেই ক্ষেত্রে তাদের event handle নিয়ে আমাদের কোন problem হবে না। কারণ আমরা parent element থেকে child এর সকল event handle করতে পারব।

removeEventListener()
=> removeEventListener() method এর মাধ্যমে আমরা কোন element এর মধ্যে থাকা event কে ওই element থেকে remove করে দিতে পারি।

DOM Navigation:
element.parentElement
element.parentNode
element.children
element.childNodes
element.childNodes[nodeNumber]
element.firstChild
element.lastChild
element.nextElementSibling
element.previousElementSibling
element.nextSibling
element.previousSibling
