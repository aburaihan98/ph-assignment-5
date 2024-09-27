function btnFun(value) {
  const inputBtn = parseFloat(
    document.getElementById(`input-btn${value}`).value
  );
  let modalBox = document.getElementById("modal-box");
  const donation = `
  <div>
    <h3 class="text-3xl font-extrabold">Congrates!</h3>
    <div>
    <img class="m-auto mt-5" src="./assets/coin.png" alt="coin" />
    </div>
    <p class="py-4">You Have Donated for Humankind</p>
    <p class="text-xl font-extrabold">Successfully</p>
     <div class="modal-action flex justify-center">
          <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn">close confirmation</button>
          </form>
     </div>
  </div>
  `;
  const error = `
    <div>
    <p class="text-3xl"> please Donate correctly !</p>
    <div>
    <img class="m-auto mt-5" src="./assets/coin.png" alt="coin" />
    </div>
     <div class="modal-action flex justify-center">
          <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn">close confirmation</button>
          </form>
     </div>
    </div>
  `;
  if (inputBtn > 0) {
    modalBox.innerHTML = donation;

    let donationBtn = document.getElementById(`donation-btn${value}`).innerText;
    const title = document.getElementById(`title${value}`).innerText;
    let reserveAmount = document.getElementById("reserve-amount").innerText;
    const date = Date();

    const totalNumber = parseFloat(donationBtn) + parseFloat(inputBtn);
    document.getElementById(`donation-btn${value}`).innerText = totalNumber;

    const totalReserveAmount = parseFloat(reserveAmount) - totalNumber;
    document.getElementById("reserve-amount").innerText = totalReserveAmount;

    const history = `
   <div class="p-8 border rounded-2xl">
        <p class="mb-4">${inputBtn} Taka is ${title}</p>
        <p>${date}</p>
    </div> `;

    const historyMain = document.getElementById("history-main");
    historyMain.innerHTML += history;
    document.getElementById(`input-btn${value}`).value = "";
  } else {
    modalBox.innerHTML = error;
    document.getElementById(`input-btn${value}`).value = "";
  }
}
