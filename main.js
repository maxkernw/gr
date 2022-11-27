let started = false;
document.onclick = () => {
  if (!started) {
    started = true;
    new Audio("pitch.mp3", { loop: true }).play({
        onComplete: e => console.log(e)
    })
  }
};
