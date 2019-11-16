 // 페이지가 시작되자마자 header.html를 찾는다.   
 // load로 읽어서 넣는다.

 $(document).ready(function (event) {
    //<div w3-include-header="header.html"></div>
    $('div[w3-include-header]').load('header.html');

    //<div w3-include-footer="footer.html"></div>
    $('div[w3-include-footer]').load('footer.html');
});
