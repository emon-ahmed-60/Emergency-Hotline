document.getElementById("cartContainer").addEventListener("click", (e) => {
  if (e.target.className.includes("heart-icon")) {
    let heart = document.getElementById("heart").innerText;
    heart++;
    return (document.getElementById("heart").innerText = heart);
  }

  if (e.target.className.includes("call-btn")) {
    let coin = document.getElementById("call-coin").innerText;
    if (coin < 20) {
      return alert("coin is not enough for calling");
    }
    coin -= 20;
    const callBtn = e.target;
    const serviceName = callBtn.parentNode.parentNode.children[1].innerText;
    const serviceNumber = callBtn.parentNode.parentNode.children[3].innerText;
    alert(serviceName + "\n" + serviceNumber);
    const div = document.createElement("div");
    div.innerHTML = `
       <div class="example rounded-lg bg-[#fafafa] p-4 flex justify-between items-center gap-4 mb-2">
                <div>
                    <h1 class="font-semibold text-lg">${serviceName}</h1>
                    <p class="text-lg text-[#5c5c5c]">${serviceNumber}</p>
                </div>
                <p class="text-[#111111] text-lg">${new Date().toLocaleTimeString()}</p>
          </div>
       `;
    document.getElementById("call-history").append(div);

    return (document.getElementById("call-coin").innerText = coin);
  } else if (e.target.className.includes("fa-phone")) {
    let coin = document.getElementById("call-coin").innerText;
    if (coin < 20) {
      return alert("coin is not enough for calling");
    }
    coin -= 20;
    const callBtn = e.target;
    const serviceName =
      callBtn.parentNode.parentNode.parentNode.children[1].innerText;
    const serviceNumber =
      callBtn.parentNode.parentNode.parentNode.children[3].innerText;
    alert(serviceName + "\n" + serviceNumber);
    const div = document.createElement("div");
    div.innerHTML = `
       <div class="example rounded-lg bg-[#fafafa] p-4 flex justify-between items-center gap-4 mb-2">
                <div>
                    <h1 class="font-semibold text-lg">${serviceName}</h1>
                    <p class="text-lg text-[#5c5c5c]">${serviceNumber}</p>
                </div>
                <p class="text-[#111111] text-lg">${new Date().toLocaleTimeString()}</p>
          </div>
       `;
    document.getElementById("call-history").append(div);
    return (document.getElementById("call-coin").innerText = coin);
  }
});

document.getElementById("clear-btn").addEventListener("click", () => {
  document.getElementById("call-history").innerHTML = "";
});

const copyBtns = document.getElementsByClassName("copy-btn");

for (const btn of copyBtns) {
  btn.addEventListener("click", () => {
    const number = btn.parentNode.parentNode.children[3].innerText;
    alert(number + " number is copied");
    navigator.clipboard.writeText(number);
    let copyCount = document.getElementById("copy-count").innerText;
    copyCount++;
    document.getElementById("copy-count").innerText = copyCount;
  });
}
