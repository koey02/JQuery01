        // id="btn"을 찾으시오.
        var btn = document.getElementById ('btn');
             btn.onclick = function (event) {
                alert('고전 이벤트 모델 버튼이 클릭되었습니다.');
                }

        var p = document.getElementsByTagName ('p');
             p[0].onclick = function (event){
                alert('0번째 p태크가 클릭되었습니다.');
            }
            
            p[1].onclick = function (event){
                    alert('1번째 p태크가 클릭되었습니다.');
            }

            p[2].onclick = function (event){
                    alert('2번째 p태크가 클릭되었습니다.');
            }

            p[3].onclick = function (event){
                    alert('3번째 p태크가 클릭되었습니다.');
            }

            p[4].onclick = function (event){
                    alert('4번째 p태크가 클릭되었습니다.');
            }

            p[5].onclick = function (event){
                    alert('5번째 p태크가 클릭되었습니다.');
            }

            p[6].onclick = function (event){
                    alert('6번째 p태크가 클릭되었습니다.');
            }

            var btn2 = document.getElementsByClassName ('btn2'); //배열
            btn2[0].onclick = function (event){
                    alert('표준 이벤트 모델 클래스 버튼이 클릭되었습니다.');
            }