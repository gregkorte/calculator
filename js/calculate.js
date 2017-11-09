function calculate() {
  if (!!nextOperation) {
    previousResult = nextOperation(previousResult, currentValue());
  } else {
    previousResult = currentValue();
  }
}