Title: 正齒輪基本計算
Date: 2018-03-24 15:30
Category: 40423228
Tags: gear
Slug: Basic gear formula
Author: 40423228

####正齒輪基本計算

<!-- PELICAN_END_SUMMARY -->

<h3>正齒輪基本計算公式</h3>
<pre class="brush: python">
import math

模數
Module = input("D/T") \\D:節圓直徑；T:齒數
M = float(Module)
######
circular pitch = input("pi*m") \\P:周節 (公制)
Pc =  float(circular pitch)
######
diametral pitch = input("T/D") \\Pb:徑節 (英制)
Pd = float(diametral pitch)
######
Da = D+2*m \\Da:齒頂圓
Da = float(Da)
######
C1 = (D1+D2)/2 \\齒輪外接 ; D1:大齒輪、D2:小齒輪、C:中心距
C2 = (D1-D2)/2 \\齒輪內接
</pre>