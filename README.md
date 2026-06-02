1. you actually can split text like this via [splitType] from prop! function TitleAnimation({
  typeOfSplit = "words",
  children,
  scrollEnabled = false,
}) {
  const titleRef = useRef(null);

  useGSAP(() => {
    const splittedTitle = new SplitText(titleRef.current, {
      type: typeOfSplit,
    });

    gsap.from(splittedTitle[typeOfSplit], {
