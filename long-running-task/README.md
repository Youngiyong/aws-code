# long-running-task

aws lambda 사용시 발생하는 문제인, lambda 실행시간에 대한 테스트를 수행합니다.

## lambda 사용시 timeout 발생 확인

  * lambda function에 지정하는 timeout 속성값을 지정하여 봅니다.
    * 정의된 timeout 경과시 발생하는 오류를 확인합니다.
  * lambda function timeout을 15분으로 이상으로 세팅해 봅니다.
    * 15분 이상 경과시 발생하는 오류 내용을 확인합니다.

## ecs task 실행을 통해서 timeout 경과에 대한 대응

  * lambda로 들어온 호출에 대해서, ecs task를 실행하는 것을 만들어 봅니다.
  * ecs로 구동되는 애플리케이션에 x-ray 및 elasticapm을 적용해 봅니다.
