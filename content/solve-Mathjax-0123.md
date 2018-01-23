Title: 解決無法加入數學方程式問題-01/23
Date: 2018-01-23 20:00
Category: 40423245
Tags: Mathjax
Slug: solve-Mathjax-0123
Author: 40423245

####利用 Mathjax ，就可以使用 LaTeX 語法，在網頁上編寫數學方程式.

<!-- PELICAN_END_SUMMARY -->

由於在網誌中無法利用 Mathjax 編寫數學方程式，在轉完網誌之後會發生下列情形

<img src="./../data/Solve Mathjax before.bmp" width="480" />

在經過尋找之後，發現是在 template 底下的 base.html 沒有轉檔使用的程式碼，
在加入下列程式碼後，即可使用順利 Mathjax

<h3>加入的程式碼</h3>
<pre class="brush: python">
<!-- for LaTeX equations -->
<script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_HTML" type="text/javascript"></script>
<script type="text/javascript">
init_mathjax = function() {
    if (window.MathJax) {
        // MathJax loaded
        MathJax.Hub.Config({
            tex2jax: {
                inlineMath: [ ['$','$'], ["\\(","\\)"] ],
                displayMath: [ ['$$','$$'], ["\\[","\\]"] ]
            },
            displayAlign: 'left', // Change this to 'center' to center equations.
            "HTML-CSS": {
                styles: {'.MathJax_Display': {"margin": 0}}
            }
        });
        MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    }
}
init_mathjax();
</script>

</pre>

Ex: 一元二次方程式 \(ax^2 + bx + c = 0\) 有兩組解, 可以寫成:

$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$