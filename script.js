// ---------------------------
// 100-question bank (HTML/CSS/JS/General CS)
// HTML tags in questions/options are escaped (e.g. < becomes &lt; ) so they display correctly.
// JSON-specific questions removed; all questions are about HTML/CSS/JS/CS topics.
// ---------------------------
const questionBank = [
  { question: "Which language runs in a web browser?", options: ["Java", "C", "Python", "JavaScript"], answer: "JavaScript" },
  { question: "What does HTML stand for?", options: ["Hypertext Markup Language", "Home Tool Markup Language", "Hyperlinks Text Mark Language", "Hyper Tool Multi Language"], answer: "Hypertext Markup Language" },
  { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"], answer: "Cascading Style Sheets" },
  { question: "Which tag creates a hyperlink?", options: ["&lt;a&gt;", "&lt;link&gt;", "&lt;href&gt;", "&lt;url&gt;"], answer: "&lt;a&gt;" },
  { question: "What is the correct HTML element for inserting a line break?", options: ["&lt;br&gt;", "&lt;break&gt;", "&lt;lb&gt;", "&lt;newline&gt;"], answer: "&lt;br&gt;" },
  { question: "Which attribute specifies an image source in HTML?", options: ["src", "href", "alt", "title"], answer: "src" },
  { question: "Which tag is used to define an unordered list?", options: ["&lt;ul&gt;", "&lt;ol&gt;", "&lt;li&gt;", "&lt;list&gt;"], answer: "&lt;ul&gt;" },
  { question: "Which element defines the largest heading?", options: ["&lt;h1&gt;", "&lt;h6&gt;", "&lt;head&gt;", "&lt;header&gt;"], answer: "&lt;h1&gt;" },
  { question: "Which tag is used to display an image?", options: ["&lt;img&gt;", "&lt;image&gt;", "&lt;picture&gt;", "&lt;src&gt;"], answer: "&lt;img&gt;" },
  { question: "Which attribute provides alternative text for an image?", options: ["alt", "title", "desc", "caption"], answer: "alt" },

  { question: "Which CSS property controls the text size?", options: ["font-size", "text-size", "font-style", "size"], answer: "font-size" },
  { question: "How do you change the background color in CSS?", options: ["background-color", "bgcolor", "color", "background-style"], answer: "background-color" },
  { question: "Which CSS property makes text bold?", options: ["font-weight", "text-weight", "font-style", "font-bold"], answer: "font-weight" },
  { question: "Which property sets the space inside an element?", options: ["padding", "margin", "spacing", "gap"], answer: "padding" },
  { question: "Which property sets the space outside an element?", options: ["margin", "padding", "border", "gap"], answer: "margin" },
  { question: "Which property rounds the corners of an element?", options: ["border-radius", "corner-radius", "round-corner", "radius"], answer: "border-radius" },
  { question: "Which container displays children in a row by default?", options: ["flex", "grid", "block", "inline"], answer: "flex" },
  { question: "Which display value hides the element and removes it from flow?", options: ["display: none", "visibility: hidden", "opacity: 0", "display: hidden"], answer: "display: none" },
  { question: "What CSS unit is relative to the root font-size?", options: ["rem", "em", "px", "pt"], answer: "rem" },
  { question: "Which property controls stacking order?", options: ["z-index", "order", "stack", "layer"], answer: "z-index" },

  { question: "Which company developed JavaScript?", options: ["Netscape", "Microsoft", "Google", "Oracle"], answer: "Netscape" },
  { question: "Which symbol starts a single-line comment in JS?", options: ["//", "/*", "&lt;!--", "#"], answer: "//" },
  { question: "How do you declare a variable that can be reassigned (ES6)?", options: ["let", "const", "var", "static"], answer: "let" },
  { question: "How do you declare a constant in JavaScript?", options: ["const", "let", "var", "constant"], answer: "const" },
  { question: "Which method logs output to the browser console?", options: ["console.log()", "print()", "echo()", "log()"], answer: "console.log()" },
  { question: "What does DOM stand for?", options: ["Document Object Model", "Display Object Model", "Data Object Model", "Document Output Model"], answer: "Document Object Model" },
  { question: "Which operator checks strict equality (value + type)?", options: ["===", "==", "=", "!="], answer: "===" },
  { question: "Which method removes the last element of an array?", options: ["pop()", "push()", "shift()", "unshift()"], answer: "pop()" },
  { question: "Which loop executes at least once?", options: ["do...while", "while", "for", "forEach"], answer: "do...while" },
  { question: "Which keyword stops a loop entirely?", options: ["break", "continue", "stop", "return"], answer: "break" },

  { question: "Which keyword skips to next iteration of a loop?", options: ["continue", "break", "skip", "next"], answer: "continue" },
  { question: "Which method adds one or more elements to the end of an array?", options: ["push()", "pop()", "shift()", "unshift()"], answer: "push()" },
  { question: "Which method removes the first element of an array?", options: ["shift()", "pop()", "unshift()", "slice()"], answer: "shift()" },
  { question: "Which built-in object provides dates and times?", options: ["Date", "Time", "Clock", "Calendar"], answer: "Date" },
  { question: "Which operator is used for logical AND in JS?", options: ["&&", "||", "&", "and"], answer: "&&" },
  { question: "Which operator is used for logical OR in JS?", options: ["||", "&&", "or", "|"], answer: "||" },
  { question: "What does NaN stand for?", options: ["Not a Number", "Null and None", "Number is Absent", "Not an Array"], answer: "Not a Number" },
  { question: "Which function converts a string to an integer?", options: ["parseInt()", "parseFloat()", "Number()", "toInt()"], answer: "parseInt()" },
  { question: "Which data type represents true/false?", options: ["Boolean", "Number", "String", "Object"], answer: "Boolean" },
  { question: "Which statement adds behavior when error occurs?", options: ["try...catch", "if...else", "switch", "throw"], answer: "try...catch" },

  { question: "Which method selects the first element that matches a CSS selector?", options: ["document.querySelector()", "document.getElementById()", "document.getElementsByClassName()", "document.querySelectorAll()"], answer: "document.querySelector()" },
  { question: "Which method selects an element by its id?", options: ["document.getElementById()", "document.querySelector()", "document.findById()", "document.get()"], answer: "document.getElementById()" },
  { question: "Which event fires when the DOM has fully loaded?", options: ["DOMContentLoaded", "load", "ready", "onload"], answer: "DOMContentLoaded" },
  { question: "Which function schedules repeated execution every X ms?", options: ["setInterval()", "setTimeout()", "requestAnimationFrame()", "repeat()"], answer: "setInterval()" },
  { question: "Which function schedules one-time execution after X ms?", options: ["setTimeout()", "setInterval()", "delay()", "sleep()"], answer: "setTimeout()" },
  { question: "Which method removes whitespace from both ends of a string?", options: ["trim()", "strip()", "slice()", "substr()"], answer: "trim()" },
  { question: "Which method joins array elements into a string?", options: ["join()", "concat()", "toString()", "merge()"], answer: "join()" },
  { question: "Which method sorts the elements of an array?", options: ["sort()", "order()", "arrange()", "sequence()"], answer: "sort()" },
  { question: "What is Big O notation for linear search?", options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"], answer: "O(n)" },
  { question: "Which data structure uses FIFO order?", options: ["Queue", "Stack", "Tree", "Graph"], answer: "Queue" },

  { question: "Which data structure uses LIFO order?", options: ["Stack", "Queue", "List", "Set"], answer: "Stack" },
  { question: "Which is not a primitive type in JavaScript?", options: ["Object", "String", "Number", "Boolean"], answer: "Object" },
  { question: "Which algorithm divides and conquers by splitting problem into halves?", options: ["Binary Search", "Linear Search", "Bubble Sort", "Selection Sort"], answer: "Binary Search" },
  { question: "Which sort is stable by default?", options: ["Merge Sort", "Selection Sort", "Heap Sort", "Quick Sort (typical)"], answer: "Merge Sort" },
  { question: "Which structure best represents parent-child relationships?", options: ["Tree", "Graph", "Array", "Stack"], answer: "Tree" },
  { question: "Which structure can represent connections between nodes with cycles?", options: ["Graph", "Tree", "List", "Queue"], answer: "Graph" },
  { question: "Which CS term describes translating high-level code to machine code?", options: ["Compilation", "Interpretation", "Linking", "Assembly"], answer: "Compilation" },
  { question: "Which memory is faster but volatile?", options: ["RAM", "Hard Drive", "SSD", "ROM"], answer: "RAM" },
  { question: "Which HTTP method retrieves data without causing side-effects?", options: ["GET", "POST", "PUT", "DELETE"], answer: "GET" },
  { question: "Which HTTP method is typically used to create resources?", options: ["POST", "GET", "HEAD", "OPTIONS"], answer: "POST" },

  { question: "Which status code means success?", options: ["200", "404", "500", "301"], answer: "200" },
  { question: "Which status code means resource not found?", options: ["404", "200", "500", "403"], answer: "404" },
  { question: "Which header tells server the content type of request body?", options: ["Content-Type", "Accept", "User-Agent", "Host"], answer: "Content-Type" },
  { question: "Which protocol is secure version of HTTP?", options: ["HTTPS", "FTP", "SSH", "SFTP"], answer: "HTTPS" },
  { question: "Which is NOT a relational database?", options: ["MongoDB", "MySQL", "PostgreSQL", "SQLite"], answer: "MongoDB" },
  { question: "Which SQL command retrieves rows from a table?", options: ["SELECT", "INSERT", "UPDATE", "DELETE"], answer: "SELECT" },
  { question: "Which SQL clause filters rows after grouping?", options: ["HAVING", "WHERE", "ORDER BY", "GROUP BY"], answer: "HAVING" },
  { question: "Which index type ensures uniqueness?", options: ["Unique index", "Non-unique index", "Clustered index", "Bitmap index"], answer: "Unique index" },
  { question: "Which OS component allocates CPU time slices to processes?", options: ["Scheduler", "Loader", "Assembler", "Linker"], answer: "Scheduler" },
  { question: "What is virtualization of hardware often called?", options: ["Virtualization", "Containerization", "Compilation", "Emulation"], answer: "Virtualization" },

  { question: "Which network layer handles routing between networks?", options: ["Network Layer (Layer 3)", "Transport Layer (Layer 4)", "Data Link Layer (Layer 2)", "Application Layer (Layer 7)"], answer: "Network Layer (Layer 3)" },
  { question: "Which IP version uses 128-bit addresses?", options: ["IPv6", "IPv4", "IPX", "ARP"], answer: "IPv6" },
  { question: "Which is an advantage of using a CDN?", options: ["Faster content delivery", "Slower load times", "Increased server load", "Higher latency"], answer: "Faster content delivery" },
  { question: "Which concept restricts access based on roles?", options: ["RBAC (Role-Based Access Control)", "VPN", "TLS", "DNS"], answer: "RBAC (Role-Based Access Control)" },
  { question: "Which of the following is a version control system?", options: ["Git", "Jenkins", "Docker", "Kubernetes"], answer: "Git" },
  { question: "Which command initializes a new git repository?", options: ["git init", "git start", "git create", "git new"], answer: "git init" },
  { question: "Which git command stages files for commit?", options: ["git add", "git commit", "git push", "git stage"], answer: "git add" },
  { question: "Which git command uploads commits to remote?", options: ["git push", "git pull", "git fetch", "git clone"], answer: "git push" },
  { question: "Which HTML tag encloses CSS placed inside the document head?", options: ["&lt;style&gt;", "&lt;link&gt;", "&lt;css&gt;", "&lt;script&gt;"], answer: "&lt;style&gt;" },
  { question: "Which attribute on &lt;a&gt; sets the destination URL?", options: ["href", "src", "link", "target"], answer: "href" },

  { question: "Which attribute on &lt;a&gt; opens link in new tab?", options: ["target=&quot;_blank&quot;", "rel=&quot;external&quot;", "open=&quot;new&quot;", "href=&quot;_new&quot;"], answer: "target=&quot;_blank&quot;" },
  { question: "Which accessibility attribute provides a label for screen readers?", options: ["aria-label", "title", "alt", "role"], answer: "aria-label" },
  { question: "Which meta tag sets the viewport for responsive design?", options: ["&lt;meta name=&quot;viewport&quot;&gt;", "&lt;meta name=&quot;responsive&quot;&gt;", "&lt;meta name=&quot;mobile&quot;&gt;", "&lt;meta name=&quot;scale&quot;&gt;"], answer: "&lt;meta name=&quot;viewport&quot;&gt;" },
  { question: "Which CSS selector targets elements by class?", options: [".className", "#idName", "element", "*"], answer: ".className" },
  { question: "Which CSS selector targets elements by id?", options: ["#idName", ".className", "element", "*"], answer: "#idName" },
  { question: "Which property changes the mouse pointer when hovering?", options: ["cursor", "pointer", "mouse", "hover-style"], answer: "cursor" },
  { question: "Which pseudo-class applies on hover?", options: [":hover", ":active", ":focus", ":visited"], answer: ":hover" },
  { question: "Which pseudo-class applies when an element has focus?", options: [":focus", ":hover", ":active", ":visited"], answer: ":focus" },
  { question: "What is responsive design primarily concerned with?", options: ["Layout across screen sizes", "Database schema", "Server-side rendering", "Network security"], answer: "Layout across screen sizes" },
  { question: "Which technique loads images as needed when scrolling?", options: ["Lazy loading", "Preloading", "Eager loading", "Batch loading"], answer: "Lazy loading" },

  { question: "Which tag is used for client-side scripts?", options: ["&lt;script&gt;", "&lt;style&gt;", "&lt;link&gt;", "&lt;js&gt;"], answer: "&lt;script&gt;" },
  { question: "Which header increases security by preventing clickjacking (example)?", options: ["X-Frame-Options", "Content-Security-Policy", "X-Content-Type-Options", "Strict-Transport-Security"], answer: "X-Frame-Options" },
  { question: "Which header prevents MIME-type sniffing?", options: ["X-Content-Type-Options", "Content-Security-Policy", "Strict-Transport-Security", "Referrer-Policy"], answer: "X-Content-Type-Options" },
  { question: "Which algorithmic technique uses recursion and divide-and-conquer?", options: ["Merge Sort", "Linear Search", "Bubble Sort", "Selection Sort"], answer: "Merge Sort" },
  { question: "Which algorithm finds the shortest path in a weighted graph (non-negative)?", options: ["Dijkstra", "DFS", "BFS", "Prim"], answer: "Dijkstra" },
  { question: "Which tree traversal visits left, node, then right?", options: ["Inorder", "Preorder", "Postorder", "Level-order"], answer: "Inorder" },
  { question: "Which traversal visits node before children?", options: ["Preorder", "Inorder", "Postorder", "Level-order"], answer: "Preorder" },
  { question: "Which protocol is used to resolve domain names to IP addresses?", options: ["DNS", "DHCP", "HTTP", "FTP"], answer: "DNS" },
  { question: "Which TCP/IP protocol ensures reliable, ordered delivery?", options: ["TCP", "UDP", "IP", "ICMP"], answer: "TCP" },
  { question: "Which type of testing checks small parts of the application in isolation?", options: ["Unit testing", "Integration testing", "System testing", "Acceptance testing"], answer: "Unit testing" }
];

// ---------------------------
// Configuration
// ---------------------------
const QUESTIONS_PER_QUIZ = 10;
const QUIZ_DURATION_SECONDS = 10 * 60; // 10 minutes

// ---------------------------
// Utility: pick random subset
// ---------------------------
function pickRandomQuestions(pool, count) {
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

// ---------------------------
// DOM refs
// ---------------------------
const quizForm = document.getElementById("quizForm");
const submitBtn = document.getElementById("submitBtn");
const resultDiv = document.getElementById("result");
const playAgainBtn = document.getElementById("playAgainBtn");
const timeEl = document.getElementById("time");
const shownCountEl = document.getElementById("shownCount");

// Choose questions for this session
let sessionQuestions = pickRandomQuestions(questionBank, QUESTIONS_PER_QUIZ);
shownCountEl.textContent = String(sessionQuestions.length);

// Render the form with 10 questions
function renderQuiz() {
  quizForm.innerHTML = "";
  sessionQuestions.forEach((q, idx) => {
    const qDiv = document.createElement("div");
    qDiv.className = "question";
    const qHtml = `<p class="qtext">Q${idx + 1}. ${q.question}</p>`;
    const optsHtml = q.options.map((opt) => {
      const safeName = `q${idx}`;
      const valueEscaped = opt.replace(/"/g, '&quot;');
      return `<label><input type="radio" name="${safeName}" value="${valueEscaped}"> ${opt}</label>`;
    }).join("");
    qDiv.innerHTML = qHtml + `<div class="options">${optsHtml}</div>`;
    quizForm.appendChild(qDiv);
  });
}
renderQuiz();

// ---------------------------
// Submission & result display
// ---------------------------
function disableAllInputs() {
  const inputs = quizForm.querySelectorAll("input[type=radio]");
  inputs.forEach(inp => {
    inp.disabled = true;
    const lab = inp.closest("label");
    if (lab) lab.classList.add("disabled");
  });
}

function showResults() {
  // stop timer immediately
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }

  disableAllInputs();
  // hide the quiz form and actions, then show result (replaces quiz)
  quizForm.style.display = "none";
  document.querySelector('.actions').style.display = "none";

  let score = 0;
  resultDiv.innerHTML = ""; // clear previous

  sessionQuestions.forEach((q, idx) => {
    const selected = quizForm.querySelector(`input[name="q${idx}"]:checked`);
    const userAnswer = selected ? selected.value : null;
    const correctAnswer = q.answer;

    // result item container
    const resItem = document.createElement("div");
    resItem.className = "result-item";

    // question
    const qP = document.createElement("p");
    qP.innerHTML = `<strong>Q${idx + 1}. ${q.question}</strong>`;
    resItem.appendChild(qP);

    // user's answer line
    const userLine = document.createElement("p");
    if (!userAnswer) {
      userLine.innerHTML = `Your answer: <span class="not-answered">Not answered</span>`;
      resItem.appendChild(userLine);
      // show correct
      const corr = document.createElement("p");
      corr.innerHTML = `Correct answer: <span class="correct-answer">${correctAnswer}</span>`;
      resItem.appendChild(corr);
      resItem.classList.add("incorrect");
    } else {
      const userDisplay = userAnswer;
      const isCorrect = (userDisplay === correctAnswer);
      if (isCorrect) {
        score++;
        userLine.innerHTML = `Your answer: <span class="user-answer">${userDisplay}</span> <span class="show-correct-badge">Correct</span>`;
        resItem.classList.add("correct");
        resItem.appendChild(userLine);
      } else {
        userLine.innerHTML = `Your answer: <span class="user-answer">${userDisplay}</span> <span style="color:#c0392b;font-weight:700">Incorrect</span>`;
        resItem.classList.add("incorrect");
        resItem.appendChild(userLine);
        const corr = document.createElement("p");
        corr.innerHTML = `Correct answer: <span class="correct-answer">${correctAnswer}</span>`;
        resItem.appendChild(corr);
      }
    }

    resultDiv.appendChild(resItem);
  });

  // summary at top
  const summary = document.createElement("div");
  summary.className = "result-summary";
  summary.innerHTML = `<h3>Your Score: ${score} / ${sessionQuestions.length}</h3>
    <p class="small">Good job — review the answers above to see which ones were incorrect.</p>`;
  resultDiv.prepend(summary);

  // scroll to results
  setTimeout(() => {
    resultDiv.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 150);
}

// submit handler
submitBtn.addEventListener("click", () => {
  submitBtn.disabled = true;
  showResults();
});

// play again
playAgainBtn.addEventListener("click", () => {
  sessionQuestions = pickRandomQuestions(questionBank, QUESTIONS_PER_QUIZ);
  shownCountEl.textContent = String(sessionQuestions.length);
  resultDiv.innerHTML = "";
  submitBtn.disabled = false;
  submitBtn.classList.remove("hidden");
  playAgainBtn.classList.add("hidden");
  // re-render and show form
  renderQuiz();
  quizForm.style.display = "";
  document.querySelector('.actions').style.display = "";
  // restart timer
  startTimer(QUIZ_DURATION_SECONDS);
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ---------------------------
// Timer (auto-submit on 0)
// ---------------------------
let timerInterval = null;
function startTimer(durationSeconds) {
  if (timerInterval) clearInterval(timerInterval);
  let timeLeft = durationSeconds;
  function update() {
    const m = Math.floor(timeLeft / 60);
    const s = timeLeft % 60;
    timeEl.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      
      submitBtn.disabled = true;
      showResults();
    }
    timeLeft--;
  }
  update();
  timerInterval = setInterval(update, 1000);
}

startTimer(QUIZ_DURATION_SECONDS);
