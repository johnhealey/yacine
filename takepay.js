(function(jwplayer){

    var template = function(_player, config, _div) {    
        
	    function form_check(email)
	    {
	        var z8=email; 
		    
	    };
	    function _style(element,styles) {
            for(var property in styles) {
		        element.style[property] = styles[property];
            }
        };
        function _hide() {
            _div.style.visibility = 'hidden';
            _div.style.opacity = 0;
            _player.play();        
        };
        function _show() {
	        _player.setFullscreen(false);
	        
            if(_player.getState() == 'PLAYING') {
                _player.pause();
            }
            _div.style.visibility = 'visible';
            _div.style.opacity = 1;
        };

        function goTo(url){
	    _player.setFullscreen(false);
            window.open(url,'zinwa.com','scrollbars=1,width=1024,height=768');
        };

        function execAjaxToAoneBill(code,email,urls){
            var id = config.id;
	        urls+="?code="+code+"&usr_id="+ encodeURI(id)+"&email=" + encodeURI(email);
            $.ajax({
	            //type:'post',
	            //url: "http://beta.zinwa.com/cgi-bin/aonebill_play.pl",
	            //url: "http://beta.zinwa.com/cgi-bin/aonebill_play.pl?code="+code+"&usr_id="+id+"&email="+email,
	            //data:"{code:"+code+",usr_id:"+id+",email:"+email+"}",
	            //dataType:"json",
	            url:urls,
                success: function(data){
		            var obj = eval(data);
		            if(obj.user==0){
			            alert("wrong sms code");
	                    return 0;
		            }else{
			            document.getElementById("getin").value=obj.user;
	      	            document.getElementById("payment").style.display="none";
			            document.getElementById("newemail").innerHTML="("+email+")";
			            //document.getElementById("notice").innerHTML=strs.replace("{newemail}",email);
	                    document.getElementById("notice").style.display="inline";
	                    return 0;
		            };
                }, 
                error: function(XMLHttpRequest, textStatus, errorThrown){ 
                    /*	
		                alert(XMLHttpRequest.status);
		                alert(XMLHttpRequest.readyState);
		                alert(textStatus);
                    */
		            alert("invalid code, try again");
	            }
            });
        };
	    function _setupForm(){
	        _style(
		        _div,{
		            opacity: 0,
		            webkitTransition: 'opacity 15ms linear',
		            mozTransition: 'opacity 15ms linear',
            	    msTransition: 'opacity 15ms linear',
		            oTransition: 'opacity 15ms linear',
		            transition: 'opacity 15ms linear',
		            width: '333px',
		            height: '352px',
		            padding: '40px 76px 0 76px',
		            color: '#ebebeb',
		            font: '12px Arial, Helvetica, sans-serif',
		            background: 'url(/images/login-box-backg.png) no-repeat left top',
		            cursor: 'pointer',
            	    align: 'center'
		        });
	        _div.style.marginLeft='120px';
	        
	        var _form = document.createElement("div");
	        _form.id="outside";
	        _div.appendChild(_form);
	        
	        var htmls= "<div id='payment' style='display:inline;'><div id='aonebill' style='display:inline;'>";
	        htmls += "<h2 style='padding:0;margin:0;color: #ebebeb;font: bold 12px \"Calibri\", Arial;'>Signup : To continue watching follow the steps below to have 7 days of unlimited access or wait 24 hours !</h2>";
	        htmls += "<br><span  style='font-size:14px;font-weight: bold;'>" + config.payment.aonebill[0] + "</span> ";
	        htmls += "<br><span  style='font-size:14px;font-weight: bold;'>" + config.payment.aonebill[1] + "</span></br>";
	        htmls += "<div id='login-box-name0' style='margin-top:20px;display:inline;width:80px;text-align:right;padding:7px 10px 0 0;margin:0 0 7px 0;'> Code :</div>";
	        htmls += "<input style='width:148px;padding: 5px 4px 3px 3px;border: 1px solid #0d2c52;background-color:#1e4f8a;font-size: 16px;color:#ebebeb;' maxlength='2048' size='30' value='' title='codes' name='codes' id='codes'><br>";
	        htmls += "<div id='login-box-email0' style='margin-top:15px;display:inline;width:80px;text-align: right;padding: 7px 10px 0 0;margin:0 0 7px 0;'>EMAIL :</div>";
	        htmls += "<input style='width:148px;padding: 5px 4px 3px 3px;border: 1px solid #0d2c52;background-color:#1e4f8a;font-size: 16px;color: #ebebeb;' maxlength='2048' size='30' value='' title='emails' name='emails' id='emails'><input type='image' src='/images/login-btn.png' id='buttons' name='buttons' width='70' height='25'><br><br>";
            htmls += "<div id='costInfoAoneBill' style='width:100%'><span id='contAonebill' style='font-size:10px'>" + config.payment.aonebill[2] + "</span></br></br></div>";
            htmls += "<div id='login-box-field0' style='width:100%'><span id='contactAoneBill' style='font-size:7px'>" + config.payment.aonebill[3] + "</span></br></div></div>";
	        htmls += "<div id='Neosurf' style='display:none;'><h2 style='padding:0;margin:0;color: #ebebeb;font: bold 12px \"Calibri\", Arial;'>Signup : To continue watching follow the steps below to have 7 days of unlimited access or wait 24 hours !</h2>";
	        htmls += "This is for Neosurf payment :<br>a) - Click here <input type='image' src='/images/login-btn.png' id='buttonn' name='buttonn' width='80' height='25'> to get your access code <br>b) - field code and emai and then click the second button to get play<br>";
	        htmls += "<div id='login-box-name1' style='margin-top:20px;display:inline;width:80px;text-align:right;padding:7px 10px 0 0;margin:0 0 7px 0;'> Code :</div>";
	        htmls += "<input style='width:148px;padding: 5px 4px 3px 3px;border: 1px solid #0d2c52;background-color:#1e4f8a;font-size: 16px;color:#ebebeb;' maxlength='2048' size='30' value='' title='code1' name='code1' id='code1'><br>";
	        htmls += "<div id='login-box-email1' style='margin-top:15px;display:inline;width:80px;text-align: right;padding: 7px 10px 0 0;margin:0 0 7px 0;'>EMAIL :</div>";
	        htmls += "<input style='width:148px;padding: 5px 4px 3px 3px;border: 1px solid #0d2c52;background-color:#1e4f8a;font-size: 16px;color: #ebebeb;' maxlength='2048' size='30' value='' title='email1' name='email1' id='email1'><input type='image' src='/images/login-btn.png' id='button1' name='button1' width='70' height='25'><br><br>";
	        htmls += "<div id='login-box-field1' style='width:100%'><span  style='font-size:10px'></span></div>";
	        htmls += "</div>";
	        if(config.phone==0){
	            texts="";	
	    	    htmls += "<div id='phonecall' style='display:none;'><h2 style='padding:0;margin:0;color: #ebebeb;font: bold 12px \"Calibri\", Arial;'>Signup : To continue watching follow the steps below to have 7 days of unlimited access or wait 24 hours !</h2>";
	   	        htmls += "Sorry ! phonecall payment service is not avaiable in you country! Please choose another payment method.<br><br>";
                htmls += "<div id='login-box-field0' style='width:100%'><span id='contactAlloPass' style='font-size:10px'>" + config.payment.allopass[3] + "</span></br></div>";                
	        }else{
	    	    htmls += "<div id='phonecall' style='display:none;'><h2 style='padding:0;margin:0;color: #ebebeb;font: bold 12px \"Calibri\", Arial;'>Signup : To continue watching follow the steps below to have 7 days of unlimited access or wait 24 hours !</h2><br>";
	   	        htmls += config.payment.allopass[0] + " " + config.phone+"<br>";                
		        htmls += "<div id='login-box-field2' style='width:100%'><span  style='font-size:14px;font-weight: bold;'>"+config.ptext0+"</span><br><span  style='font-size:14px;font-weight: bold;'>";
		        htmls += config.payment.allopass[1] + "</span></div><br>";
	    	    htmls += "<div id='login-box-name2' style='margin-top:20px;display:inline;width:80px;text-align:right;padding:7px 10px 0 0;margin:0 0 7px 0;'> Code :</div>";
	    	    htmls += "<input style='width:148px;padding: 5px 4px 3px 3px;border: 1px solid #0d2c52;background-color:#1e4f8a;font-size: 16px;color:#ebebeb;' maxlength='2048' size='30' value=''  name='codess' id='codess'><br>";
	    	    htmls += "<div id='login-box-email2' style='margin-top:15px;display:inline;width:80px;text-align: right;padding: 7px 10px 0 0;margin:0 0 7px 0;'>EMAIL :</div>";
	    	    htmls += "<input style='width:148px;padding: 5px 4px 3px 3px;border: 1px solid #0d2c52;background-color:#1e4f8a;font-size: 16px;color: #ebebeb;' maxlength='2048' size='30' value=''  name='emailss' id='emailss'><input type='image' src='/images/login-btn.png' id='buttonss' name='buttonss' width='70' height='25'><br><br>";
                htmls += "<div id='coseInfoAllopass' style='width:100%'><span id='costAllopass' style='font-size:10px'>" + config.payment.allopass[2] + "</span></br></div>";                
                htmls += "<div id='login-box-field0' style='width:100%'><span id='contactAlloPass' style='font-size:7px'>" + config.payment.allopass[3] + "</span></br></div>";
	        };
	        htmls += "</div>";

	        htmls += "<div id='MPME' style='display:none;'><h2 style='padding:0;margin:0;color: #ebebeb;font: bold 12px \"Calibri\", Arial;'>Signup : To continue watching follow the steps below to have 7 days of unlimited access or wait 24 hours !</h2>";
	        htmls += "This is for MPME payment :<br><br>";
	        htmls += "<div id='login-box-field3' style='width:100%'><span  style='font-size:10px'>MPME payment <br></span>";
	        htmls += "MPME payment</div><center><input type='image' src='/images/login-btn.png' id='button10' name='button10' width='80' height='25'></center></div>";

	        htmls += "<div id='creditcard' style='display:none;'><h2 style='padding:0;margin:0;color: #ebebeb;font: bold 12px \"Calibri\", Arial;'>Signup : To continue watching follow the steps below to have 7 days of unlimited access or wait 24 hours !</h2>";
	        htmls += "This is for Credit Card payment :<br><br>";
	        htmls += "<div id='login-box-field3' style='width:100%'><span  style='font-size:10px'>Credit Card payment <br></span></div>";
	        htmls += "<center><form action='https://www.en.monelib.com/accessScript/ezPurchase.php' method='post' target='ccPurchase' ><input type='hidden' id='ext_frm_pos' name='ext_frm_pos' value='4622784'><input type='hidden' name='ext_frm_tpldiz' value='std_en' /><br><input type='image' src='/images/login-btn.png'  width='80' height='25' id='tono' name='tono' onclick=\"window.open('','ccPurchase','resizable=yes,menubar=no, location=yes, status=yes, scrollbars=yes, menubar=no, width=580, height=650');\" /> </form></center></div>";
	        htmls +="<div id='notices' style='display:none;margin:40px 0px 0px 0px;' >If your payment is successfull we will send an email to your payment email , please check for the payment .";
	        htmls +="<br> use the account and password <a style='color:blue;' id='tload' name='tload'  href="+config.lurl+"/?op=login>login</a> to watch  video.if you have any problem, please contact contact@zinwa.com<br><center>if you want to choose another payment method click here</center></div>";

	        htmls += "<br><center><input type='image' src='/images/new1.png' name='butt1' id='butt1' width='80' height='25' style='float:left;display:inline;' >";
	        htmls += "<input type='image' src='/images/new2.png' name='butt2' id='butt2' width='80' height='25'  style='float:left;display:inline'>";
	        htmls += "<input type='image' src='/images/new3.png' name='butt3' id='butt3' width='80' height='25' style='float:left;display:inline'>";
	        htmls += "<input type='image' src='/images/new.png' name='butt4' id='butt4' width='80' height='25' style='float:left;display:none;'>";
	        htmls += "<input type='image' src='/images/new4.png' name='butt5' id='butt5' width='80' height='25' style='float:left;display:inline;'></center><br><br></div>";

	        htmls +="<div id='notice' style='display:none;margin:40px 0px 0px 0px;' >We will sent an email to your account<div id='newemail'></div>, please check for the payment. Now,  ";
	        htmls +="you can only watch this video without time limit, if you refresh the page or want to watch another video, please click ";
	        htmls +="<a style='color:blue;' id='tload' name='tload'  href="+config.lurl+"/?op=login>login</a> first, and also you can click <div style='color:blue;' name='ongo' id='ongo' >continue</div> to play .if you have any problem, please contact contact@zinwa.com</div>";

	        _form.innerHTML = htmls;

	        var tono = $(_form).find("input#tono");
	        tono.click(function(){
		        document.getElementById("creditcard").style.display='none';
		        document.getElementById("notices").style.display='inline';
	        });
	        var Neosurf = $(_form).find("input#butt1");
	        Neosurf.click(function(){
			    this.style.display='none';	
			    document.getElementById("butt3").style.display="inline";	
			    document.getElementById("butt2").style.display="inline";	
			    document.getElementById("butt4").style.display="inline";	
			    document.getElementById("butt5").style.display="inline";	
			    document.getElementById("notices").style.display='none';
			    document.getElementById("creditcard").style.display="none";
			    document.getElementById("aonebill").style.display="none";
			    document.getElementById("phonecall").style.display="none";
			    document.getElementById("MPME").style.display="none";
			    document.getElementById("Neosurf").style.display="inline";
	        });
	        Neosurf.hover(function(){
		        this.style.height="30px";
		        this.style.width="90px";
	        });
	        Neosurf.mouseleave(function(){
		        this.style.height="25px";
		        this.style.width="80px";
	        });
	        var phonecall = $(_form).find("input#butt2");
	        phonecall.click(function(){	
			    this.style.display='none';	
			    document.getElementById("butt3").style.display="inline";	
			    document.getElementById("butt1").style.display="inline";	
			    document.getElementById("notices").style.display='none';
			    document.getElementById("butt4").style.display="inline";	
			    document.getElementById("butt5").style.display="inline";	
			    document.getElementById("creditcard").style.display="none";
			    document.getElementById("aonebill").style.display="none";
			    document.getElementById("Neosurf").style.display="none";
			    document.getElementById("MPME").style.display="none";
			    document.getElementById("phonecall").style.display="inline";
	        });
	        phonecall.hover(function(){
		        this.style.height="30px";
		        this.style.width="90px";
	        });
	        phonecall.mouseleave(function(){
		        this.style.height="25px";
		        this.style.width="80px";
	        });
	        var MPME =$(_form).find("input#butt3");	
	        MPME.hover(function(){
		        this.style.height="30px";
		        this.style.width="90px";
	        });
	        MPME.mouseleave(function(){
		        this.style.height="25px";
		        this.style.width="80px";
	        });
	        MPME.click(function(){
			    this.style.display='none';	
			    document.getElementById("butt4").style.display="inline";	
			    document.getElementById("butt1").style.display="inline";	
			    document.getElementById("butt2").style.display="inline";	
			    document.getElementById("notices").style.display='none';
			    document.getElementById("butt5").style.display="inline";	
			    document.getElementById("creditcard").style.display="none";
			    document.getElementById("aonebill").style.display="none";
			    document.getElementById("Neosurf").style.display="none";
			    document.getElementById("phonecall").style.display="none";
			    document.getElementById("MPME").style.display="inline";
	        });
	        var aonebill = $(_form).find("input#butt4");	
	        aonebill.click(function(){
			    this.style.display='none';	
			    document.getElementById("butt3").style.display="inline";	
			    document.getElementById("butt1").style.display="inline";	
			    document.getElementById("butt2").style.display="inline";	
			    document.getElementById("butt5").style.display="inline";	
			    document.getElementById("creditcard").style.display="none";
			    document.getElementById("MPME").style.display="none";
			    document.getElementById("Neosurf").style.display="none";
			    document.getElementById("phonecall").style.display="none";
			    document.getElementById("notices").style.display='none';
			    document.getElementById("aonebill").style.display="inline";
	        });
	        aonebill.hover(function(){
		        this.style.height="30px";
		        this.style.width="90px";
	        });
 	        aonebill.mouseleave(function(){
		        this.style.height="25px";
		        this.style.width="80px";
	        });
	        var creditcard = $(_form).find("input#butt5");	
	        creditcard.click(function(){
			    this.style.display='none';	
			    document.getElementById("butt3").style.display="inline";	
			    document.getElementById("butt1").style.display="inline";	
			    document.getElementById("butt2").style.display="inline";	
			    document.getElementById("butt4").style.display="inline";	
			    document.getElementById("MPME").style.display="none";
			    document.getElementById("Neosurf").style.display="none";
			    document.getElementById("phonecall").style.display="none";
			    document.getElementById("aonebill").style.display="none";
			    document.getElementById("notices").style.display='none';
			    document.getElementById("creditcard").style.display="inline";
	        });
	        creditcard.hover(function(){
		        this.style.height="30px";
		        this.style.width="90px";
	        });
 	        creditcard.mouseleave(function(){
		        this.style.height="25px";
		        this.style.width="80px";
	        });

            /*
	          var tload = $(_form).find("a#tload");
	          tload.click(function(){
			  window.location.href=config.lurl+'/?op=login';
	          });
            */ 
	        var ongo = $(_form).find("div#ongo");
	        ongo.click(function(){
			    _hide();
			    var bb=_player.getPosition();
			    docheck(bb);
	        });
	        var buttons =$(_form).find("input#buttons");	
	        buttons.click(function(){
		        var urls = "http://beta.zinwa.com/cgi-bin/aonebill_pay.pl";
		        var codes = "";
		        var emails = "";
		        var code = $(_form).find('input#codes');
		        codes = code.val();
		        if(codes == ""){
		            alert("input your access sms number !! ");
		            return 0;
		        };
		        if(config.id==-1){
		            var email = $(_form).find('input#emails');
		            emails = email.val();
		            if(emails ==""){
			            alert("input your email !! ");
			            return 0;
		            };
		            var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
		            if(!myreg.test(emails)){
			            alert("please input  the correct email");		
			            return 0;
			        };
		        };
                deleteAllCookies();            
		        execAjaxToAoneBill(codes,emails,urls);
	        });	
	        var buttonss =$(_form).find("input#buttonss");	
	        buttonss.click(function(){
		        var urls = "http://beta.zinwa.com/cgi-bin/allopass_pay.pl";
		        var codes = "";
		        var emails = "";
		        var code = $(_form).find('input#codess');
		        codes = code.val();
		        if(codes == ""){
		            alert("Input your access sms number !! ");
		            return 0;
		        };
		        if(config.id==-1){
		            var email = $(_form).find('input#emailss');
		            emails = email.val();
		            if(emails ==""){
			            alert("Input your email !! ");
			            return 0;
		            };
		            var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
		            if(!myreg.test(emails)){
			            alert("Please input  the correct email");		
			            return 0;
			        };
		        };
                deleteAllCookies();            
		        execAjaxToAoneBill(codes,emails,urls);
	        });	


	        var button10 =$(_form).find("input#button10");	
	        button10.click(function(){
			 goTo(config.payment.mpme);
			return;
		        var urls = "http://beta.zinwa.com/cgi-bin/aop-mpme.pl?type=mpme";
            	$.ajax({
	                url:urls,
                    success: function(data){
	                    var obj = eval(data);
	                    if(obj.message=="ok"){
				            //goTo(obj.buy_url);
				            /*
				            var orderForm = document.createElement('form');
				            _form.appendChild(orderForm);
				            orderForm.action= obj.buy_url;
				            orderForm.method="post";
				            orderForm.target="zinwa";
				            var btn = document.createElement('input');
				            orderForm.appendChild(btn);	
				            btn.type="image";
				            btn.src="/images/login-box-backg.png";
				            btn.width="1px";
				            btn.height="1px";
				            btn.style.display="none";
				            btn.onclick=function(){
					            window.open('','zinwa','resizable=yes,menubar=no, location=yes, status=yes, scrollbars=yes, menubar=no, width=580, height=650');
						    return false;
				            };
				            btn.click();
						*/
				var ale = document.createElement('a');
				ale.href=obj.buy_url;
				ale.target="_blank";
				_form.appendChild(ale);
				ale.click();
	                    }else{
	            	        alert("wrong,try again");
	                        return 0;
	                    };
                    }, 
                    error: function(XMLHttpRequest, textStatus, errorThrown){ 
	                    alert(" try again");
	                }
                });
	        });	



		    var button1 =$(_form).find("input#button1");	
		    button1.click(function(){
			    var urls = "http://beta.zinwa.com/cgi-bin/allopass_pay.pl";
			    var codes = "";
			    var emails = "";
			    var code = $(_form).find('input#code1');
			    codes = code.val();
			    if(codes == ""){
			        alert("Input your access sms number !! ");
			        return 0;
			    };
			    if(config.id==-1){
			        var email = $(_form).find('input#email1');
			        emails = email.val();
			        if(emails ==""){
				        alert("Input your email !! ");
				        return 0;
			        };
			        var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
			        if(!myreg.test(emails)){
				        alert("please input  the correct email");		
				        return 0;
				    };
			    };
			    deleteAllCookies();            
			    execAjaxToAoneBill(codes,emails,urls);
		    });	
		    var buttonn =$(_form).find("input#buttonn");	
		    buttonn.click(function(){
			 goTo(config.payment.neosurf);
			return;
			    var urls = "http://beta.zinwa.com/cgi-bin/aop-mpme.pl?type=neosurf&step=getAccessCode";
			    $.ajax({
				    url:urls,
				    success: function(data){
				        var obj = eval(data);
				        if(obj.message=="ok"){
					        //goTo(obj.buy_url);
				            var orderForm = document.createElement('form');
				            _form.appendChild(orderForm);
				            orderForm.action= obj.buy_url;
				            orderForm.method="post";
				            orderForm.target="zinwa";
				            var btn = document.createElement('input');
				            orderForm.appendChild(btn);	
				            btn.type="image";
				            btn.src="/images/login-box-backg.png";
				            btn.width="1px";
				            btn.height="1px";
				            btn.style.display="none";
				            btn.onclick=function(){
					            window.open('','zinwa','resizable=yes,menubar=no, location=yes, status=yes, scrollbars=yes, menubar=no, width=580, height=650');
						    return false;
				            };
				            btn.click();
			            }else{
				            alert("wrong,try again");
		                    return 0;
			            };
                	}, 
	                error: function(XMLHttpRequest, textStatus, errorThrown){ 
			            alert(" try again");
	        	    }
	            });
	        });
	    };
        function setup(evt) {
            _div.style.visibility = 'hidden';
	        _setupForm();
        };

        function deleteAllCookies() {
            var cookies = document.cookie.split(";");

            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i];
                var eqPos = cookie.indexOf("=");
                var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
            }
        };


        _player.onReady(setup);
        this.resize = function(width, height) {};
	    this.show = function(){ _show(); };

    };

    
    jwplayer().registerPlugin('takepay', template);
})(jwplayer);
