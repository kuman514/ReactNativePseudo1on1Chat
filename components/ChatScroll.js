const components = {
  scrollViewRef: null
};

export function setRef(ref) {
  components.scrollViewRef = ref;
}

export function scrollToTheEnd() {
  if (components.scrollViewRef) {
    components.scrollViewRef.scrollToEnd({
      animated: true
    });
  }
}
