export default {
  bio: {
    header: "O mnie",
    p1: `
  Jako programistka z ponad czteroletnim stażem zawodowym łączę pasję
  do kodowania z doświadczeniem zdobytym przy realizacji zaawansowanych
  projektów. Tworzę stabilną i skalowalną architekturę oprogramowania,
  a w codziennej pracy cenię sobie przejrzysty i łatwy w utrzymaniu kod
  oraz kieruję się praktyką TDD.
`,
    p2: `
  Moje zainteresowanie programowaniem rozwijajało się już w dzieciństwie
  w środowisku Processing i p5.js. Kolejnym krokiem była nauka w Technikum
  Mechatronicznym nr 1 w Warszawie, gdzie zafascynowała mnie robotyka oraz
  programowanie układów Arduino i Raspberry Pi. Po ukończeniu szkoły
  dołączyłam do zespołu Elmark Automatyka S.A., gdzie jako programistka
  zdobyłam doświadczenie w tworzeniu aplikacji internetowych - zarówno
  po stronie backendowej, jak i frontendowej.
`,
    p3: `
  W wolnym czasie projektuję modele do druku 3D, obwody elektroniczne oraz
  autorskie narzędzia automatyzujące codzienne zadania.  W najbliższym
  czasie planuję rozpocząć studia na kierunku mechatronicznym, aby dalej
  rozwijać swoje interdyscyplinarne kompetencje.
`
  },
  robotics: {
    header: "Robotyka",
    skills: {
      title: "Euro Skills",
      content: `
  Reprezentowałam Polskę na międzynarodowych zawodach
  EuroSkills w dziedzinie "Mechatronika". W dwuosobowej
  drużynie byłam odpowiedzialna za programowanie serii
  sterowników PLC tak, by stacja MPS wykonywała poleconą
  sekwencję.
`
    },
    rubiks: {
      title: "Robot układający kostkę Rubika",
      content: `
  Zaprogramowałam ruch, analizę danych i komunikację dla robota układającego
  kostkę Rubika. Można było nim sterować za pomocą interfejsu napisanego
  w PyQT. Robot wykorzystywał kamery i bibliotekę OpenCV do odczytywania
  kolorów z kostki, a następnie poruszał silnikami krokowymi przez port
  szeregowy za pomocą płytki Arduino.
`
    },
    mobil: {
      title: "Mobilny robot z sześcioosiowymi ramionami",
      content: `
  Robot wyposażony był w dwa sześcioosiowe ramiona, którym zaprogramowałam
  kinematykę odwrotną, sposób poruszania się robota oraz moduł wizji
  wykrywający pudełka i piłki. Byłam odpowiedzialna za programowanie
  wykrywania obiektów, przemieszczania się o odpowiedni dystans przy użyciu
  silników krokowych oraz podnoszenia obiektów ramionami.
`
    },
    engine: {
      title: "Sterowanie i reprezentacja zachowania silnika rakietowego",
      content: `
  W trakcie realizacji projektu, wraz z zespołem, badałam nacisk silnika
  rakietowego na belkę tensometryczną. Silnik był zdalnie sterowany
  za pomocą interfejsu użytkownika napisanym w PyQT, który wyświetlał
  również reprezentację nacisku na grafie. Aplikacja główna komunikowała
  się z ESP8266 poprzez połączenie typu socket.
`
    }
  },
  backend: {
    header: "Backend",
    fmn: {
      title: "Aplikacja ułatwiająca zakupy",
      content: `
  W tym dwuosobowym projekcie pracowałam nad połączeniem z bazą danych
  i logiką całej aplikacji. Koszyk używał Event Sourcingu, a wydarzenia
  były wysyłane do frontendu poprzez SSE.
`
    },
    pim: {
      title: 'System "Product Information Management"',
      content: `
  Realizując zadanie byłam odpowiedzialna za trzyosobowy zespół
  programujący backend do systemu PIM. Backend napisany był we frameworku
  FastAPI i komunikował się z bazą danych PostgreSQL i MongoDB oraz
  z serwisem S3. Całość była hostowana na AWS.
`
    },
    users: {
      title: "System zarządzania użytkownikami",
      content: `
  Moduł ten stanowił część większego systemu, w którym odpowiadał
  za autoryzacją oraz zarządzanie rolami i uprawnieniami pracowników.
  Do obsługi sesji wykorzystano bazę Redis, a dane użytkowników
  były przechowywane w bazie PostgreSQL
`
    },
    qpw: {
      title: "System przeliczania formuł",
      content: `
  Zaprojektowałam i wdrożyłam mechanizm przeliczania formuł wpisywanych
  przez użytkownika. Jego interpreter był wywoływany przez RPC
  z RabbitMQ. Obsługiwał działania na liczbach, listach i wartościach
  tekstowych.
`
    },
    deepdive: {
      title: "Agregator danych robotów Universal Robots",
      content: `
  Skonfigurowałam urządzenie brzegowe z systemem Linux służące
  do pozyskiwania informacji o pracy robota - m.in. pozycje i temperatury
  przegubów. Dane te były cyklicznie przesyłane do centralnego serwera
  agregującego je w bazie danych szeregów czasowych.
`
    }
  },
  frontend: {
    header: "Frontend",
    mosaic: {
      title: "Gra logiczna",
      content: `
  Za pomocą Tauri zaprogramowałam grę mobilną w środowisku Svelte.
  Gra zawierała kilka motywów, tłumaczenia, samouczek i animacje.
  `
    },
    pkp: {
      title: "Aplikacja biletów PKP",
      content: `
  Jeszcze przed powstaniem oficjalnej mobilnej aplikacji PKP zaprogramowałam
  autorskie rozwiązanie ułatwiające zarządzanie biletami kolejowymi.
  Moja aplikacja automatycznie przetwarzała nieporęczne bilety w formacie
  PDF, przechowywała harmonogram nadchodzących podróży i pozwalała
  wyświetlić kod QR do kontroli. Projekt zrealizowałam w Android Studio.
  `
    },
    deepdive: {
      title: "System prezentacji robotów Universal Robots",
      content: `
  Narzędzie to umożliwiało monitorowanie parametrów serwisowych robota
  w czasie rzeczywistym. Prezentowało na wykresach bierzące wartości
  takie jak kąty czy temperatury przegubów, a wbudowany interaktywny
  model 3D pozwalał na szybką diagnostykę stanu technicznego maszyny.
  `
    },
  },
  contact: {
    header: "Kontakt",
    content: `
Zapraszam do kontaktu:
`
  }
};
