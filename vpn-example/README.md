# vpn-example

사무실 혹은 인터넷 등 외부 환경에서, VPC 내부에 존재하는 인스턴스에 접근하기 위한 VPN 서버를 구축해 봅니다.

## 요구 사항

  * EC2 인스턴스 생성 : cloudformation, aws cli를 사용하여 인스턴스를 생성해 봅니다.
    * ubuntu 이미지로 작성
  * NAT 인스턴스 구성
    * 쉘 혹은 EC2 userdata를 사용하여 NAT를 구성해 봅니다.
  * VPN 설치 : openvpn을 `apt`를 사용하여 설치합니다.
    * VPN 클라이언트는 LDAP id/password를 통하여 로그인할 수 있도록 구성합니다.
  * VPC내부에서만 접근 가능한 RDS 인스턴스에 대해서 접근이 가능하여야 합니다.
  * VPN 클라이언트 접근시 VPC 내부에 접근시에만 VPN을 경유하는 것도 구생하고, 전체 인터넷 접근시 모두 VPN을 경유하는 구성도 제공합니다.

