(function (){
    function fnAddButtons() {
        var btn=document.createElement("input");
        var img=document.createElement("img");
        img.src='https://img.icons8.com/material-rounded/24/000000/repeat.png';
        btn.value="LOOP";
        img.style.height="10";
        btn.style="border: none";
        btn.style.backgroundColor="#f9f9f9";
        btn.style.fontWeight='bold';
        btn.id="hhhh";
        btn.type="submit";
        document.querySelector("ytd-menu-renderer.style-scope.ytd-video-primary-info-renderer #top-level-buttons-computed").appendChild(img);
        document.querySelector("ytd-menu-renderer.style-scope.ytd-video-primary-info-renderer #top-level-buttons-computed").appendChild(btn);
    }
    fnAddButtons();
})();