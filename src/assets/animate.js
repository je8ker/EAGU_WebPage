import anime from "animejs";

export function logoAnimation(element) {
  anime({
    targets: element,
    // strokeDashoffset 속성 값으로 from to 배열 [from, to]를 설정
    // from 값으로 anime.setDashoffset을, to 값으로 0을 설정
    strokeDashoffset: [ anime.setDashoffset, 0 ],
    easing: 'easeInOutCirc',
    duration: 1000,
    delay: anime.stagger(500),
    direction: 'alternate',
    loop: true
  });
}
  // anime({
  //   targets: element,
  //   strokeDashoffset: [anime.setDashoffset, 0],
  //   easing: "easeInOutSine",
  //   duration: 2000,
  //   delay(el, i) {
  //     return i * 250;
  //   }
  // });
