console.log("main.js 読み込まれた");
fetch("/records")
  .then(res => {
    console.log("res:", res);
    return res.json();
  })
  .then(data => {
    console.log("data:", data);

    const list = document.getElementById("record-list");
    data.forEach(record => {
      const li = document.createElement("li");
      li.textContent = `${record.title} - ${record.artist}`;
      list.appendChild(li);
    });
  });
