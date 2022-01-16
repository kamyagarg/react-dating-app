import LedgendItem from "./LedgendItem";

const ledgendItems = [
  new LedgendItem(
    "200 +",
    "#741f1f",
    (cases) => cases >= 201,
    "white"
  ),
  new LedgendItem(
    "151 - 200",
    "#9c2929",
    (cases) => cases >= 151 && cases <= 200,
    "white"
  ),
  new LedgendItem(
    "101 - 150",
    "#c57f7f",
    (cases) => cases >= 101 && cases <= 150,
    "white"
  ),
  new LedgendItem(
    "100",
    "#d8aaaa",
    (cases) => cases <= 100,
    "white"
  ),
  new LedgendItem(
    "No Data",
    "#fff",
    (cases) => true)
];

export default ledgendItems;