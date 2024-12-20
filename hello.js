<script language="JavaScript">

var nl = getNewLine()

function getNewLine() {
	var agent = navigator.userAgent

	if (agent.indexOf("Win") >= 0)
		return "\r\n"
	else
		if (agent.indexOf("Mac") >= 0)
			return "\r"

 	return "\r"

}

pagecode = '
* {
    margin: 0;
    font-family: \'Roboto\', sans-serif;
}
.header {
    background-color: #1a1a1a;
    color: white;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.header.img {
    height: 50px;
}
.header.logo {
    display: flex;
    align-items: center;
}
.header.logo h1 {
    margin-left: 10px;
    font-size: 1.5em;
}
.header nav {
    flex-grow: 1;
    text-align: center;
}
.header nav a {
    color: white;
    margin: 0 10px;
    text-decoration: none;
    font-size: 1.1em;
}
.hero {
    position: relative;
    color: white;
    text-align: center;
}
.hero img {
    width: 100%;
    height: 800px;
}
.hero .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.hero h1 {
    font-size: 3em;
    margin: 0;
}
.hero button {
    background-color: #ffcc00;
    border: none;
    padding: 10px 20px;
    font-size: 1em;
    cursor: pointer;
}
body {  
margin: 0;  
font-family: Arial, sans-serif;  
background-color: #f0f0f0;  
}  

.container {  
display: flex;  
align-items: center;  
justify-content: center;  
padding: 10px;  
background-color: rgba(0, 0, 0, 0.833);  
color: white;  

}  

.image-section img {  
width: 300px; 
height: 400px;  
border-radius: 8px;  
align-items: left;

}  

.text-section {  
max-width: 500px;  
margin-left: 10%;  

}  

.text-section h1 {  
font-size: 46px;  
margin: 10;  
}  

.underline {  
width: 50px;  
height: 4px;  
background-color: #f39c12; 
margin: 10px 0;  
}  

.text-section p {  
font-size: 16px;  
line-height: 1.5;  
background-color: #21609f; 
padding: 20px;  
border-radius: 15px;  
}
.section {
    padding: 40px 20px;
}
.section h2 {
    text-align: center;
    margin-bottom: 10px;
}
.section .content {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.section .content .card {
    background-color: #333;
    color: white;
    width: 20%;
    margin: 10px;
    padding: 20px;
    box-sizing: border-box;
}
.section .content .card img {
    width: 100%;
    height: 300px;
}
.section .content .card button {
    background-color: #ff6600;
    border: none;
    padding: 10px 20px;
    font-size: 1em;
    cursor: pointer;
}
.oval-section {
    background-color: #333;
    color: white;
    padding: 40px 20px;
}
.oval-section.button {
    background-color: #e15e06;
    border:none;
    padding: 10px 20px;
    font-size: 1em;
    cursor: pointer;
   
}
.oval-section h2 {
    text-align: center;
    margin-bottom: 20px;
}
.oval-section .ovals {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.oval-section .ovals .oval {
    background-color: #444;
    width: 250px;
    height: 300px;
    border-radius: 80%;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
.oval-section .ovals .oval img {
    width: 100%;
    height: auto;
}
.services {
    background-color: #000;
    color: white;
    padding: 50px 20px;
}
.services h2 {
    text-align: center;
    margin-bottom: 20px;
}
.services .service-cards {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.services .service-cards .service-card {
    background-color: #333;
    width: 20%;
    margin: 10px;
    padding: 20px;
    box-sizing: border-box;
    text-align: center;
}
.services .service-cards .service-card img {
    width: 100%;
    height: 300px;
}
footer {  
background-color: #0d0b0b;  
color: #fff;  
padding: 20px;  
text-align: center;  
}  

.footer-content {  
margin-bottom: 0px;  
text-align: right;
}  

.footer-content p {  
margin: 5px 0;  
}  

.footer-content a {  
color: #ffcc00; 
text-decoration: none;  
}   

.footer-bottom {  
font-size: 14px;  
}
.footer {
    background-color: #1a1a1a;
    color: white;
    padding: 20px;
    text-align: left;
}
.footer .social-icons {
    margin: 10px 0;
}
.footer .social-icons i {
    margin: 0 10px;
    cursor: pointer;
}
.footer .links {
    margin: 10px 0;
}
.footer .links a {
    color: white;
    margin: 0 10px;
    text-decoration: none;
}'

document.write(pagecode);

</script>