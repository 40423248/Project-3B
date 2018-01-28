Title: 凸輪加速度程式-01/28
Date: 2018-01-28 20:00
Category: 40423245
Tags: Cam
Slug: Cam-Acceleration-0128
Author: 40423245

####將凸輪一般從動件加速度方程式轉為Python

<!-- PELICAN_END_SUMMARY -->

###等加速之加速度方程式

$$For \frac{ \theta}{\beta}\leq0.5 , a = \frac{ 4h\omega^2}{\beta^2}$$
$$For \frac{ \theta}{\beta}\geq0.5 , a = -\frac{ 4h\omega^2}{\beta^2}$$


<h3>等加速之加速度程式碼</h3>
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
    a = (4*h*(w**2))/(B**2)
else:
    a = -(4*h*(w**2))/(B**2)
    
print(a)
</pre>

###簡諧之加速度方程式

$$ a = \frac{ \pi^2 h\omega^2}{2\beta^2}cos\frac{ \pi \theta}{\beta}$$

<h3>簡諧之加速度程式碼</h3>
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

a = ((math.pi**2)*h*(w**2))/(2*(B**2))*math.cos((math.pi*c)/B)

print(a)
</pre>

###擺線之加速度方程式

$$ a = \frac{2\pi h\omega^2}{\beta^2}sin\frac{ 2 \pi \theta}{\beta}$$

<h3>擺線之加速度程式碼</h3>
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

a = (2*math.pi*h*(w**2))/(B**2)*math.sin((2*math.pi*c)/B)
    
print(a)
</pre>