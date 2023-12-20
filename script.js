const correctPassword = "02042023"; 
let timerInterval;
const startDate = luxon.DateTime.fromISO("2023-06-10T20:30:00");

function authenticate() {
  const passwordInput = document.getElementById("passwordInput").value;
  if (passwordInput === correctPassword) {
    const loginContainer = document.getElementById("login");
    const timerDiv = document.getElementById("timer");

    if (loginContainer && timerDiv) {
      loginContainer.style.display = "none";
      timerDiv.style.display = "block";
      startTimer();
      updateTimer();
    }
  } else {
    alert("Senha errada meu bebê!");
  }
}

function dica() {
  alert("A senha é o dia do nosso primeiro beijo... (dia, mês, ano) sem espaço, ex: 17102003")
}

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  const currentTime = luxon.DateTime.now();
  const elapsedTime = currentTime.diff(startDate, ['years', 'months', 'days', 'hours', 'minutes', 'seconds']).toObject();

  const secondsRounded = (elapsedTime.seconds || 0).toFixed(0); // Round to two decimal places

  const timerDisplay = document.getElementById("timerDisplay");
  timerDisplay.innerHTML = `Tempo desde o dia mais feliz da minha vida: ${elapsedTime.years || 0} ano(s), ${elapsedTime.months || 0} mês(meses), ${elapsedTime.days || 0} dia(s), ${elapsedTime.hours || 0} hora(s), ${elapsedTime.minutes || 0} minuto(s), e ${secondsRounded || 0} segundo(s)`;
}
