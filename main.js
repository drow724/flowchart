document.addEventListener("DOMContentLoaded", function(){
    var rightcard = false;
    var tempblock;
    var tempblock2;
    document.getElementById("blocklist").innerHTML = '<div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="1"><div class="grabme"><img src="assets/grabme.svg"></div><div class="blockin">                  <div class="blockico"><span></span><img src="assets/eye.svg"></div><div class="blocktext">                        <p class="blocktitle">업무 메시지 생성</p><p class="blockdesc">신규 업무 메시지 박스를 생성합니다.</p>        </div></div></div><div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="2"><div class="grabme"><img src="assets/grabme.svg"></div><div class="blockin">                    <div class="blockico"><span></span><img src="assets/action.svg"></div><div class="blocktext">                        <p class="blocktitle">전산 메시지 생성</p><p class="blockdesc">신규 전산 메시지 박스를 생성합니다.</p></div></div></div><div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="3"><div class="grabme"><img src="assets/grabme.svg"></div><div class="blockin">                    <div class="blockico"><span></span><img src="assets/time.svg"></div><div class="blocktext">                        <p class="blocktitle">멘트 메시지 생성</p><p class="blockdesc">신규 멘트 메시지 박승 생성합니다.</p>          </div></div></div>';
    flowy(document.getElementById("canvas"), drag, release, snapping);
    function addEventListenerMulti(type, listener, capture, selector) {
        var nodes = document.querySelectorAll(selector);
        for (var i = 0; i < nodes.length; i++) {
            nodes[i].addEventListener(type, listener, capture);
        }
    }
    function snapping(drag, first) {
        var grab = drag.querySelector(".grabme");
        grab.parentNode.removeChild(grab);
        var blockin = drag.querySelector(".blockin");
        blockin.parentNode.removeChild(blockin);
        if (drag.querySelector(".blockelemtype").value == "1") {
            drag.innerHTML += "<div class='blockyleft'><img src='assets/eyeblue.svg'><p class='blockyname'>신규 업무 메시지</p></div><div class='blockyright'><img src='assets/more.svg'></div><div class='blockydiv'></div><div class='blockyinfo'>내용을 입력해주세요</div>";
        } else if (drag.querySelector(".blockelemtype").value == "2") {
            drag.innerHTML += "<div class='blockyleft'><img src='assets/actionblue.svg'><p class='blockyname'>신규 전산 메시지</p></div><div class='blockyright'><img src='assets/more.svg'></div><div class='blockydiv'></div><div class='blockyinfo'>내용을 입력해주세요</div>";
        } else if (drag.querySelector(".blockelemtype").value == "3") {
            drag.innerHTML += "<div class='blockyleft'><img src='assets/timeblue.svg'><p class='blockyname'>신규 멘트 메시지</p></div><div class='blockyright'><img src='assets/more.svg'></div><div class='blockydiv'></div><div class='blockyinfo'>내용을 입력해주세요</div>";
        }
        return true;
    }
    function drag(block) {
        block.classList.add("blockdisabled");
        tempblock2 = block;
    }
    function release() {
        if (tempblock2) {
            tempblock2.classList.remove("blockdisabled");
        }
    }
    var disabledClick = function(){
        document.querySelector(".navactive").classList.add("navdisabled");
        document.querySelector(".navactive").classList.remove("navactive");
        this.classList.add("navactive");
        this.classList.remove("navdisabled");
        if (this.getAttribute("id") == "triggers") {
            document.getElementById("blocklist").innerHTML = '<div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="1"><div class="grabme"><img src="assets/grabme.svg"></div><div class="blockin">                  <div class="blockico"><span></span><img src="assets/eye.svg"></div><div class="blocktext">                        <p class="blocktitle">업무 메시지 생성</p><p class="blockdesc">신규 업무 메시지 박스를 생성합니다.</p>        </div></div></div><div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="2"><div class="grabme"><img src="assets/grabme.svg"></div><div class="blockin">                    <div class="blockico"><span></span><img src="assets/action.svg"></div><div class="blocktext">                        <p class="blocktitle">전산 메시지 생성</p><p class="blockdesc">신규 전산 메시지 박스를 생성합니다.</p></div></div></div><div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="3"><div class="grabme"><img src="assets/grabme.svg"></div><div class="blockin">                    <div class="blockico"><span></span><img src="assets/time.svg"></div><div class="blocktext">                        <p class="blocktitle">멘트 메시지 생성</p><p class="blockdesc">신규 멘트 메시지 박승 생성합니다.</p>          </div></div></div>';
        } else if (this.getAttribute("id") == "actions") {
            document.getElementById("blocklist").innerHTML = ''; //jqTree 붙일 거임
        } else if (this.getAttribute("id") == "loggers") {
            document.getElementById("blocklist").innerHTML = '<div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="9"><div class="grabme"><img src="assets/grabme.svg"></div><div class="blockin">                  <div class="blockico"><span></span><img src="assets/log.svg"></div><div class="blocktext">                        <p class="blocktitle">Add new log entry</p><p class="blockdesc">Adds a new log entry to this project</p>        </div></div></div><div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="10"><div class="grabme"><img src="assets/grabme.svg"></div><div class="blockin">                  <div class="blockico"><span></span><img src="assets/log.svg"></div><div class="blocktext">                        <p class="blocktitle">Update logs</p><p class="blockdesc">Edits and deletes log entries in this project</p>        </div></div></div><div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="11"><div class="grabme"><img src="assets/grabme.svg"></div><div class="blockin">                  <div class="blockico"><span></span><img src="assets/error.svg"></div><div class="blocktext">                        <p class="blocktitle">Prompt an error</p><p class="blockdesc">Triggers a specified error</p>        </div></div></div>';
        }
    }
    addEventListenerMulti("click", disabledClick, false, ".side");
    document.getElementById("close").addEventListener("click", function(){
       if (rightcard) {
           rightcard = false;
           document.getElementById("properties").classList.remove("expanded");
           setTimeout(function(){
                document.getElementById("propwrap").classList.remove("itson"); 
           }, 300);
            tempblock.classList.remove("selectedblock");
       } 
    });
    
document.getElementById("removeblock").addEventListener("click", function(){
 flowy.deleteBlocks();
});

var closeCard = document.getElementById("closecard");

closeCard.onclick = close;

function close() {
    var leftCard = document.getElementById("leftcard");
    leftCard.style.display = "none";
    var openCard = document.getElementById("opencard");
    openCard.style.display = "block";
}

var openCard = document.getElementById("opencard");

openCard.onclick = open;

function open() {
    var leftCard = document.getElementById("leftcard");
    leftCard.style.display = "block";
    var openCard = document.getElementById("opencard");
    openCard.style.display = "none";
}

var aclick = false;
var noinfo = false;
var beginTouch = function (event) {
    aclick = true;
    noinfo = false;
    if (event.target.closest(".create-flowy")) {
        noinfo = true;
    }
}
var checkTouch = function (event) {
    aclick = false;
}
var doneTouch = function (event) {
    if (event.type === "mouseup" && aclick && !noinfo) {
      if (!rightcard && event.target.closest(".block") && !event.target.closest(".block").classList.contains("dragging")) {
            tempblock = event.target.closest(".block");
            rightcard = true;
            document.getElementById("properties").classList.add("expanded");
            document.getElementById("propwrap").classList.add("itson");
            tempblock.classList.add("selectedblock");
       } 
    }
}
addEventListener("mousedown", beginTouch, false);
addEventListener("mousemove", checkTouch, false);
addEventListener("mouseup", doneTouch, false);
addEventListenerMulti("touchstart", beginTouch, false, ".block");
});
