function contentsReducer(state, action) {
  if (state === undefined) {
    return {
      contents: [
        { id: 1, title: "HTML", dec: "HTML is..." },
        { id: 2, title: "CSS", dec: "CSS is..." },
      ],
    }
  }
}

export default contentsReducer
