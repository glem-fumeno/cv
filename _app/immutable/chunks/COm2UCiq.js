import{A as e,M as t,j as n,y as r}from"./Bl52HCp1.js";var i={bio:{header:`Bio`,content:`
  An experienced, passionate developer with over four years of work experience
  and many projects to back it up. I specialize in frameworks such as Flask
  or FastAPI. The software architecture I design is stable and scalable. I
  value clean and maintainable code as well as the principles of TDD. In
  my free time I design dedicated 3D prints, circuit bords, and software to
  help in my day to day life.
`},robotics:{header:`Robotics`,skills:{title:`Euro Skills`,content:`
  I represented Poland at the international EuroSkills competition in the
  "Mechatronics" category. As part of a two-person team, I was responsible for
  programming a series of PLCs so that an MPS station would perform a
  specified sequence.
`},rubiks:{title:`Rubik's cube robot`,content:`
  I programmed the movement, data analysis, and communication for a Rubik's
  Cube solving robot. The robot was able to be controlled using an interface
  written in PyQT. The robot used cameras and OpenCV to read the colors from
  the cube, and then controlled stepper motors via a serial port using
  an Arduino board.
`},mobil:{title:`Six-axis arm mobile robot`,content:`
  The robot was equipped with two six-axis arms and incorporated modules of
  inverse kinematics, movement of the robot, and detection of objects.
  I was responsible for implementing box and ball detection, accurate
  movement via stepper motors and lifting of objects with the arms.
`},engine:{title:`Rocket engine`,content:`
  In this project, my team and I studied the thrust of a rocket engine on a
  strain gauge beam. The engine was controlled remotely using a GUI written in
  PyQT, which also displayed the engine's thrust on a graph. The main
  application communicated with an ESP8266 board via a socket connection.
`}},backend:{header:`Backend`,fmn:{title:`Shopping Application`,content:`
  In this two person project, I worked on the database connection and the
  logic of the backend portion of the application. The shopping cart used
  Event Sourcing and updates were sent to the frontend via SSE.
`},pim:{title:`Product information management tool`,content:`
  I was responsible for a team of three whose task was to develop the backend
  for the PIM system. The backend was written in FastAPI and fetched data from
  PostgreSQL and MongoDB databases, and files from an S3 bucket. The system
  was hosted on AWS.
`},users:{title:`User management system`,content:`
  This module was part of a larger system where it managed authorization and
  enabled the management of permissions and roles of employees. Sessions were
  stored in a Redis database, and user data was stored in PostgreSQL.
`},qpw:{title:`Calculation engine`,content:`
  I designed and implemented a mechanism for evaluating formulas entered by
  users. The engine's interpreter could be invoked via RPC from RabbitMQ.
  It handled operations on numbers, lists, and text values.
`},deepdive:{title:`Universal Robots data aggregator`,content:`
  I setup a Linux-based edge device that collected information about
  the robot's operation, such as joint positions or currents. The collected
  data was sent periodically to a central server that aggregated the data in
  a time-series database.
`}},frontend:{header:`Frontend`,mosaic:{title:`Puzzle game`,content:`
  Using Tauri, I created a mobile game in the Svelte framework. The game
  included several themes, translations, a tutorial, and animations.
`},deepdive:{title:`Universal Robots monitoring tool`,content:`
  The tool made it possible to inspect servicing data while the robot was
  operating. It displayed aggregated data such as angles or currents on graphs.
  It included an interactive 3D model for easy analysis of the robot's state.
`},pkp:{title:`PKP ticket app`,content:`
  Before the official PKP mobile app was released, I created my own that
  could read PDF tickets, save upcoming trips, and display a QR code for
  inspection. The app was developed in Android Studio.
`}},contact:{header:`Contact`,content:`
You can contact me via the following:
`}},a={bio:{header:`O mnie`,content:`
  Doświadczona, pełna pasji programistka z ponad czteroletnim doświadczeniem
  zawodowym i wieloma zrealizowanymi projektami. Specjalizuję się we
  frameworkach takich jak Flask czy FastAPI. Projektowana przeze mnie
  architektura oprogramowania jest stabilna i skalowalna. Cenię sobie
  przejrzysty i łatwy w utrzymaniu kod, a także zasady TDD. W wolnym czasie
  projektuję wydruki 3D, płytki drukowane i programy, które ułatwiają mi
  codzienne życie.
`},robotics:{header:`Robotyka`,skills:{title:`Euro Skills`,content:`
  Reprezentowałam Polskę na międzynarodowych zawodach
  EuroSkills w dziedzinie "Mechatronika". W dwu osobowej
  drużynie odpowiedzialna byłam za zaprogramowanie serii
  sterowników PLC, tak żeby stacja MPS wykonywała poleconą
  sekwencję.
`},rubiks:{title:`Robot układający kostkę rubika`,content:`
  Zaprogramowałam ruch, analizę danych i komunikację dla robota układającego
  kostkę Rubika. Robotem można było sterować za pomocą interfejsu napisanego
  w PyQT. Robot wykorzystywał kamery i bibliotekę OpenCV do odczytywania
  kolorów z kostki, a następnie poruszał silnikami krokowymi przez port
  szeregowy za pomocą płytki Arduino.
`},mobil:{title:`Mobilny robot z sześcio osiowymi ramionami`,content:`
  Robot wyposażony był w dwa ramiona sześcio osiowe którym zaprogramowałam
  kinematykę odwrotną, sposób poruszania się robota oraz moduł wizji
  wykrywający pudełka i piłki. Odpowiedzialna byłam za zaprogramowanie
  wykrywania obiektów, przemieszczania się o odpowiedni dystans przy użyciu
  silników krokowych oraz podnoszenia obiektów ramionami.
`},engine:{title:`Sterowanie i reprezentacja zachowania silnika rakietowego`,content:`
  W tym projekcie z zespołem badaliśmy nacisk silnika rakietowego na
  belkę tensometryczną. Silnik sterowany był zdalnie za pomocą interfejsu
  użytkownika napisanym w PyQT, który wyświetlał również reprezentację
  nacisku na grafie. Aplikacja główna komunikowała się z ESP8266 poprzez
  połączenie typu socket.
`}},backend:{header:`Backend`,fmn:{title:`Aplikacja ułatwiająca zakupy`,content:`
  W tym dwuosobowym projekcie pracowałam nad połączeniem z bazą danych
  i logiką całej aplikacji. Koszyk używał Event Sourcingu, a wydarzenia
  były wysyłane do frontendu poprzez SSE.
`},pim:{title:`System "Product Information Management"`,content:`
  Odpowiedzialna byłam za zespół trzyosobowy, którego zadaniem
  było zaprogramowanie backendu do systemu PIM. Backend napisany był we
  frameworku FastAPI i komunikował się z bazą danych PostgreSQL i
  MongoDB oraz z serwisem S3. Całość była hostowana na AWS.
`},users:{title:`System zarządzania użytkownikami`,content:`
  Moduł ten był częścią większego systemu, w obrębie którego
  zarządzał autoryzacją i umożliwiał zarządzanie permisjami i rolami
  pracowników. Sesje były przechowywane w bazie danych Redis, a dane
  użytkowników w bazie danych PostgreSQL.
`},qpw:{title:`System przeliczania formuł`,content:`
  Zaprojektowałam i wdrożyłam mechanizm przeliczania formuł wpisanych
  przez użytkownika. Jego interpreter wywoływany był przez RPC
  z RabbitMQ. Obsługiwał działania na liczbach, listach i wartościach
  tekstowych.
`},deepdive:{title:`Agregator danych robotów Universal Robots`,content:`
  Skonfigurowałam urządzenie brzegowe z systemem Linux, które pozyskiwało
  informacje o pracy robota takie jak pozycje przegubów czy ich temperatury.
  Pozyskane dane wysyłane były cyklicznie do centralnego serwera agregującego
  dane w bazie danych szeregów czasowych.
`}},frontend:{header:`Frontend`,mosaic:{title:`Gra logiczna`,content:`
  Za pomocą Tauri stworzyłam grę mobilną w środowisku Svelte.
  Gra zawierała kilka motywów, tłumaczenia, samouczek i animacje.
  `},deepdive:{title:`System prezentacji robotów Universal Robots`,content:`
  Narzędzie to umożliwiało wyświetlenie danych serwisowych robota w trakcie
  jego pracy. Prezentowało dane takie jak kąty lub temperatury przegubów na
  wykresach. Zawierało również interaktywny model 3D służący do łatwej analizy
  stanu robota
  `},pkp:{title:`Aplikacja biletów PKP`,content:`
  Przed powstaniem oficjalnej mobilnej aplikacji PKP stworzyłam swoją -
  taką, która mogła odczytać bilety PDF, przechować nadchodzące podróże
  i wyświetlić kod QR do kontroli. Aplikacja była napisana w Android Studio.
  `}},contact:{header:`Kontakt`,content:`
Można się ze mną skontaktować poprzez:
`}},o=t(e(i));switch(localStorage.getItem(`language`)??`English`){case`English`:n(o,i,!0),localStorage.setItem(`language`,`English`);break;case`Polski`:n(o,a,!0),localStorage.setItem(`language`,`Polski`)}function s(e){switch(e){case`English`:n(o,i,!0),localStorage.setItem(`language`,`English`);break;case`Polski`:n(o,a,!0),localStorage.setItem(`language`,`Polski`)}}function c(e){let t=r(o);return e.split(`.`).forEach(e=>{t=t?.[e]}),typeof t==`string`?t:e}export{c as n,s as t};