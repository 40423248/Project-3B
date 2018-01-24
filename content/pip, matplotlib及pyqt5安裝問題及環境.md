Title: pip, matplotlib及pyqt5安裝問題及環境
Date: 2018-01-24 21:00
Category: 40423254
Tags: pip, matplotlib, pyqt5
Slug: pip-matplotlib-pyqt5-issue
Author: 40423254

上禮拜我安裝matplotlib後，輸入import matplotlib.pyplot as plt，結果輸出錯誤。所以我暫時將環境移至可攜式的python3.4。

<!-- PELICAN_END_SUMMARY -->

然而我在python3.4環境下安裝pyqt5，則會有抓不到sip模組的問題。所以我又移至python3.6下環境進行測試，結果成功。
   
<iframe src="./../pictures/pyqt5-install-successfully.jpg" width="300" height="50" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
   
我為了使matplotlib及pyqt5能在同意環境下兼容，我嘗試在python3.6環境下輸入pip install matplotlib，結果錯誤。
   
<iframe src="./../pictures/pip-is-not.jpg" width="300" height="80" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    
我查證後發現原因是我沒有在python3.6環境下設定環境變數。設定完後即可正常運作。

參考網址 : <a href="https://sites.google.com/a/crayflames.co.cc/crayflames/python/ptp/pythondehuanjingbianshu" target="_blank" title="https://sites.google.com/a/crayflames.co.cc/crayflames/python/ptp/pythondehuanjingbianshu">https://sites.google.com/a/crayflames.co.cc/crayflames/python/ptp/pythondehuanjingbianshu</a>

而上週安裝matplotlib持續發生的各種錯誤，我想是因為我下pip指令的環境是python3.6而非3.4，接著將安裝好的資料夾手動移至python3.4環境，可能發生版本不相容的問題 。

