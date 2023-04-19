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
        shift: "",
        color: "whitesmoke",
      },
    ],
  },
  schedule: [
    {
      name: "Mikko Tirronen",
      shifts: [
        {
          week: 1,
          data: [
            { day: "monday", shift: "A" },
            { day: "tuesday", shift: "B" },
            { day: "wednesday", shift: "C" },
            { day: "thursday", shift: "D" },
            { day: "friday", shift: "A" },
            { day: "saturday", shift: "" },
            { day: "sunday", shift: "" },
          ],
          lastChanged: "2023-04-07",
        },
      ],
    },
  ],
};
   export const shiftReducer = (state, action) => {
        switch (action.type) {
            case "CHANGEDATA":
                return {
                    ...state,
                    shift: action.payload,
                };
            default:
                return state;
        }
    };
