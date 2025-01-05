get Window Height and width with four properties:
**innerHeight** innerWidth **outerHeight** outerWidth innerHight এবং innerWidth এর মাধ্যমে আমরা Web page এর width এবং height পেতে পারি। outerHeight এবং outerWidth এর মাধ্যমে আমরা Browser এর width এবং height পেতে পারি। ----------------- ** ----------------

Open and Close Window with some Methods:
**open(URL, target, windowFeatures )** close() open() method এর মাধ্যমে আমরা browser এ new tab বা window open করতে পারি। এই method তিনটা parameter accept করে থাকে। url, target, windowFeatures । তিনটা parameter ই optional । কোন parameter ব্যবহার না করলে blank একটি tab browser এ open হবে। যদি url ব্যবহার করি সেক্ষেত্রে url টি new tab এ open হবে। ২য় parameter এ আমরা চাইলে target(_blank,_parent) বলে দিতে পারি। By Default target (_blank) হয়ে থাকে। (_parent) ব্যবহার করলে আমরা যেই tab এ থাকব সেই tab এই url টা open হবে। ৩য় parametter হিসেবে আমরা WindowFeatures গুলো দিতে পারি। WindowFeatures হিসেবে আমরা (width,height,top,left) এই property গুলো ব্যবহার করতে পারি। ৩য় parameter ব্যবহার করলে Url new tab এ open না হয়ে new Window তে open হয়ে থাকে। এছাড়া close() method এর মাধ্যমে আমরা open করা window টা close করে দিতে পারি। ----------------- ** ----------------

Window moveBy, moveTo and focus Method:
**moveBy(x,y)**moveTo(x,y) **focus() -----------------** ----------------

Window resizeBy and resizeTo Method:
**resizeBy (x,y)** resizeTo (x,y) ----------------- ** ----------------

Scrollbar Method:
**scrollBy(x,y);** scrollBy(options) scrollBy method দ্বারা আমরা কোন Element এর ভিতরের Scroll কে x ও y অক্ষ বরাবর নড়াচড়া করে পারি একটা নিদ্দির্ষ্ট length অনুসারে। এখানে value positive ব্যবহার করলে scroll সামনের দিকে অগ্রসর হবে আর Negetive ব্যবহার করলে scroll পিছনের দিকে অগ্রসর হবে। এই Method ব্যবহার করা হয় মূলত Javascript এর মাধ্যমে scroll কে handle করার জন্য । এখানে options হিসেবে আমরা এখানে একটি object পাঠাতে পারি যার মধ্যে আমরা তিনটি Property ব্যবহার করতে পারব। top(Y অক্ষ), left(x অক্ষ), behavior(animation style)। এখানে behavior এর Value হিসেবে আমরা তিনটি value ব্যবহার করতে পারব। auto, smooth, instant । এখানে auto হচ্ছে By Default । smooth হচ্ছে smothly animate হয়ে scroll করবে। আর instant হচ্ছে single jump দিবে।
Example:

scrollBy(0,50) => এটা 50px নিচের দিকে সরে যাবে।
scrollBy(0,-50) => এটা 50px উপরের দিকে সরে যাবে।
scrollBy(50,0) => এটা 50px ডান দিকে সরে যাবে।
scrollBy(-50,0) => এটা 50px বাম দিকে সরে যাবে।
scrollBy({top:100, left: 100, behavior: "smooth"}) ----------------- **----------------
Scrollbar Method:
**scrollTo(x,y); scrollTo() method এর মাধ্যমে আমরা Scroll Thumb কে x ও y অক্ষ বরাবর যেকোন জায়গা থেকে একটা নিদ্দিষ্ট জায়গার নিয়ে আসতে পারি। Example:

scrollTo(0,0) => এটা Scroll Thumb কে যেকোন জায়গা থেকে একেবারে শুরুতে নিয়ে আসবে।
scrollTo(0,50) => এটা Scroll Thumb কে y অক্ষ বরাবর যেকোন জায়গা থেকে শুরুর থেকে 50px দূরে নিয়ে আসবে।
scrollTo(50,0) => এটা Scroll Thumb কে x অক্ষ বরাবর যেকোন জায়গা থেকে শুরুর থেকে 50px দূরে নিয়ে আসবে।
----------------- **----------------
Scrollbar Property:
** scrollWidth **scrollHeight এই property গুলোর মাধ্যমে আমরা scrollbar এর height এবং weight কতটুকু সেটা দেখতে বা বের করতে পারি। -----------------** ----------------

Scrollbar Property:
**scrollTop** scrollLeft Element scrollbar কতটুকু scroll হয়েছে তার length দেখার জন্য এই property ব্যবহার করা হয়। ----------------- ** ----------------

