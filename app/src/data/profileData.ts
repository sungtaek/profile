export type Skill = {
  name: string;
  level: string;
  proficiency: number;
  description?: string;
};

export type Experience = {
  company: string;
  period: string;
  position: string;
  description: string;
  technologies: string[];
};

export type ProjectDetail = {
  title?: string;
  description: string;
  achievements?: string[];
};

export type Project = {
  id: string;
  title: string;
  period: string;
  summary: string;
  technologies: string[];
  details: ProjectDetail[];
  image?: string; // 프로젝트 대표 이미지 경로
};

export type Education = {
  school: string;
  period: string;
  major: string;
  gpa?: string;
};

export type Certification = {
  name: string;
  date: string;
  issuer: string;
};

export const profileData = {
  name: "이성택",
  title: "백엔드 엔지니어",
  summary: "언제나 쓸모를 꿈꾸는 백엔드 개발자입니다.\n주로 Java, JavaScript, C/C++을 사용하며,\n가끔 Python, Golang을 사용하기도 합니다.",
  birthdate: "1981. 11. 06",
  email: "leesungtaek@gmail.com",
  phone: "010-9289-8528",
  github: "https://github.com/sungtaek",
  military: "육군 만기전역(2002.02 ~ 2004.04)",
  about: [
    "삼성전자에서 AI 서버 개발 그룹의 수석 엔지니어로 근무하였습니다.\nBixby, Samsung Daily 등 대규모 서비스의 백엔드 시스템을 설계하고, 개발, 운영한 경험이 있습니다.",
    "지금까지 해왔고, 또한 제일 관심 있는 분야는 Backend 시스템입니다.\nBackend 시스템은 대용량 트래픽 처리 및 서비스를 안정적으로 제공하는 것이 기본이고,\n그 위에 유연한 확장과 요구사항에 따른 다양한 기능 추가가 손쉽게 될 수 있는 것이 이상적인 목표라 생각합니다.",
    "개발 경험 때문에 굳이 특정 솔루션이나 프레임워크에 종속되는 것을 지양하며,\n서비스나 프로젝트에 따라 그에 맞는 기술을 사용하는 것이 바람직하다고 생각합니다.\n특정 기술분야에 얽매이지는 않는 편이며, 시대의 흐름에 따라 새로운 기술들을 최대한 빨리 습득해 놓고,\n서비스에 필요한 기술이라 판단이 되면, 과감히 적용하려 합니다."
  ],
  skills: {
    languages: [
      {
        name: "Java",
        level: "고급",
        proficiency: 95,
        description: "주로 백엔드 서버 개발에 사용. Spring 프레임워크 전문성 보유."
      },
      {
        name: "JavaScript/TypeScript",
        level: "고급",
        proficiency: 90,
        description: "Node.js 백엔드 개발 및 웹 개발에 활용."
      },
      {
        name: "C/C++",
        level: "중급",
        proficiency: 80,
        description: "고성능이 요구되는 시스템 개발에 활용."
      },
      {
        name: "Python",
        level: "중급",
        proficiency: 75,
        description: "스크립팅, 데이터 처리 및 도구 개발에 활용."
      }
    ],
    frameworks: [
      {
        name: "Spring",
        level: "고급",
        proficiency: 95,
        description: "대규모 백엔드 시스템 개발에 활용. Spring Boot, WebFlux 경험."
      },
      {
        name: "Node.js",
        level: "고급",
        proficiency: 90,
        description: "마이크로서비스 및 API 개발에 활용."
      },
      {
        name: "Express",
        level: "중급",
        proficiency: 85,
        description: "Node.js 기반 웹 서버 및 API 구축에 활용."
      }
    ],
    network: [
      {
        name: "RESTful",
        level: "고급",
        proficiency: 95,
        description: "API 설계 및 구현에 폭넓은 경험 보유."
      },
      {
        name: "gRPC",
        level: "고급",
        proficiency: 90,
        description: "고성능 마이크로서비스 간 통신에 활용."
      }
    ],
    database: [
      {
        name: "MySQL",
        level: "고급",
        proficiency: 90,
        description: "관계형 데이터 모델링 및 최적화 경험."
      },
      {
        name: "MongoDB",
        level: "고급",
        proficiency: 85,
        description: "비정형 데이터 저장 및 처리에 활용."
      },
      {
        name: "Redis",
        level: "고급",
        proficiency: 90,
        description: "고성능 캐싱 및 메시지 큐 구현에 활용."
      },
      {
        name: "DynamoDB",
        level: "중급",
        proficiency: 80,
        description: "AWS 환경에서 대규모 데이터 관리에 활용."
      }
    ],
    cicd: [
      {
        name: "Jenkins",
        level: "고급",
        proficiency: 90,
        description: "자동화된 빌드 및 배포 파이프라인 구축."
      },
      {
        name: "GitAction",
        level: "중급",
        proficiency: 85,
        description: "GitHub 기반 자동화 워크플로우 구현."
      },
      {
        name: "ArgoCD",
        level: "중급",
        proficiency: 80,
        description: "Kubernetes 환경에서 GitOps 기반 배포 자동화."
      }
    ],
    cloud: [
      {
        name: "Kubernetes",
        level: "고급",
        proficiency: 90,
        description: "컨테이너 오케스트레이션 및 대규모 서비스 관리."
      },
      {
        name: "Docker",
        level: "고급",
        proficiency: 95,
        description: "컨테이너 기반 애플리케이션 패키징 및 배포."
      },
      {
        name: "AWS",
        level: "고급",
        proficiency: 85,
        description: "EC2, S3, Lambda, ECS 등 다양한 서비스 활용 경험."
      },
      {
        name: "GCP",
        level: "중급",
        proficiency: 80,
        description: "GKE, Cloud Storage 등 활용 경험."
      }
    ]
  },
  experience: [
    {
      company: "삼성전자",
      period: "2012.09 ~ 2025.02",
      position: "MX 사업부 AI 서버개발그룹 / CL4 (수석 엔지니어)",
      description: "Mobile 서비스 Backend 서버 개발",
      technologies: ["Java", "Spring", "Node.js", "AWS", "GCP", "Kubernetes"]
    },
    {
      company: "텔코웨어",
      period: "2006.12 ~ 2012.07",
      position: "IP 솔루션팀 / 과장",
      description: "이동통신 솔루션 서버 개발",
      technologies: ["C/C++", "SIP", "HTTP", "HLS"]
    }
  ],
  projects: [
    {
      id: "bixby",
      title: "Bixby",
      period: "2018.01 ~ 2025.02",
      summary: "삼성전자의 인공지능 비서 서비스로써,\n모바일, TV, 가전등 다양한 기기에 연동되어 서비스",
      technologies: ["Java", "Spring", "TypeScript", "DynamoDB", "Redis", "GCP"],
      image: "bixby.svg",
      details: [
        {
          title: "ASR 서비스",
          description: "사용자 발화(음성) 데이터를 Text로 변환해 주는 서버로써,\nBixby 서비스의 맨 앞단에서 사용자의 발화를 Text로 변환하여\nNLU로 전달하는 역할을 수행",
          achievements: [
            "역할: ASR 서버 개발 리드",
            "사용자 음성 stream을 수신하여, 전처리 및 STT-engine, ITN을 이용하여 text 변환 처리",
            "음성 Streaming 처리를 위하여 주로 gRPC를 사용하며, 내부 서버간 연동에는 REST api도 사용",
            "인식률 향상을 위하여, 사용자별 데이터 모델을 Cloud Storage에 저장하여 활용",
            "5명의 팀원과 신규 기능 설계 및 개발 리딩",
            "보다 효율적인 stream 데이터 처리를 위하여, Spring webflux를 사용한 구조로 전면 refactoring 진행"
          ]
        },
        {
          title: "PDSS 서비스",
          description: "Bixby 서비스의 사용자 데이터 관리 서버로써,\n사용자의 user 및 device data를 관리하며,\nASR 및 NLU 등 Bixby 내의 서버들에게 제공",
          achievements: [
            "역할: PDSS 서버 개발 리드",
            "device 및 IoT 서버들로부터 사용자 데이터를 수집 처리",
            "사용자 데이터 가공 및 저장",
            "Bixby 내부 서비스들에게 사용자 데이터 제공",
            "data 저장을 위한 database로는 Dynamodb를 사용했으며, message queue 및 cache 처리를 위하여 Redis를 사용",
            "JavaScript에서 TypeScript로 포팅하여 버그 최소화"
          ]
        },
        {
          title: "Marketplace 서비스",
          description: "Bixby의 capsule 및 사용자 발화 관리 시스템으로써\nBixby app을 통하여 캡슐 관리 및 사용자 Activity의 예약,\n상태 확인 등을 제공하는 서비스",
          achievements: [
            "역할: 서버 개발",
            "캡슐 관리 서버 및 추천 서버 개발",
            "전시용 캡슐 데이터 관리를 위해 json필드 쿼리가 수월한 Postgresql을 사용",
            "데이터 변경사항이 작고 쿼리량은 많은 캡슐 데이터를 in memory로 옮겨서 처리"
          ]
        }
      ]
    },
    {
      id: "samsung-daily",
      title: "Samsung Daily",
      period: "2016.11 ~ 2020.06",
      summary: "사용자의 사용패턴에 따라 자주 쓰는 App 및 서비스가 카드 형태로 노출되는 서비스",
      technologies: ["Java", "Spring", "React", "MongoDB", "AWS", "Docker"],
      image: "samsung-daily.svg",
      details: [
        {
          description: "삼성 모바일 기기의 맨 앞 페이지에 노출되는 서비스 중 하나로써,\n사용자의 사용패턴에 따라 자주 쓰는 App 및 서비스가 카드 형태로 노출되어,\n필요한 순간에 원하는 정보를 확인할 수 있는 서비스",
          achievements: [
            "역할: 서버 개발",
            "사용자 기기에 카드정보를 제공하는 API 서버 개발",
            "카드 관리용 Admin 서버, 3rd party 카드 제작을 위한 Portal 서버 개발",
            "다양한 카드 메타데이터 관리를 위해 비정형 데이터를 저장할 수 있는 MongoDB 사용",
            "사용자별로 노출시킬 카드를 계산하기 위한 기기 log 수집 및 추천 카드 생성",
            "카드 관리용 Admin 및 3rd party 카드 제작 Portal을 위한 Web 페이지 개발"
          ]
        }
      ]
    },
    {
      id: "samsung-roaming",
      title: "Samsung Roaming",
      period: "2015.06 ~ 2016.12",
      summary: "Soft SIM을 이용한 데이터 Roaming 서비스",
      technologies: ["Java", "Spring", "MySQL", "AWS"],
      image: "samsung-roaming.svg",
      details: [
        {
          description: "Soft SIM을 이용한 데이터 Roaming 서비스.\n삼성폰을 가진 유저가 해외 여행 전 또는 현지에서 데이터 SIM 구매 및 사용을 제공",
          achievements: [
            "역할: 서버 개발",
            "3rd party MVNO 업체와 연동하여 Soft SIM의 구매 및 사용을 처리",
            "전시용 상품, 구매 이력 및 할인 이벤트 등 다양한 데이터의 relation을 효율적으로 설계",
            "상품 결재를 위하여 Samsung Billing 서버와 연동 개발",
            "안전한 과금 처리를 위한 2중 3중의 보완 장치 개발",
            "다양한 상품 사용 및 예외 처리 시나리오 개발",
            "Soft SIM 활성화를 위한 다양한 edge 케이스 개발",
            "안정적인 과금 처리를 위한 정산 서버 개발"
          ]
        }
      ]
    },
    {
      id: "watchon",
      title: "WatchON",
      period: "2012.09 ~ 2015.03",
      summary: "모바일에서 VOD 및 TV 프로그램 정보(EPG)를 제공하는 서비스",
      technologies: ["Java", "Spring", "Oracle", "MySQL", "AWS"],
      image: "watchon.svg",
      details: [
        {
          description: "모바일에서 VOD 및 TV 프로그램 정보(EPG)를 제공하고,\nVOD 컨텐츠 구매 및 개인의 시청 패턴에 기반하여 프로그램을 추천해주는 서비스",
          achievements: [
            "역할: 서버 개발",
            "다양한 컨텐츠 메타데이터 업체와 컨텐츠 서비스 업체의 데이터를 수급하여 일원화된 데이터 베이스 구축",
            "대용량 데이터 수집 및 전시 데이터 생성을 위한 배치 서버 개발",
            "단말에 데이터 제공을 위한 API서버 개발",
            "메타데이터 관리를 위하여 대용량 데이터 쿼리에 적합한 Oracle을 사용",
            "전시용 상품 데이터는 access가 빠른 MySQL을 사용",
            "서비스에 문제가 없도록 데이터 성격에 맞게, daily 또는 hourly 배치를 수행",
            "다양한 프로바이더 연동 확장을 위한 application 구조 변경",
            "다양한 컨텐츠 메타데이터 정형화를 위한 데이터 구조 설계"
          ]
        }
      ]
    },
    {
      id: "cscf",
      title: "CSCF",
      period: "2006.12 ~ 2012.02",
      summary: "모바일 폰 영상통화, 인터넷 집전화, IM 처리 서버",
      technologies: ["C", "SIP", "Diameter"],
      image: "cscf.svg",
      details: [
        {
          description: "LG Telecom, SK Broadband의 모바일 폰 영상통화,\n인터넷 집전화, IM(Instance Message) 처리 서버",
          achievements: [
            "역할: 서버 개발",
            "3gpp 통신 규약에 명시된 IMS 서버들로 인터넷 기반의 전화 서비스 제공",
            "모든 서버들은 기본적으로 SIP 프로토콜을 사용하며, 영상 통화 및 메세지 전달을 위한 서비스 기능 제공",
            "매우 빠른 처리속도를 보장해야 했기 때문에 모든 서버는 C로 개발",
            "S-CSCF(Serving CSCF), P-CSCF(Proxy CSCF), 과금 AS(Application Server) 서버 개발",
            "안정적으로 LGT, SKB에 영상통화 서비스 제공"
          ]
        }
      ]
    },
    {
      id: "skt-pcf",
      title: "PCF",
      period: "2012.02 ~ 2012.07",
      summary: "SKT의 사용자 데이터 사용량 절감을 위한 컨텐츠 압축 및 cache 시스템",
      technologies: ["C", "HTTP", "HLS"],
      image: "skt-pcf.svg",
      details: [
        {
          description: "사용자가 Download 받는 데이터의 사용량 절감을 위한\n컨텐츠 압축 및 cache 시스템",
          achievements: [
            "역할: 서버 개발",
            "사용자가 Http Live Streaming 으로 컨텐츠 재생시, http 메시지를 proxy하는 과정에서, 캐시 서버 및 컨텐츠 압축 서버와 연동",
            "데이터 사이즈를 줄이는 동시에 끊김없는 컨텐츠 재생 처리 제공",
            "컨텐츠 제어 Proxy 서버 개발",
            "10% 이상의 컨텐츠 데이터 사용량 감소 성과"
          ]
        }
      ]
    }
  ],
  education: [
    {
      school: "경희대학교",
      period: "2000.03 ~ 2007.01",
      major: "전자컴퓨터공학부",
      gpa: "3.2 / 4.5"
    },
    {
      school: "동북고등학교",
      period: "1997.03 ~ 2000.02",
      major: "졸업"
    }
  ],
  certifications: [
    {
      name: "정보처리 기사",
      date: "2006.12",
      issuer: "한국 산업인력 공단"
    }
  ]
};
