export default {
  bio: {
    header: "O mnie",
    content: `
  Doświadczona, pełna pasji programistka z ponad czteroletnim doświadczeniem
  zawodowym i wieloma zrealizowanymi projektami. Specjalizuję się we
  frameworkach takich jak Flask czy FastAPI. Projektowana przeze mnie
  architektura oprogramowania jest stabilna i skalowalna. Cenię sobie
  przejrzysty i łatwy w utrzymaniu kod, a także zasady TDD. W wolnym czasie
  projektuję wydruki 3D, płytki drukowane i programy, które ułatwiają mi
  codzienne życie.
`
  },
  robotics: {
    header: "Robotyka",
    skills: {
      title: "Euro Skills",
      content: `
  Reprezentowałam Polskę na międzynarodowych zawodach
  EuroSkills w dziedzinie "Mechatronika". W dwu osobowej
  drużynie odpowiedzialna byłam za zaprogramowanie serii
  sterowników PLC, tak żeby stacja MPS wykonywała poleconą
  sekwencję.
`
    },
    rubiks: {
      title: "Robot układający kostkę rubika",
      content: `
  Zaprogramowałam ruch, analizę danych i komunikację dla robota układającego
  kostkę Rubika. Robotem można było sterować za pomocą interfejsu napisanego
  w PyQT. Robot wykorzystywał kamery i bibliotekę OpenCV do odczytywania
  kolorów z kostki, a następnie poruszał silnikami krokowymi przez port
  szeregowy za pomocą płytki Arduino.
`
    },
    mobil: {
      title: "Mobilny robot z sześcio osiowymi ramionami",
      content: `
  Robot wyposażony był w dwa ramiona sześcio osiowe którym zaprogramowałam
  kinematykę odwrotną, sposób poruszania się robota oraz moduł wizji
  wykrywający pudełka i piłki. Odpowiedzialna byłam za zaprogramowanie
  wykrywania obiektów, przemieszczania się o odpowiedni dystans przy użyciu
  silników krokowych oraz podnoszenia obiektów ramionami.
`
    },
    engine: {
      title: "Sterowanie i reprezentacja zachowania silnika rakietowego",
      content: `
  W tym projekcie z zespołem badaliśmy nacisk silnika rakietowego na
  belkę tensometryczną. Silnik sterowany był zdalnie za pomocą interfejsu
  użytkownika napisanym w PyQT, który wyświetlał również reprezentację
  nacisku na grafie. Aplikacja główna komunikowała się z ESP8266 poprzez
  połączenie typu socket.
`
    }
  },
  backend: {
    header: "Backend",
    fmn: {
      title: "Aplikacja ułatwiająca zakupy",
      content: `
  W tym dwuosobowym projekcie pracowałam nad połączeniem z bazą danych
  i logiką całej aplikacji. Koszyk używał Event Sourcingu, a wydarzenia
  były wysyłane do frontendu poprzez SSE.
`
    },
    pim: {
      title: 'System "Product Information Management"',
      content: `
  Odpowiedzialna byłam za zespół trzyosobowy, którego zadaniem
  było zaprogramowanie backendu do systemu PIM. Backend napisany był we
  frameworku FastAPI i komunikował się z bazą danych PostgreSQL i
  MongoDB oraz z serwisem S3. Całość była hostowana na AWS.
`
    },
    users: {
      title: "System zarządzania użytkownikami",
      content: `
  Moduł ten był częścią większego systemu, w obrębie którego
  zarządzał autoryzacją i umożliwiał zarządzanie permisjami i rolami
  pracowników. Sesje były przechowywane w bazie danych Redis, a dane
  użytkowników w bazie danych PostgreSQL.
`
    },
    qpw: {
      title: "System przeliczania formuł",
      content: `
  Zaprojektowałam i wdrożyłam mechanizm przeliczania formuł wpisanych
  przez użytkownika. Jego interpreter wywoływany był przez RPC
  z RabbitMQ. Obsługiwał działania na liczbach, listach i wartościach
  tekstowych.
`
    },
    deepdive: {
      title: "Agregator danych robotów Universal Robots",
      content: `
  Skonfigurowałam urządzenie brzegowe z systemem Linux, które pozyskiwało
  informacje o pracy robota takie jak pozycje przegubów czy ich temperatury.
  Pozyskane dane wysyłane były cyklicznie do centralnego serwera agregującego
  dane w bazie danych szeregów czasowych.
`
    }
  },
  frontend: {
    header: "Frontend",
    mosaic: {
      title: "Gra logiczna",
      content: `
  Za pomocą Tauri stworzyłam grę mobilną w środowisku Svelte.
  Gra zawierała kilka motywów, tłumaczenia, samouczek i animacje.
  `
    },
    deepdive: {
      title: "System prezentacji robotów Universal Robots",
      content: `
  Narzędzie to umożliwiało wyświetlenie danych serwisowych robota w trakcie
  jego pracy. Prezentowało dane takie jak kąty lub temperatury przegubów na
  wykresach. Zawierało również interaktywny model 3D służący do łatwej analizy
  stanu robota
  `
    },
    pkp: {
      title: "Aplikacja biletów PKP",
      content: `
  Przed powstaniem oficjalnej mobilnej aplikacji PKP stworzyłam swoją -
  taką, która mogła odczytać bilety PDF, przechować nadchodzące podróże
  i wyświetlić kod QR do kontroli. Aplikacja była napisana w Android Studio.
  `
    }
  },
  contact: {
    header: "Kontakt",
    content: `
Można się ze mną skontaktować poprzez:
`
  }
};
