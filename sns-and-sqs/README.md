# sns and sqs

AWS에서 제공하는 SNS, SQS를 사용하고, lambda에서 받아서 처리하는 것을 테스트해 봅니다.

## SNS

  * SNS에서 event를 받아서 실행하는 lambda를 작성해 봅니다.
  * lambda에서 `sleep` 30초를 실행하고, SNS에 메시지를 보내어, 별도의 lambda가 실행되는 것을 확인합니다. cloudwatch concurrent 확인
  * 한번에 10개의 메시지를 보내어, 병렬로 실행되는지, 하나의 이벤트에서 몇개의 메시지를 일괄로 받을 수 있는지 테스트합니다.

## SQS

  * SQS에서 event를 받아서 실행하는 lambda를 작성해 봅니다.
  * lambda에서 `sleep` 30초를 실행하고, SQS에 메시지를 보내어, 별도의 lambda가 실행되는 것을 확인합니다. cloudwatch concurrent 확인
  * 한번에 10개의 메시지를 보내고, 병렬로 처리하는 것과, 메시지를 배치로 받는 것을 테스트 해봅니다.

## non lambda

  * nodejs 혹은 python 클라이언트를 통해서 sns, sqs에서 메시지를 받아서 실행해 봅니다.
  * 1개의 메시지를 받는 것과, batch api를 통해서 여러개의 메시지를 받아보는 것을 테스트 합니다.
  * 메시지 처리후, delete를 수행하지 않을 경우, 몇 번까지 동일 작업이 들어오는지 확인합니다.
