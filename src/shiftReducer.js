export const INITIALSTATE = {
  settings: {
    shiftColors: [
      {
        shift: "A",
        color: "#fff00f",
      },
      {
        shift: "B",
        color: "#87cefa",
      },
      {
        shift: "C",
        color: "#ffb6c1",
      },
      {
        shift: "D",
        color: "#008000",
      },
      {
        shift: "E",
        color: "#008000",
      },
      {
        shift: "",
        color: "whitesmoke",
      },
    ],
  },
};
export const shiftReducer = (state, action) => {
  switch (action.type) {
    case "updateData":
      const { msg } = action.payload;
      return {
        ...state,
        schedule: state.schedule.map((item) => {
          //if (item.day === day) {
          //   return {...item, shift}
          // }
          return { ...item, msg };
        }),
      };
    default:
      return state;
  }
};