Scrollbar Property:
**pageYOffset**pageXOffset Webpage scrollbar কতটুকু scroll হয়েছে তার length দেখার জন্য এই property ব্যবহার করা হয়। ----------------- **----------------**offsetTop **offsetLeft এই property এর মাধ্যমে আমরা Web Page এর মধ্যে একটা Element Top এবং Left থেকে কতটুকু নিচে বা ডানে সেটা দেখা যায়। -----------------** ---------------- **offsetWidth**offsetHeight offsetWidth and offsetHeight এটা pixel এ কোন একটা element এর width এবং height কে return করে থাকে যার মাধ্যে padding, border, scrollbar include থাকে। তবে margin include থাকে না। এছাড়া box-sizing: boরder-box ব্যবহার করার ক্ষেত্রে এটা শুধুমাত্র Element এর width এবং height return করে থাকে। ----------------- **----------------** ClientHeight **ClientWidth ClientWidth and ClientHeight এটা pixel এ কোন একটা element এর width এবং height কে return করে থাকে যার মাধ্যে padding include থাকে। তবে border, scrollbar এবং margin add থাকে না। এছাড়া box-sizing: boরder-box ব্যবহার করার ক্ষেত্রে এটা শুধুমাত্র Element এর ভিতরের width এবং height return করে থাকে যার মধ্যে padding, scrollbar, border include থাকে না। -----------------** ----------------

Mouse Event Property:
**clientX**clientY clientX এবং clientY property এর মাধ্যমে আমরা কোন element এর মধ্যে mouse event অনুসারে mouse এর cordinate x ও y পেয়ে থাকি। অর্থাৎ mouse event টি x অক্ষ থেকে কতটুকু আর y অক্ষ থেকে কতটুকু দূরে সেটা পেয়ে থাকি। তবে এটা cordinate x ও y দিয়ে থাকে viewport অনুসারে। অর্থাৎ আমরা যতটুকু দেখি ততটুকু এর মধ্যাই এটা value দিয়ে থাকে। Scroll এর উপর এর কোন প্রভাব পড়ে না বা Value পরিবর্তন হয় না। ----------------- ** ----------------

Mouse Event Property:
**pageX**pageY pageX এবং pageY property এর মাধ্যমে আমরা কোন element এর মধ্যে mouse event অনুসারে mouse এর cordinate x ও y পেয়ে থাকি। অর্থাৎ mouse event টি x অক্ষ থেকে কতটুকু আর y অক্ষ থেকে কতটুকু দূরে সেটা পেয়ে থাকি। তবে এটা cordinate x ও y দিয়ে থাকে Element এর scrollHight and scrollWidth অনুসারে। অর্থাৎ Scroll করলে এর value পরিবর্তন হবে। ----------------- ** ----------------

Mouse Event Property:
**screenX**screenY screenX এবং screenY property এর মাধ্যমে আমরা কোন element এর মধ্যে mouse event অনুসারে mouse এর cordinate x ও y পেয়ে থাকি। অর্থাৎ mouse event টি x অক্ষ থেকে কতটুকু আর y অক্ষ থেকে কতটুকু দূরে সেটা পেয়ে থাকি। তবে এটা cordinate x ও y দিয়ে থাকে Device Screen অনুসারে। অর্থাৎ Device Screen থেকে cordinate x ও y কতটুকু দূরে সেটা পেয়ে থাকি। Scroll এর উপর এর কোন প্রভাব পড়ে না বা Value পরিবর্তন হয় না। ----------------- ** ----------------

Mouse Event Property:
**offsetX**offsetY offsetX এবং offsetY property এর মাধ্যমে আমরা কোন element এর মধ্যে mouse event অনুসারে mouse এর cordinate x ও y পেয়ে থাকি। অর্থাৎ mouse event টি x অক্ষ থেকে কতটুকু আর y অক্ষ থেকে কতটুকু দূরে সেটা পেয়ে থাকি। তবে এটা cordinate x ও y দিয়ে থাকে Element এর Height এবং width অনুসারে। Scroll এর উপর এর কোন প্রভাব পড়ে না বা Value পরিবর্তন হয় না। ----------------- ** ----------------

Mouse and Keybord Event Property:
**ctrlKey**shiftKey **altKey**metaKey ----------------- ** ----------------

Mouse Event Property:
**button এই property এর মাধ্যমে আমরা mouse এর কোন button click হয়েছে সেটা দেখতে পাব। এটা কাজ করবে শুধুমাত্র mousedown event এর ক্ষেত্রে। এটা mouse এর Left Button click করলে 0, middle button click করলে 1 এবং right button click করলে 2 value return করে থাকে। -----------------** ----------------

Key Event Property:
**Key key property এর মাধ্যমে আমরা Keybord এর কোন key press হয়েছে সেটা দেখতে পারি। এটা কাজ করবে শুধুমাত্র keydown event এর ক্ষেত্রে। -----------------** ----------------

Clipboard Events
**copy or oncopy**cut or oncut **paste or onpaste -----------------** ---------------- **ononline**onoffline ----------------- ** ----------------
