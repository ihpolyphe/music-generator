var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Netlify!",
    seen: true,
    todos: [
      { text: "do dualingo for studying English" },
      { text: "do mikan" },
      { text: "do TED" },
    ],
  },
});

app.message = "I start to study Netrify";
app.seen = false;
app.todos.push({ text: "Read book of vocabulary" });
