Title: 凸輪位移程式-01/22
Date: 2018-01-22 20:00
Category: 40423245
Tags: Cam
Slug: Cam-Displacement-0122
Author: 40423245

####將凸輪一般從動件位移方程式轉為Python

<!-- PELICAN_END_SUMMARY -->

###等加速位移方程式

<img src="./../data/Cam Function/等加速位移.bmp" width="250" />

<h3>等加速位移程式碼</h3>
<pre class="brush: python">
import math

heigh = input("位移(h) : ")
h = float(heigh)
#####
Theta = input("轉動角(Ѳ) : ") 
c = float(Theta)
#####
Beta = input("總轉動角(β) : ")
B = float(Beta)
#####
omega = input("角速度(w) : ")
w = float(omega)
#####

if c/B<=0.5:
    s = 2*h*(c**2/B**2)
else:
    s = h*(1-2*(1-(c/B))**2)
    
print(s)
</pre>

###簡諧位移方程式

<img src="./../data/Cam Function/簡諧位移.bmp" width="150" />

<h3>簡諧位移程式碼</h3>
<pre class="brush: python">
import math

heigh = input("位移(h) : ")
h = float(heigh)
#####
Theta = input("轉動角(Ѳ) : ") 
c = float(Theta)
#####
Beta = input("總轉動角(β) : ")
B = float(Beta)
#####
omega = input("角速度(w) : ")
w = float(omega)
#####

s = (h/2)/(1-math.cos((math.pi*c)/B))

print(s)
</pre>

###擺線位移方程式

<img src="./../data/Cam Function/擺線位移.bmp" width="200" />

<h3>擺線位移程式碼</h3>
<pre class="brush: python">
import math

heigh = input("位移(h) : ")
h = float(heigh)
#####
Theta = input("轉動角(Ѳ) : ") 
c = float(Theta)
#####
Beta = input("總轉動角(β) : ")
B = float(Beta)
#####
omega = input("角速度(w) : ")
w = float(omega)
#####

s = h*((c/B)-(1/(2*math.pi))*math.sin((2*math.pi*c)/B))
    
print(s)

</pre>