const NewReducers = (oldState = { newList: [] }, Action) => {
  let NewState = { ...oldState };
  switch (Action.type) {
    case "Newlist":
      NewState.newList = Action.newList;
      return NewState;
    default:
      return oldState;
  }
};

export default NewReducers;
