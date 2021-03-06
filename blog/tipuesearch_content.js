var tipuesearch = {"pages":[{"title":"About","text":"Project-3B 四設計三乙專題網誌 倉儲連結: https://github.com/40423248/Project-3B 投影片連結: https://40423248.github.io/Project-3B/#/ 網誌連結: https://40423248.github.io/Project-3B/blog/","tags":"misc","url":"./pages/about/"},{"title":"凸輪設計與限制","text":"凸輪設計與限制 凸輪設計 凸輪設計 凸輪設計限制","tags":"40423228","url":"./Cam Design.html"},{"title":"凸輪擺線運動","text":"凸輪擺線運動 擺線運動構造 擺線運動 擺線運動S，V，A圖","tags":"40423228","url":"./Cycloidal motion curve.html"},{"title":"凸輪簡諧運動","text":"凸輪簡諧運動 凸輪簡諧運動構造 凸輪簡諧運動 簡諧運動S，V，A圖","tags":"40423228","url":"./Skewed Simple harmonic motion curve.html"},{"title":"凸輪不對稱等加速度運動","text":"凸輪不對稱等加速度運動 不對稱等加速度運動 等加速度運動S，V，A圖","tags":"40423228","url":"./Skewed Constant Velocity Curey.html"},{"title":"凸輪對稱等加速度運動","text":"凸輪對稱等加速度運動 等加速度運動 等加速度運動S，V，A圖","tags":"40423228","url":"./Cam Constant Acceleration Curve.html"},{"title":"凸輪等速度運動","text":"凸輪等速度運動 等速度運動 S ：位移 V ：速度 A ：加速度 β：凸輪角度 h ：升程 ω：轉速 θ=ω*ｔ","tags":"40423228","url":"./Cam Constant Velocity Curey.html"},{"title":"凸輪介紹","text":"凸輪介紹 凸輪種類 凸輪名詞 基圓：以距凸輪中心的最短距離為半徑，所畫得的圓，通常作為設計凸輪周緣的基礎。基圓愈大，壓力角、側壓力及磨損就愈小。 節曲線：若凸輪與滾子從動件接觸時，而使從動件發生預期的運動，則滾子中心所經過之軌跡之連線，稱之為凸輪的節曲線，為一假想的理論曲線。 凸輪輪廓：若凸輪與從動件之接觸，另有一滾子或一平板介於其間，以使從動件發生預期之運動，則此凸輪所具有的周緣曲線，稱為凸輪的工作曲線。 壓力角：凸輪與從動件相接觸點之公法線，與從動件軸線間之夾角，壓力角小則驅動力對凸輪側向衝擊力就會比較小，通常凸輪設計的壓力角應小於30°。 總升距：凸輪從動件上升與下降之最大差距。 作用角：從動件自開始上升至恢復原來位置，凸輪所轉動之角度。","tags":"40423228","url":"./Cam  Introduction.html"},{"title":"齒輪基本名詞","text":"齒輪基本名詞 齒輪基本名詞","tags":"40423228","url":"./Basic gear nonu.html"},{"title":"正齒輪基本計算","text":"正齒輪基本計算 正齒輪基本計算公式 import math 模數 Module = input(\"D/T\") \\\\D:節圓直徑；T:齒數 M = float(Module) ###### circular pitch = input(\"pi*m\") \\\\P:周節 (公制) Pc = float(circular pitch) ###### diametral pitch = input(\"T/D\") \\\\Pb:徑節 (英制) Pd = float(diametral pitch) ###### Da = D+2*m \\\\Da:齒頂圓 Da = float(Da) ###### C1 = (D1+D2)/2 \\\\齒輪外接 ; D1:大齒輪、D2:小齒輪、C:中心距 C2 = (D1-D2)/2 \\\\齒輪內接","tags":"40423228","url":"./Basic gear formula.html"},{"title":"SQL-建立資料庫-2","text":"這裡是介紹如何使用SQL來建立一個簡易的資料庫","tags":"40423248","url":"./2018 SQL-2.html"},{"title":"Postman使用","text":"這裡是介紹如何使用Postman < (1)建立: 第一張圖的CREATE DATABASE就是建立資料庫的指令, Test001是此資料庫的名稱,第二行的USE是轉移資料庫的指令 (2)備註: /** Grocery List: Bananas (4) Peanut Butter (1) Dark Chocolate Bar (2) **/ 以上這段灰色的文字是備註這個資料庫所含有的內容,建立表格時需要放入這些東西 (3)建立及分類: CREATE TABLE groceries ( id INTEGER PRIMARY KEY,name TEXT, quantity INTEGER); 這段是建立表格的形式及分類欄位; CREATE TABLE是建立表格 (4)插入資料:","tags":"40423248","url":"./2018 Postman.html"},{"title":"SQL-建立資料庫-1","text":"這裡是介紹如何使用SQL來建立一個簡易的資料庫 (1)建立: 第一張圖的CREATE DATABASE就是建立資料庫的指令, Test001是此資料庫的名稱,第二行的USE是轉移資料庫的指令 (2)備註: /** Grocery List: Bananas (4) Peanut Butter (1) Dark Chocolate Bar (2) **/ 以上這段灰色的文字是備註這個資料庫所含有的內容,建立表格時需要放入這些東西 (3)建立及分類: CREATE TABLE groceries ( id INTEGER PRIMARY KEY,name TEXT, quantity INTEGER); 這段是建立表格的形式及分類欄位; CREATE TABLE是建立表格 (4)插入資料:","tags":"40423248","url":"./2018 SQL-1.html"},{"title":"SQL安裝","text":"這裡是介紹安裝SQL的過程:","tags":"40423248","url":"./2018 SQL.html"},{"title":"Python基本語法-1","text":"這部分大概記錄一些之前學過的基本語法,用jupyter來做練習,以後會再繼續增加所學到的語法 1.列印print() : 指定印出括號中的內容,只有括號的話是印出數字,括號內再加入單引號('')可印出文字,這裡輸入hello world,如下圖所示: 2.分類type(): 可以做分類,如指定a=123,把a輸入到括號中,type(a),系統就會告訴你這是甚麼,a為int數字或是指定b='123',系統會告訴你b為字串,因為加了''這兩點,系統認定這是字串,又或是定義c=8.70,系統會告訴你c為浮點數,如下圖所示: 3.簡單的運算: 先給幾個定義,如:a=5 , b=8 再輸入一些運算符號跟print,如: print(a+b) 相加 print(a-b) 相減 print(a*b) 相乘 print(a/b) 相除,取小數點 print(a//b) 相除,不取小數點 print(a**b) 平方和 如下圖所示: 4.取定義: 可以取定義和取大小,如:a=-3 b=4 在print中加入abs,為絕對值,現在a是負值,加入後改為print(abs(a)),出現的是正值的3 或是加入min,此為最小值,可以在前面定義的數字中尋找最小值,改為print(min(a,b)) 或是加入max,此為最大值,可以在前面定義的數字中尋找最大值,改為print(max(a,b)),如下圖所示: 5.數字與字串相加: 6.輸入資料input(): 隨便取一個代號為變數,如取a; a =input() ==>這裡在執行時會變成輸入列,可任意輸入字串或數字之類的東西 print('a=' ,a) ==>這裡會印出所輸入的東西 或是輸入名稱, 如b= input('Your name: ') ==>任意給一個名子 print('Your name:' , b) ==>這裡會印出所輸入的名子 ,如下圖: 也可以跟簡易運算搭配,如下圖: 7.if判斷式: 8.","tags":"40423248","url":"./2018 Basic.html"},{"title":"計畫簡介","text":"在此,大略的說一下這學期想做的事,使用python及其他的程式套件來編出一個有程式功能的網頁,主要以先前的電動絞車做為參考資料,想做出可以即時互動的裝配模擬,如輸入部分的機件尺寸,就會在頁面中顯示相對的2D圖像,可以互相搭配結合,做模擬運動,或是可以叫出範本做模擬,之後,可能在導入其他的機組件做模擬.","tags":"40423248","url":"./2018 Intro.html"},{"title":"凸輪加速度程式-01/28","text":"將凸輪一般從動件加速度方程式轉為Python 等加速之加速度方程式 $$For \\frac{ \\theta}{\\beta}\\leq0.5 , a = \\frac{ 4h\\omega&#94;2}{\\beta&#94;2}$$ $$For \\frac{ \\theta}{\\beta}\\geq0.5 , a = -\\frac{ 4h\\omega&#94;2}{\\beta&#94;2}$$ 等加速之加速度程式碼 import math heigh = input(\"位移(h) : \") h = float(heigh) ##### Theta = input(\"轉動角(Ѳ) : \") c = float(Theta) ##### Beta = input(\"總轉動角(β) : \") B = float(Beta) ##### omega = input(\"角速度(w) : \") w = float(omega) ##### if c/B<=0.5: a = (4*h*(w**2))/(B**2) else: a = -(4*h*(w**2))/(B**2) print(a) 簡諧之加速度方程式 $$ a = \\frac{ \\pi&#94;2 h\\omega&#94;2}{2\\beta&#94;2}cos\\frac{ \\pi \\theta}{\\beta}$$ 簡諧之加速度程式碼 import math heigh = input(\"位移(h) : \") h = float(heigh) ##### Theta = input(\"轉動角(Ѳ) : \") c = float(Theta) ##### Beta = input(\"總轉動角(β) : \") B = float(Beta) ##### omega = input(\"角速度(w) : \") w = float(omega) ##### a = ((math.pi**2)*h*(w**2))/(2*(B**2))*math.cos((math.pi*c)/B) print(a) 擺線之加速度方程式 $$ a = \\frac{2\\pi h\\omega&#94;2}{\\beta&#94;2}sin\\frac{ 2 \\pi \\theta}{\\beta}$$ 擺線之加速度程式碼 import math heigh = input(\"位移(h) : \") h = float(heigh) ##### Theta = input(\"轉動角(Ѳ) : \") c = float(Theta) ##### Beta = input(\"總轉動角(β) : \") B = float(Beta) ##### omega = input(\"角速度(w) : \") w = float(omega) ##### a = (2*math.pi*h*(w**2))/(B**2)*math.sin((2*math.pi*c)/B) print(a)","tags":"40423245","url":"./Cam-Acceleration-0128.html"},{"title":"凸輪速度程式-01/25","text":"將凸輪一般從動件速度方程式轉為Python 等加速之速度方程式 $$For \\frac{ \\theta}{\\beta}\\leq0.5 , v = \\frac{ 4h\\omega\\theta}{\\beta&#94;2}$$ $$For \\frac{ \\theta}{\\beta}\\geq0.5 , v = \\frac{ 4h\\omega}{\\beta}(1-\\frac{ \\theta}{\\beta})$$ 等加速之速度程式碼 import math heigh = input(\"位移(h) : \") h = float(heigh) ##### Theta = input(\"轉動角(Ѳ) : \") c = float(Theta) ##### Beta = input(\"總轉動角(β) : \") B = float(Beta) ##### omega = input(\"角速度(w) : \") w = float(omega) ##### if c/B<=0.5: v = (4*h*w*c)/B**2 else: v = ((4*h*w)/B)*(1-(c/B)) print(v) 簡諧之速度方程式 $$ v = \\frac{ \\pi h\\omega}{2\\beta}sin\\frac{ \\pi \\theta}{\\beta}$$ 簡諧之速度程式碼 import math heigh = input(\"位移(h) : \") h = float(heigh) ##### Theta = input(\"轉動角(Ѳ) : \") c = float(Theta) ##### Beta = input(\"總轉動角(β) : \") B = float(Beta) ##### omega = input(\"角速度(w) : \") w = float(omega) ##### v = ((math.pi*h*w)/(2*B))*math.sin((math.pi*c)/B) print(v) 擺線之速度方程式 $$ v = \\frac{ h\\omega}{\\beta}(1-cos\\frac{ 2 \\pi \\theta}{\\beta})$$ 擺線之速度程式碼 import math heigh = input(\"位移(h) : \") h = float(heigh) ##### Theta = input(\"轉動角(Ѳ) : \") c = float(Theta) ##### Beta = input(\"總轉動角(β) : \") B = float(Beta) ##### omega = input(\"角速度(w) : \") w = float(omega) ##### v = ((h*w)/B)*(1-math.cos((2*math.pi*c)/B)) print(v) 參考資料： http://blog.csdn.net/ethmery/article/details/50670297","tags":"40423245","url":"./Cam-velocity-0125.html"},{"title":"pip, matplotlib及pyqt5安裝問題及環境","text":"上禮拜我安裝matplotlib後，輸入import matplotlib.pyplot as plt，結果輸出錯誤。所以我暫時將環境移至可攜式的python3.4。 然而我在python3.4環境下安裝pyqt5，則會有抓不到sip模組的問題。所以我又移至python3.6下環境進行測試，結果成功。 我為了使matplotlib及pyqt5能在同意環境下兼容，我嘗試在python3.6環境下輸入pip install matplotlib，結果錯誤。 我查證後發現原因是我沒有在python3.6環境下設定環境變數。設定完後即可正常運作。 參考網址 : https://sites.google.com/a/crayflames.co.cc/crayflames/python/ptp/pythondehuanjingbianshu 而上週安裝matplotlib持續發生的各種錯誤，我想是因為我下pip指令的環境是python3.6而非3.4，接著將安裝好的資料夾手動移至python3.4環境，可能發生版本不相容的問題 。","tags":"40423254","url":"./pip-matplotlib-pyqt5-issue.html"},{"title":"解決無法加入數學方程式問題-01/23","text":"利用 Mathjax ，就可以使用 LaTeX 語法，在網頁上編寫數學方程式. 由於在網誌中無法利用 Mathjax 編寫數學方程式，在轉完網誌之後會發生下列情形 在經過尋找之後，發現是在 template 底下的 base.html 沒有轉檔使用的程式碼， 在加入下列程式碼後，即可使用順利 Mathjax 加入的程式碼 init_mathjax = function() { if (window.MathJax) { // MathJax loaded MathJax.Hub.Config({ tex2jax: { inlineMath: [ ['$','$'], [\"\\\\(\",\"\\\\)\"] ], displayMath: [ ['$$','$$'], [\"\\\\[\",\"\\\\]\"] ] }, displayAlign: 'left', // Change this to 'center' to center equations. \"HTML-CSS\": { styles: {'.MathJax_Display': {\"margin\": 0}} } }); MathJax.Hub.Queue([\"Typeset\",MathJax.Hub]); } } init_mathjax(); Ex: 一元二次方程式 (ax&#94;2 + bx + c = 0) 有兩組解, 可以寫成: $$x = {-b \\pm \\sqrt{b&#94;2-4ac} \\over 2a}.$$","tags":"40423245","url":"./solve-Mathjax-0123.html"},{"title":"凸輪位移程式-01/22","text":"將凸輪一般從動件位移方程式轉為Python 等加速位移方程式 等加速位移程式碼 import math heigh = input(\"位移(h) : \") h = float(heigh) ##### Theta = input(\"轉動角(Ѳ) : \") c = float(Theta) ##### Beta = input(\"總轉動角(β) : \") B = float(Beta) ##### omega = input(\"角速度(w) : \") w = float(omega) ##### if c/B<=0.5: s = 2*h*(c**2/B**2) else: s = h*(1-2*(1-(c/B))**2) print(s) 簡諧位移方程式 簡諧位移程式碼 import math heigh = input(\"位移(h) : \") h = float(heigh) ##### Theta = input(\"轉動角(Ѳ) : \") c = float(Theta) ##### Beta = input(\"總轉動角(β) : \") B = float(Beta) ##### omega = input(\"角速度(w) : \") w = float(omega) ##### s = (h/2)/(1-math.cos((math.pi*c)/B)) print(s) 擺線位移方程式 擺線位移程式碼 import math heigh = input(\"位移(h) : \") h = float(heigh) ##### Theta = input(\"轉動角(Ѳ) : \") c = float(Theta) ##### Beta = input(\"總轉動角(β) : \") B = float(Beta) ##### omega = input(\"角速度(w) : \") w = float(omega) ##### s = h*((c/B)-(1/(2*math.pi))*math.sin((2*math.pi*c)/B)) print(s)","tags":"40423245","url":"./Cam-Displacement-0122.html"},{"title":"凸輪方程式-01/20","text":"凸輪一般從動件方程式 凸輪可依據從動件的運動方式分為許多種類，這裡根據等加速、簡諧、擺線進行討論。 以下方程式中 β 為從動件上升到總升程h時的凸輪旋轉角度， θ 為凸輪旋轉到的任意角度， ω 為凸輪的角速度，單位是(rad/s)。 凸輪位移方程式 凸輪速度方程式 凸輪加速度方程式","tags":"40423245","url":"./Cam-Function-0120.html"},{"title":"安裝matplotlib及其他模組遇到之問題","text":"Unofficial Windows Binaries for Python Extension Packages : https://www.lfd.uci.edu/~gohlke/pythonlibs/ 我在1/20號前利用python簡單編譯一個計算齒輪模數及速比的程式。原定是將使用matplotlib來對齒輪進行繪圖，而在安裝時遇到許多問題。以下為遇到問題之解決方法： 安裝matplotlib : 用git clone進行下載。在python shell上輸入import matplotlib。 遇到問題 : 缺少dateutil。 缺少dateutil : 輸入easy_install python-dateutil進行安裝，安裝好後將資料夾放至C:\\Python34\\Lib\\site-packages。 參考資料 : https://jingyan.baidu.com/article/aa6a2c14d5aa7f0d4c19c4e2.html 缺少six : 到'https://pypi.python.org/pypi/six'下載six-1.11.0-py2.py3-none-any.whl，接著至cmd輸入pip install six-1.11.0-py2.py3-none-any.whl (md5)。 將安裝好的資料夾six-1.10.0文件夾改名為six，並複製到C:\\Python34\\Lib\\site-packages路徑下 缺少__version__ : 去C:\\Python34\\Lib\\site-packages\\six路徑下，把six.py文件複製到C:\\Python34\\Lib\\site-packages路徑下。 參考資料 : https://read01.com/zh-tw/N6z0RK.html#.WmMVwKjXbIX 缺少pyparsing : 到'https://pypi.python.org/pypi/pyparsing/2.2.0'下載pyparsing-2.2.0-py2.py3-none-any.whl，在cmd上輸入pip install pyparsing-2.2.0-py2.py3-none-any.whl，並將安裝好後的資料夾移動至C:\\Python34\\Lib\\site-packages。 缺少__version__ : 在python shell上輸入import matplotlib後，出現AttributeError。與第4點不同，無法利用更改路徑解決。目前問題卡在這裡。 推測 : 經過查詢資料，可能是python3.6不兼容任何版本的pyparsing。 解決方法 : 將matplotlib更新至1.5.1版本。原本的matplotlib是以前上課留下的資料，是從Y:\\Anaconda3/Lib/site-packages路徑裡抓出來的，可能因為版本過舊導致AttributeError。將matplotlib版本更新至1.5.1版似乎就正常運作。 參考資料 : https://stackoverflow.com/questions/41363993/python-3-6-pip-install-matplotlib-and-other-libraries-failed-on-windows-10 其中#2提到版本不兼容問題，嘗試利用pip install matplotlib==1.5.1來解決問題。","tags":"40423254","url":"./20180120-matplotlib-installation-problem.html"},{"title":"2017CD第三週","text":"3","tags":"Course","url":"./2017springCD-Week3.html"},{"title":"Pyslvs-user-manual-2","text":"2","tags":"Course","url":"./2017springCD-Week2.html"},{"title":"Pyslvs-user-manual-1","text":"1","tags":"Course","url":"./2017springCD-Week1.html"}]};