Title: 安裝matplotlib及其他模組遇到之問題
Date: 2018-01-20 11:00
Category: 40423254
Tags: matplotlib, pyparsing, six, dateutil
Slug: 20180120-matplotlib-installation-problem
Author: 40423254

Unofficial Windows Binaries for Python Extension Packages : 
<a href="https://www.lfd.uci.edu/~gohlke/pythonlibs/" target="_blank" title="https://www.lfd.uci.edu/~gohlke/pythonlibs/">https://www.lfd.uci.edu/~gohlke/pythonlibs/</a>

我在1/20號前利用python簡單編譯一個計算齒輪模數及速比的程式。原定是將使用matplotlib來對齒輪進行繪圖，而在安裝時遇到許多問題。以下為遇到問題之解決方法：

<!-- PELICAN_END_SUMMARY -->

1. 安裝matplotlib : 用git clone進行下載。在python shell上輸入import matplotlib。
                             遇到問題 : 缺少dateutil。
                             
<iframe src="./../pictures/problem1-require-dateutil.jpg" width="640" height="347" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

2. 缺少dateutil : 輸入easy_install python-dateutil進行安裝，安裝好後將資料夾放至C:\Python34\Lib\site-packages。

參考資料 : 
<a href="https://jingyan.baidu.com/article/aa6a2c14d5aa7f0d4c19c4e2.html" target="_blank" title="https://jingyan.baidu.com/article/aa6a2c14d5aa7f0d4c19c4e2.html">https://jingyan.baidu.com/article/aa6a2c14d5aa7f0d4c19c4e2.html</a>

3. 缺少six : 到'https://pypi.python.org/pypi/six'下載six-1.11.0-py2.py3-none-any.whl，接著至cmd輸入pip install six-1.11.0-py2.py3-none-any.whl (md5)。
將安裝好的資料夾six-1.10.0文件夾改名為six，並複製到C:\Python34\Lib\site-packages路徑下

<iframe src="./../pictures/problem2-download-six.jpg" width="1200" height="100" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

4. 缺少__version__ : 去C:\Python34\Lib\site-packages\six路徑下，把six.py文件複製到C:\Python34\Lib\site-packages路徑下。

參考資料 : 
<a href="https://read01.com/zh-tw/N6z0RK.html#.WmMVwKjXbIX" target="_blank" title="https://read01.com/zh-tw/N6z0RK.html#.WmMVwKjXbIX">https://read01.com/zh-tw/N6z0RK.html#.WmMVwKjXbIX</a>

5. 缺少pyparsing : 到'https://pypi.python.org/pypi/pyparsing/2.2.0'下載pyparsing-2.2.0-py2.py3-none-any.whl，在cmd上輸入pip install pyparsing-2.2.0-py2.py3-none-any.whl，並將安裝好後的資料夾移動至C:\Python34\Lib\site-packages。

<iframe src="./../pictures/problem3-download-pyparsing.jpg" width="1200" height="200" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

6. 缺少__version__ : 在python shell上輸入import matplotlib後，出現AttributeError。與第4點不同，無法利用更改路徑解決。目前問題卡在這裡。

<iframe src="./../pictures/problem4-attributeerror-pyparsing.jpg" width="640" height="347" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

推測 : 經過查詢資料，可能是python3.6不兼容任何版本的pyparsing。

解決方法 : 將matplotlib更新至1.5.1版本。原本的matplotlib是以前上課留下的資料，是從Y:\Anaconda3/Lib/site-packages路徑裡抓出來的，可能因為版本過舊導致AttributeError。將matplotlib版本更新至1.5.1版似乎就正常運作。

參考資料 : 
<a href="https://stackoverflow.com/questions/41363993/python-3-6-pip-install-matplotlib-and-other-libraries-failed-on-windows-10" target="_blank" title="https://stackoverflow.com/questions/41363993/python-3-6-pip-install-matplotlib-and-other-libraries-failed-on-windows-10">https://stackoverflow.com/questions/41363993/python-3-6-pip-install-matplotlib-and-other-libraries-failed-on-windows-10</a>

其中#2提到版本不兼容問題，嘗試利用pip install matplotlib==1.5.1來解決問題。

<iframe src="./../pictures/problem5-update-matplotlib-to-solve.jpg" width="800" height="80" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
