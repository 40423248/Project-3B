Title: 凸輪速度程式-01/25
Date: 2018-01-25 20:00
Category: 40423245
Tags: Cam
Slug: Cam-velocity-0125
Author: 40423245

####將凸輪一般從動件速度方程式轉為Python

<!-- PELICAN_END_SUMMARY -->

###等加速之速度方程式

$$For \frac{ \theta}{\beta}\leq0.5 , v = \frac{ 4h\omega\theta}{\beta^2}$$
$$For \frac{ \theta}{\beta}\geq0.5 , v = \frac{ 4h\omega}{\beta}(1-\frac{ \theta}{\beta})$$


<h3>等加速之速度程式碼</h3>
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
    v = (4*h*w*c)/B**2
else:
    v = ((4*h*w)/B)*(1-(c/B))
    
print(v)
</pre>

###簡諧之速度方程式

$$ v = \frac{ \pi h\omega}{2\beta}sin\frac{ \pi \theta}{\beta}$$

<h3>簡諧之速度程式碼</h3>
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

v = ((math.pi*h*w)/(2*B))*math.sin((math.pi*c)/B)

print(v)
</pre>

###擺線之速度方程式

$$ v = \frac{ h\omega}{\beta}(1-cos\frac{ 2 \pi \theta}{\beta})$$

<h3>擺線之速度程式碼</h3>
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

v = ((h*w)/B)*(1-math.cos((2*math.pi*c)/B))
    
print(v)
</pre>

參考資料：<a href="http://blog.csdn.net/ethmery/article/details/50670297" target="_blank" title="http://blog.csdn.net/ethmery/article/details/50670297">http://blog.csdn.net/ethmery/article/details/50670297</a>