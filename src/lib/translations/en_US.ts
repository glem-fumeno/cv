export default {
  bio: {
    header: "About me",
    p1: `
  I am a passionate software developer with over four years of professional
  experience and numerous completed projects. The software architecture
  I design is stable and scalable. I value clear and maintainable code,
  as well as the principles of TDD.
`,
    p2: `
  My interest in programming started in childhood with Processing and
  p5.js. At Mechatronics Technical High School No. 1 in Warsaw, I got into
  robotics by programming Arduino and Raspberry Pi boards. After graduating
  from technical high school, I was hired by Elmark Automatyka S.A., where
  I gained experience in backend and frontend web development.
`,
    p3: `
  In my free time, I design 3D prints, electronic circuits, and programs
  that make my daily life easier. I plan to pursue a degree in mechatronics
  to deepen this hybrid software/hardware interest.
`
  },
  robotics: {
    header: "Robotics",
    skills: {
      title: "Euro Skills",
      content: `
  I represented Poland at the international EuroSkills competition in the
  "Mechatronics" category. As part of a two-person team, I was responsible for
  programming a series of PLCs so that an MPS station would perform a
  specified sequence.
`
    },
    rubiks: {
      title: "Rubik's cube robot",
      content: `
  I programmed the movement, data analysis, and communication for a Rubik's
  Cube solving robot. The robot was able to be controlled using an interface
  written in PyQT. The robot used cameras and OpenCV to read the colors from
  the cube, and then controlled stepper motors via a serial port using
  an Arduino board.
`
    },
    mobil: {
      title: "Six-axis arm mobile robot",
      content: `
  The robot was equipped with two six-axis arms and incorporated modules of
  inverse kinematics, movement of the robot, and detection of objects.
  I was responsible for implementing box and ball detection, accurate
  movement via stepper motors and lifting of objects with the arms.
`
    },
    engine: {
      title: "Rocket engine",
      content: `
  In this project, my team and I studied the thrust of a rocket engine on a
  strain gauge beam. The engine was controlled remotely using a GUI written in
  PyQT, which also displayed the engine's thrust on a graph. The main
  application communicated with an ESP8266 board via a socket connection.
`
    }
  },
  backend: {
    header: "Backend",
    fmn: {
      title: "Shopping Application",
      content: `
  In this two person project, I worked on the database connection and the
  logic of the backend portion of the application. The shopping cart used
  Event Sourcing and updates were sent to the frontend via SSE.
`
    },
    pim: {
      title: "Product information management tool",
      content: `
  I was responsible for a team of three whose task was to develop the backend
  for the PIM system. The backend was written in FastAPI and fetched data from
  PostgreSQL and MongoDB databases, and files from an S3 bucket. The system
  was hosted on AWS.
`
    },
    users: {
      title: "User management system",
      content: `
  This module was part of a larger system where it managed authorization and
  enabled the management of permissions and roles of employees. Sessions were
  stored in a Redis database, and user data was stored in PostgreSQL.
`
    },
    qpw: {
      title: "Calculation engine",
      content: `
  I designed and implemented a mechanism for evaluating formulas entered by
  users. The engine's interpreter could be invoked via RPC from RabbitMQ.
  It handled operations on numbers, lists, and text values.
`
    },
    deepdive: {
      title: "Universal Robots data aggregator",
      content: `
  I setup a Linux-based edge device that collected information about
  the robot's operation, such as joint positions or currents. The collected
  data was sent periodically to a central server that aggregated the data in
  a time-series database.
`
    }
  },
  frontend: {
    header: "Frontend",
    mosaic: {
      title: "Puzzle game",
      content: `
  Using Tauri, I created a mobile game in the Svelte framework. The game
  included several themes, translations, a tutorial, and animations.
`
    },
    deepdive: {
      title: "Universal Robots monitoring tool",
      content: `
  The tool made it possible to inspect servicing data while the robot was
  operating. It displayed aggregated data such as angles or currents on graphs.
  It included an interactive 3D model for easy analysis of the robot's state.
`
    },
    pkp: {
      title: "Polish State Railways ticket app",
      content: `
  Before the official Polish State Railways mobile app was released, I
  created my own that could read bulky PDF tickets, save upcoming trips,
  and display a QR code for inspection. The app was developed in Android Studio.
`
    }
  },
  contact: {
    header: "Contact",
    content: `
Feel free to contact me:
`
  }
};
