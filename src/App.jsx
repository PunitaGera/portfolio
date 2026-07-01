import todoImg from "./assets/todo.png";
import ocmsImg from "./assets/ocms.png";
function App() {
   return (
  <>
  <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">

  <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

    <h1 className="text-2xl font-bold text-blue-600">
      Punita Gera
    </h1>

    <div className="flex gap-6">

      <a href="#home" className="hover:text-blue-600">
        Home
      </a>

      <a href="#about" className="hover:text-blue-600">
        About
      </a>

      <a href="#skills" className="hover:text-blue-600">
        Skills
      </a>

      <a href="#projects" className="hover:text-blue-600">
        Projects
      </a>

      <a href="#education" className="hover:text-blue-600">
        Education
      </a>

      <a href="#contact" className="hover:text-blue-600">
        Contact
      </a>

    </div>

  </div>

</nav>
   <section
  id="home"
  className="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center px-6"
>

      <h1 className="text-6xl md:text-7xl font-bold mb-4">
        Punita Gera
      </h1>

      <h2 className="text-3xl text-blue-600 font-semibold mb-6">
        Frontend Developer
      </h2>

      <p className="max-w-2xl text-lg text-gray-700 leading-8 mb-8">
  I am an aspiring Frontend Developer with a strong foundation in HTML,
  CSS, JavaScript, React, Tailwind CSS, Python, and Django. I enjoy
  building responsive, user-friendly web applications and continuously
  improving my skills by developing real-world projects.
</p>

      <div className="flex gap-4">

        <a
  href="#projects"
  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
>
  View Projects
</a>

        <a
  href="#contact"
  className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition"
>
  Contact Me
</a>
<a
  href="/resume.pdf"
  download
  className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
>
  Download Resume
</a>

      </div>

    </section>

<section id="about" className="py-20 px-6 bg-white">

  <div className="max-w-5xl mx-auto">

    <h2 className="text-4xl font-bold text-center mb-10">
      About Me
    </h2>

    <p className="text-lg text-gray-700 leading-9 text-center">
      Hello! I'm <span className="font-bold text-blue-600">Punita Gera</span>,
      a Computer Science graduate passionate about web development.
      I enjoy creating responsive, modern, and user-friendly websites using
      React, JavaScript, Tailwind CSS, HTML, CSS, SQL, and Django.

      <br /><br />

      I have built projects such as a To-Do App and an Online Complaint
      Management System. I love learning new technologies and continuously
      improving my frontend development skills.
    </p>

  </div>

</section>

<section id="skills" className="py-20 bg-gray-100 px-6">

  <div className="max-w-6xl mx-auto">

    <h2 className="text-4xl font-bold text-center mb-12">
      My Skills
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

      <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl hover:-translate-y-2 transition">
        💻
        <h3 className="font-bold mt-3">HTML5</h3>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl hover:-translate-y-2 transition">
        🎨
        <h3 className="font-bold mt-3">CSS3</h3>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl hover:-translate-y-2 transition">
        ⚡
        <h3 className="font-bold mt-3">JavaScript</h3>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl hover:-translate-y-2 transition">
        ⚛️
        <h3 className="font-bold mt-3">React</h3>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl hover:-translate-y-2 transition">
        🎯
        <h3 className="font-bold mt-3">Tailwind CSS</h3>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl hover:-translate-y-2 transition">
        🐍
        <h3 className="font-bold mt-3">Django</h3>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl hover:-translate-y-2 transition">
        🗄️
        <h3 className="font-bold mt-3">SQL</h3>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl hover:-translate-y-2 transition">
        🔧
        <h3 className="font-bold mt-3">Git & GitHub</h3>
      </div>

    </div>

  </div>

</section>

<section id="projects" className="py-20 px-6 bg-white">

  <div className="max-w-6xl mx-auto">

    <div className="text-center mb-12">

  <p className="text-blue-600 font-semibold uppercase tracking-widest">
    Portfolio
  </p>

  <h2 className="text-4xl font-bold mt-2">
    Featured Projects
  </h2>

  <p className="text-gray-500 mt-3">
    Some of the projects I have built while learning modern web development.
  </p>

</div>

    <div className="grid md:grid-cols-2 gap-8">

      {/* Project 1 */}

      <div className="bg-gray-100 rounded-xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition duration-300">

       <div className="flex justify-between items-center mb-4">

  <h3 className="text-2xl font-bold">
    📝 To-Do App
  </h3>

  <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full">
    Completed
  </span>
  </div>
      <p className="text-xs text-gray-500 mt-2">
      Version 1.0
    </p>


              <img
        src={todoImg}
        alt="To-Do App"
      className="w-full h-64 object-contain rounded-lg shadow-md mb-4 border bg-white"
      />

        <p className="text-gray-700 mb-4">
  
  A modern task management application built using React, JavaScript, and Tailwind CSS. It helps users organize daily tasks efficiently with a clean, responsive, and user-friendly interface.
</p>


<ul className="text-gray-600 text-sm space-y-2 mb-5">

  <li>✅ Add, edit and delete tasks</li>

  <li>✅ Search tasks instantly</li>

  <li>✅ Mark tasks as completed</li>

  <li>✅ Set due dates and priorities</li>

  <li>✅ Dark Mode support</li>

  <li>✅ Local Storage data persistence</li>

</ul>
        <div className="flex gap-3 mb-5 flex-wrap">

          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
            React
          </span>
         
          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
            JavaScript
          </span>

          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
            Tailwind CSS
          </span>

          <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
            Local Storage
          </span>
          
          

        </div>

        <div className="flex gap-4">

          <button
      onClick={() =>
        window.open(
          "https://punitagera.github.io/todo-app/",
          "_blank"
        )
      }
      className="flex-1 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition text-center"
    >
      Live Demo
    </button>

          <button
  onClick={() =>
    window.open(
      "https://github.com/PunitaGera/todo-app",
      "_blank"
    )
  }
  className="flex-1 border border-blue-600 text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition text-center"
>
  GitHub
</button>
        </div>

      </div>

      {/* Project 2 */}

      <div className="bg-gray-100 rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">

        <div className="flex justify-between items-center mb-4">

  <h3 className="text-2xl font-bold">
    🛡️ Online Complaint Management System
  </h3>

  <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full">
    Completed
  </span>

</div>

        <img
      src={ocmsImg}
      alt="Online Complaint Management System"
      className="w-full h-56 object-cover rounded-lg shadow-md mb-4 border"
    />

        <p className="text-gray-700 mb-5">
          A full-stack complaint management system developed using Python, Django, SQLite, HTML, CSS, and JavaScript. The application enables users to register and track complaints while allowing administrators to manage complaint statuses through a secure dashboard. It also supports user authentication, complaint tracking, and Excel/PDF report generation.

        </p>

        <div className="flex gap-3 mb-5 flex-wrap">

          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
            Django
          </span>

          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
            Python
          </span>

          <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
            SQLite
          </span>

        </div>

        

  <div className="flex gap-4">

  <button
    onClick={() =>
      window.open(
        "https://punita.pythonanywhere.com",
        "_blank"
      )
    }
    className="flex-1 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
  >
    Live Demo
  </button>

  <button
    onClick={() =>
      window.open(
        "https://github.com/PunitaGera/online-complaint-management-system",
        "_blank"
      )
    }
    className="flex-1 border border-blue-600 text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition"
  >
    GitHub
  </button>

</div>

</div>

        </div>

      </div>

    </div>

  </div>

</section>

<section id="education" className="py-20 bg-gray-100 px-6">

  <div className="max-w-5xl mx-auto">

    <h2 className="text-4xl font-bold text-center mb-12">
      Education
    </h2>

    <div className="bg-white rounded-xl shadow-lg p-8">

      <h3 className="text-2xl font-bold">
        Bachelor of Technology (B.Tech)
      </h3>

      <p className="text-gray-600 mt-2">
        Computer Science & Engineering
      </p>

      <p className="text-gray-600 mt-2">
        Guru Jambheshwar University of Science and Technology (GJUS&T)
      </p>

      <p className="mt-4">
        Graduation Year:
        <span className="font-semibold"> 2026</span>
      </p>

    </div>

  </div>

</section>

<section id="contact" className="py-20 px-6 bg-white">

  <div className="max-w-4xl mx-auto text-center">

    <h2 className="text-4xl font-bold mb-10">
      Contact Me
    </h2>

    <p className="text-gray-600 text-lg mb-10">
      Feel free to connect with me for opportunities,
      collaborations, or just to say hello!
    </p>

    <div className="space-y-6">

      <a
        href="mailto:punitag2004@gmail.com"
        className="block text-xl text-blue-600 hover:underline"
      >
        📧 punitag2004@gmail.com
      </a>

      <a
        href="https://github.com/PunitaGera"
        target="_blank"
        rel="noreferrer"
        className="block text-xl text-blue-600 hover:underline"
      >
        💻 GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/punita-gera-983112286"
        target="_blank"
        rel="noreferrer"
        className="block text-xl text-blue-600 hover:underline"
      >
        💼 LinkedIn
      </a>

    </div>

  </div>

</section>

<footer className="bg-gray-900 text-white text-center py-8">
  <p className="font-semibold">
    © 2026 Punita Gera. All rights reserved.
  </p>

  <p className="text-gray-400 mt-2">
    Frontend Developer | React Developer
  </p>

  <p className="text-gray-400 mt-2">
    Built with React & Tailwind CSS
  </p>
</footer>
</>

);
}


export default App;

