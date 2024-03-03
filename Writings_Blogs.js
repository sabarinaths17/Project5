var a = document.getElementById('blog1');
var b = document.getElementById('blog2');
var c = document.getElementById('blog3');
var text1 = document.getElementById('blog_1');
var text2 = document.getElementById('blog_2');
var text3 = document.getElementById('blog_3');
var cont = document.getElementById('w3-container');

// Initially hide all text elements
text1.style.display = "none";
text2.style.display = "none";
text3.style.display = "none";

a.onclick = function() {
    cont.style.display = "block";
    text1.style.display = "block";
    text2.style.display = "none";
    text3.style.display = "none";
    text1.scrollIntoView({ behavior: 'smooth' });
};

b.onclick = function() {
    cont.style.display = "block";
    text1.style.display = "none";
    text2.style.display = "block";
    text3.style.display = "none";
    text2.scrollIntoView({ behavior: 'smooth' });
};

c.onclick = function() {
    cont.style.display = "block";
    text1.style.display = "none";
    text2.style.display = "none";
    text3.style.display = "block";
    text3.scrollIntoView({ behavior: 'smooth' });
};
