var tipuesearch = {"pages":[{"text":"Project-3B 四設計三乙專題網誌 倉儲連結: https://github.com/40423248/Project-3B 投影片連結: https://40423248.github.io/Project-3B/#/ 網誌連結: https://40423248.github.io/Project-3B/blog/","tags":"misc","url":"./pages/about/","title":"About"},{"text":"將凸輪一般從動件速度方程式轉為Python 等加速之速度方程式 $$For \\frac{ \\theta}{\\beta}\\leq0.5 , v = \\frac{ 4h\\omega\\theta}{\\beta&#94;2}$$ $$For \\frac{ \\theta}{\\beta}\\geq0.5 , v = \\frac{ 4h\\omega}{\\beta}(1-\\frac{ \\theta}{\\beta})$$ 等加速之速度程式碼 import math heigh = input(\"位移(h) : \") h = float(heigh) ##### Theta = input(\"轉動角(Ѳ) : \") c = float(Theta) ##### Beta = input(\"總轉動角(β) : \") B = float(Beta) ##### omega = input(\"角速度(w) : \") w = float(omega) ##### if c/B<=0.5: v = (4*h*w*c)/B**2 else: v = ((4*h*w)/B)*(1-(c/B)) print(v) 簡諧之速度方程式 $$ v = \\frac{ \\pi h\\omega}{2\\beta}sin\\frac{ \\pi \\theta}{\\beta}$$ 簡諧之速度程式碼 import math heigh = input(\"位移(h) : \") h = float(heigh) ##### Theta = input(\"轉動角(Ѳ) : \") c = float(Theta) ##### Beta = input(\"總轉動角(β) : \") B = float(Beta) ##### omega = input(\"角速度(w) : \") w = float(omega) ##### v = ((math.pi*h*w)/(2*B))*math.sin((math.pi*c)/B) print(v) 擺線之速度方程式 $$ v = \\frac{ h\\omega}{\\beta}(1-cos\\frac{ 2 \\pi \\theta}{\\beta})$$ 擺線之速度程式碼 import math heigh = input(\"位移(h) : \") h = float(heigh) ##### Theta = input(\"轉動角(Ѳ) : \") c = float(Theta) ##### Beta = input(\"總轉動角(β) : \") B = float(Beta) ##### omega = input(\"角速度(w) : \") w = float(omega) ##### v = ((h*w)/B)*(1-math.cos((2*math.pi*c)/B)) print(v) 參考資料： http://blog.csdn.net/ethmery/article/details/50670297","tags":"40423245","url":"./Cam-velocity-0125.html","title":"凸輪速度程式-01/25"},{"text":"上禮拜我安裝matplotlib後，輸入import matplotlib.pyplot as plt，結果輸出錯誤。所以我暫時將環境移至可攜式的python3.4。 然而我在python3.4環境下安裝pyqt5，則會有抓不到sip模組的問題。所以我又移至python3.6下環境進行測試，結果成功。 我為了使matplotlib及pyqt5能在同意環境下兼容，我嘗試在python3.6環境下輸入pip install matplotlib，結果錯誤。 我查證後發現原因是我沒有在python3.6環境下設定環境變數。設定完後即可正常運作。 參考網址 : https://sites.google.com/a/crayflames.co.cc/crayflames/python/ptp/pythondehuanjingbianshu 而上週安裝matplotlib持續發生的各種錯誤，我想是因為我下pip指令的環境是python3.6而非3.4，接著將安裝好的資料夾手動移至python3.4環境，可能發生版本不相容的問題 。","tags":"40423254","url":"./pip-matplotlib-pyqt5-issue.html","title":"pip, matplotlib及pyqt5安裝問題及環境"},{"text":"利用 Mathjax ，就可以使用 LaTeX 語法，在網頁上編寫數學方程式. 由於在網誌中無法利用 Mathjax 編寫數學方程式，在轉完網誌之後會發生下列情形 在經過尋找之後，發現是在 template 底下的 base.html 沒有轉檔使用的程式碼， 在加入下列程式碼後，即可使用順利 Mathjax 加入的程式碼 init_mathjax = function() { if (window.MathJax) { // MathJax loaded MathJax.Hub.Config({ tex2jax: { inlineMath: [ ['$','$'], [\"\\\\(\",\"\\\\)\"] ], displayMath: [ ['$$','$$'], [\"\\\\[\",\"\\\\]\"] ] }, displayAlign: 'left', // Change this to 'center' to center equations. \"HTML-CSS\": { styles: {'.MathJax_Display': {\"margin\": 0}} } }); MathJax.Hub.Queue([\"Typeset\",MathJax.Hub]); } } init_mathjax(); Ex: 一元二次方程式 (ax&#94;2 + bx + c = 0) 有兩組解, 可以寫成: $$x = {-b \\pm \\sqrt{b&#94;2-4ac} \\over 2a}.$$","tags":"40423245","url":"./solve-Mathjax-0123.html","title":"解決無法加入數學方程式問題-01/23"},{"text":"將凸輪一般從動件位移方程式轉為Python 等加速位移方程式 等加速位移程式碼 import math heigh = input(\"位移(h) : \") h = float(heigh) ##### Theta = input(\"轉動角(Ѳ) : \") c = float(Theta) ##### Beta = input(\"總轉動角(β) : \") B = float(Beta) ##### omega = input(\"角速度(w) : \") w = float(omega) ##### if c/B<=0.5: s = 2*h*(c**2/B**2) else: s = h*(1-2*(1-(c/B))**2) print(s) 簡諧位移方程式 簡諧位移程式碼 import math heigh = input(\"位移(h) : \") h = float(heigh) ##### Theta = input(\"轉動角(Ѳ) : \") c = float(Theta) ##### Beta = input(\"總轉動角(β) : \") B = float(Beta) ##### omega = input(\"角速度(w) : \") w = float(omega) ##### s = (h/2)/(1-math.cos((math.pi*c)/B)) print(s) 擺線位移方程式 擺線位移程式碼 import math heigh = input(\"位移(h) : \") h = float(heigh) ##### Theta = input(\"轉動角(Ѳ) : \") c = float(Theta) ##### Beta = input(\"總轉動角(β) : \") B = float(Beta) ##### omega = input(\"角速度(w) : \") w = float(omega) ##### s = h*((c/B)-(1/(2*math.pi))*math.sin((2*math.pi*c)/B)) print(s)","tags":"40423245","url":"./Cam-Displacement-0122.html","title":"凸輪位移程式-01/22"},{"text":"凸輪一般從動件方程式 凸輪可依據從動件的運動方式分為許多種類，這裡根據等加速、簡諧、擺線進行討論。 以下方程式中 β 為從動件上升到總升程h時的凸輪旋轉角度， θ 為凸輪旋轉到的任意角度， ω 為凸輪的角速度，單位是(rad/s)。 凸輪位移方程式 凸輪速度方程式 凸輪加速度方程式","tags":"40423245","url":"./Cam-Function-0120.html","title":"凸輪方程式-01/20"},{"text":"Unofficial Windows Binaries for Python Extension Packages : https://www.lfd.uci.edu/~gohlke/pythonlibs/ 我在1/20號前利用python簡單編譯一個計算齒輪模數及速比的程式。原定是將使用matplotlib來對齒輪進行繪圖，而在安裝時遇到許多問題。以下為遇到問題之解決方法： 安裝matplotlib : 用git clone進行下載。在python shell上輸入import matplotlib。 遇到問題 : 缺少dateutil。 缺少dateutil : 輸入easy_install python-dateutil進行安裝，安裝好後將資料夾放至C:\\Python34\\Lib\\site-packages。 參考資料 : https://jingyan.baidu.com/article/aa6a2c14d5aa7f0d4c19c4e2.html 缺少six : 到'https://pypi.python.org/pypi/six'下載six-1.11.0-py2.py3-none-any.whl，接著至cmd輸入pip install six-1.11.0-py2.py3-none-any.whl (md5)。 將安裝好的資料夾six-1.10.0文件夾改名為six，並複製到C:\\Python34\\Lib\\site-packages路徑下 缺少__version__ : 去C:\\Python34\\Lib\\site-packages\\six路徑下，把six.py文件複製到C:\\Python34\\Lib\\site-packages路徑下。 參考資料 : https://read01.com/zh-tw/N6z0RK.html#.WmMVwKjXbIX 缺少pyparsing : 到'https://pypi.python.org/pypi/pyparsing/2.2.0'下載pyparsing-2.2.0-py2.py3-none-any.whl，在cmd上輸入pip install pyparsing-2.2.0-py2.py3-none-any.whl，並將安裝好後的資料夾移動至C:\\Python34\\Lib\\site-packages。 缺少__version__ : 在python shell上輸入import matplotlib後，出現AttributeError。與第4點不同，無法利用更改路徑解決。目前問題卡在這裡。 推測 : 經過查詢資料，可能是python3.6不兼容任何版本的pyparsing。 解決方法 : 將matplotlib更新至1.5.1版本。原本的matplotlib是以前上課留下的資料，是從Y:\\Anaconda3/Lib/site-packages路徑裡抓出來的，可能因為版本過舊導致AttributeError。將matplotlib版本更新至1.5.1版似乎就正常運作。 參考資料 : https://stackoverflow.com/questions/41363993/python-3-6-pip-install-matplotlib-and-other-libraries-failed-on-windows-10 其中#2提到版本不兼容問題，嘗試利用pip install matplotlib==1.5.1來解決問題。","tags":"40423254","url":"./20180120-matplotlib-installation-problem.html","title":"安裝matplotlib及其他模組遇到之問題"},{"text":"3","tags":"Course","url":"./2017springCD-Week3.html","title":"2017CD第三週"},{"text":"2","tags":"Course","url":"./2017springCD-Week2.html","title":"Pyslvs-user-manual-2"},{"text":"1","tags":"Course","url":"./2017springCD-Week1.html","title":"Pyslvs-user-manual-1"}]};