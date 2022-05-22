const date = new Date();

const calendar = {
  year: date.getFullYear(),
  month: String(date.getMonth() + 1),
  day: String(date.getDate()),
  hour: String(date.getHours()),
  minute: String(date.getMinutes()),
  second: String(date.getSeconds()),
};

function Body({ calendar }) {
  return (
    <body>
      {calendar.year}/
      {calendar.month.length != 2
        ? calendar.month.padStart(2, "0")
        : calendar.month}
      /{calendar.day.length != 2 ? calendar.day.padStart(2, "0") : calendar.day}{" "}
      {calendar.hour.length != 2
        ? calendar.hour.padStart(2, "0")
        : calendar.hour}
      :
      {calendar.minute.length != 2
        ? calendar.minute.padStart(2, "0")
        : calendar.minute}
      :
      {calendar.second.length != 2
        ? calendar.second.padStart(2, "0")
        : calendar.second}
    </body>
  );
}

export default Body; // app에서 가져오고 싶어서 꼭 적어준다.
