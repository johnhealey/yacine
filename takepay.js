(function(jwplayer){

    var template = function(_player, config, _div) {    
        
        var paymethod = 1;
        
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
            _div.style.marginLeft='150px';
            
            var _form = document.createElement("div");
            _div.id="outside";
            _div.appendChild(_form);
            
            //var htmls= "<div id='payment' style='display:inline;'><div id='aonebill' style='display:inline;'>";
            var htmls= '<link rel="stylesheet" type="text/css" href="images/popupcss/popup.css">';
            htmls += "<div id='popup'>";
            htmls += "<div id='topline'></div>";
            htmls += "<div id = 'content'>";
            htmls += "<div id='content_top'><span style='font-family: Impact; font-size: 39px; color: #363636;'>SIGNUP NOW TO CONTINUE WATCHING</span><br>";
            htmls += "<hr style='border-top: 2px dotted #2db9ec; height: 3px; width:100%;'>";
            htmls += "<span style='font-family: Franklin Gothic Book; font-size: 20px; color: #6f6f6f;'>To continue watching the follow steps below to have 7 days unlimited  access or wait</span><span style='font-family: Franklin Gothic Book; font-size: 20px; color: #000000;'> for 24 hours !</span>  ";
            htmls += "</div>";
            htmls += "<div id='content_left'>";
            htmls += "<table cellpadding='0' cellspacing='0' border='0'>";
            htmls += "<tr><td align='center'>";
            htmls += "<div id='content_left_btn1' class='btnclass selected'></div>";
            htmls += "</td></tr>";
            htmls += "<tr><td align='center'>";
            htmls += "<div id='content_left_btn2' class='btnclass deselected'></div>";
            htmls += "</td></tr>";
            htmls += "<tr><td align='center'>";
            htmls += "<div id='content_left_btn3' class='btnclass deselected'></div>";
            htmls += "</td></tr>";
            htmls += "<tr><td align='center'>";
            htmls += "<div id='content_left_btn4' class='btnclass deselected'></div>";
            htmls += "</td></tr>";
            htmls += "<tr><td align='center'>";
            htmls += "<div id='content_left_btn5' class='btnclass deselected'></div>";
            htmls += "</td></tr>";
            htmls += "<tr><td align='center'>";
            htmls += "<div id='content_left_btn6' class='btnclass deselected'></div>";
            htmls += "</td></tr>";
            htmls += "</table>";
            htmls += "</div>";
            htmls += "<div id='content_right'>";
            htmls += "<div id='content_right_txt'>";
            htmls += "<span style='font-family: Franklin Gothic Book; font-size: 20px; font-weight: bold; color: #000000;'>1</span><span class='special-dot'></span><span style='font-family: Franklin Gothic Book; font-size: 20px; color: #6f6f6f;'>&nbsp;&nbsp;&nbsp;Envoyer le mot </span><span style='font-family: Franklin Gothic Book; font-size: 20px; font-style: italic; color: #6f6f6f;'>Zinwa </span><span style='font-family: Franklin Gothic Book; font-size: 20px; color: #6f6f6f;'>par </span><span style='font-family: Franklin Gothic Book; font-size: 20px; font-weight: bold; color: #000000;'>SMS</span><span style='font-family: Franklin Gothic Book; font-size: 20px; color: #6f6f6f;'> au </span><span style='font-family: Franklin Gothic Book; font-size: 20px; color: #2b99d4;'>81090</span><br>";
            htmls += "<span style='font-family: Franklin Gothic Book; font-size: 20px; font-weight: bold; color: #000000;'>2</span><span class='special-dot'></span><span style='font-family: Franklin Gothic Book; font-size: 20px; color: #6f6f6f;'>&nbsp;&nbsp;&nbsp;Entrez le code et votre e-mail ci-dessous</span>";
            htmls += "</div>";
            htmls += "<div id='input_container'>";
            htmls += "<div id='input_code_container'>";
            htmls += "<h2 style='color: black; font-size: 25px; font-weight: bold;'>Code:</h2>";
            htmls += "<input id='input_code' name='input_code'>";
            htmls += "<p id='code_check' style='display: none;'></p>";
            htmls += "</div>";
            htmls += "<div id='input_mail_container'>";
            htmls += "<h2 style='color: black; font-size: 25px; font-weight: bold;'>E-Mail:</h2>";
            htmls += "<input id='input_mail' name='input_mail'>";
            htmls += "<p id='mail_check' style='display: none;'></p>";
            htmls += "</div></div></div></div>";
            htmls += "<div id='bottomline'></div>";
            htmls += "<div id='playbtn'></div>";
            htmls += "<div id='accessleter'></div>";
            htmls += "</div>";
          
            _form.innerHTML = htmls;
            /*
              var tload = $(_form).find("a#tload");
              tload.click(function(){
              window.location.href=config.lurl+'/?op=login';
              });
            */ 
            var paybtn1 = $(_form).find("div#content_left_btn1");
            var paybtn2 = $(_form).find("div#content_left_btn2");
            var paybtn3 = $(_form).find("div#content_left_btn3");
            var paybtn4 = $(_form).find("div#content_left_btn4");
            var paybtn5 = $(_form).find("div#content_left_btn5");
            var paybtn6 = $(_form).find("div#content_left_btn6");
            paybtn1.click(function(){
               paymethod = 1;
               $("#content_left table tr td div").removeClass("selected");
               $("#content_left table tr td div").addClass("deselected");
               
               paybtn1.removeClass("deselected" );
               paybtn1.addClass("selected" );
            });
            paybtn2.click(function(){
                paymethod = 2;
               $("#content_left table tr td div").removeClass("selected");
               $("#content_left table tr td div").addClass("deselected");
               
               paybtn2.removeClass("deselected" );
               paybtn2.addClass("selected" );
            });
            paybtn3.click(function(){
                paymethod = 3;
               $("#content_left table tr td div").removeClass("selected");
               $("#content_left table tr td div").addClass("deselected");
               
               paybtn3.removeClass("deselected" );
               paybtn3.addClass("selected" );
            });
            paybtn4.click(function(){
                paymethod = 4;
               $("#content_left table tr td div").removeClass("selected");
               $("#content_left table tr td div").addClass("deselected");
               
               paybtn4.removeClass("deselected" );
               paybtn4.addClass("selected" );
            });
            paybtn5.click(function(){
                paymethod = 5;
               $("#content_left table tr td div").removeClass("selected");
               $("#content_left table tr td div").addClass("deselected");
               
               paybtn5.removeClass("deselected" );
               paybtn5.addClass("selected" );
            });
            paybtn6.click(function(){
                paymethod = 6;
               $("#content_left table tr td div").removeClass("selected");
               $("#content_left table tr td div").addClass("deselected");
               
               paybtn6.removeClass("deselected" );
               paybtn6.addClass("selected" );
            });
            var playbtn = $(_form).find("div#playbtn");
            playbtn.click(function(){
                switch(paymethod)
                {
                    case 1:
                        paymethod_visa();
                        break;
                    case 2:
                        paymethod_sms();
                        break;
                    case 3:
                        paymethod_neosurf();
                        break;
                    case 4:
                        paymethod_paysafecard();
                        break;
                    case 5:
                        paymethod_call();
                        break;
                    case 6:
                        paymethod_mobilebill();
                        break;
                }

            });
            function paymethod_visa(){
                
               window.open('https://www.en.monelib.com/accessScript/ezPurchase.php?ext_frm_pos=4622784&ext_frm_tpldiz=std_en','ccPurchase','resizable=yes,menubar=no, location=yes, status=yes, scrollbars=yes, menubar=no, width=580, height=650');
            }
            function paymethod_sms(){
                var urls = "http://beta.zinwa.com/cgi-bin/aonebill_pay.pl";
                var input_code = "";
                var input_email = "";
                var code = $(_form).find('input#input_code');
                input_code = code.val();
                if(input_code == ""){
                    alert("input your access sms number !! ");
                    return 0;
                };
                if(config.id==-1){
                    var email = $(_form).find('input#input_email');
                    input_email = email.val();
                    if(input_email ==""){
                        alert("input your email !! ");
                        return 0;
                    };
                    var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
                    if(!myreg.test(input_email)){
                        alert("please input  the correct email");        
                        return 0;
                    };
                };
                deleteAllCookies();            
                execAjaxToAoneBill(input_code,input_email,urls);
            }
            function paymethod_neosurf(){
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
            }
            function paymethod_paysafecard(){
                
            }
            function paymethod_call(){
                
            }
            function paymethod_mobilebill(){
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
            }
            
            var ongo = $(_form).find("div#ongo");
            ongo.click(function(){
                _hide();
                var bb=_player.getPosition();
                docheck(bb);
            });
            var buttonss =$(_form).find("input#buttonss");    
            buttonss.click(function(){
                var urls = "http://beta.zinwa.com/cgi-bin/allopass_pay.pl";
                var input_code = "";
                var input_email = "";
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
