const express = require("express");

const app = express();

const products = [
  [
    "JVC 32 Inch HD LED TV",
    "Rs 24,228",
    "https://www.wow.lk/wowdocroot//content/1.3/images/2016/golive/wow-Store/images/jvc-new01-new03/01-190x190.jpg"
  ],
  [
    "JBL GO 2",
    "Rs 6,990",
    "https://www.wow.lk/wowdocroot/content/1.3/images/2016/golive/John-Keells-Office-Automation-Pvt-Ltd/images/jblrov05/01-190x190.jpg"
  ],
  [
    "SAMSUNG Single Door With Smart Digital",
    "Rs 52,990",
    "https://www.wow.lk/wowdocroot/content/1.3/images/2016/golive/Samsung/images/sam22ksingle/01-190x190.jpg"
  ],
  [
    "Godrej Fully Automatic Top Loading 6.2",
    "Rs 35,990",
    "https://www.wow.lk/wowdocroot/content/1.3/images/2016/golive/wow-Store/images/godrijim01/01-190x190.jpg"
  ],
  [
    "Play 3 (White)",
    "Rs 106,329",
    "https://www.wow.lk/wowdocroot//content/1.3/images/2016/golive/Jat-Technologies/images/sons04/01-190x190.jpg"
  ],
  [
    "Turbosound TPX 122M Passive Speaker",
    "Rs 69,000",
    "https://www.wow.lk/wowdocroot/content/1.3/images/2016/golive/Jat-Tecnologies/images/tpx122mpassive/01-190x190.jpg"
  ],
  [
    "LG Home Theater  LG-LHD427",
    "Rs 23,990",
    "https://www.wow.lk/wowdocroot//content/1.3/images/2016/golive/Browns-Deals/images/ygfuyg03/01-190x190.jpg"
  ],
  [
    "Promate Rustic 2 Mini Speaker",
    "Rs 7,990",
    "https://www.wow.lk/wowdocroot/content/1.3/images/2016/golive/Promate/images/rustic04/01-190x190.jpg"
  ]
].map(([name, price, imageUrl]) => ({ name, price, imageUrl }));

app.get("*", (_, res) => res.send(products));

app.listen(8000, () => console.log(`Server listening at 8000....`));
