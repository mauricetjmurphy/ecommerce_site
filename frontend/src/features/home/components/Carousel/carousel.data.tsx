import { Button } from "@mui/material";

import image_1_lg from "../../../../assets/images/home/hero_image_1-large.jpg";
import image_1_md from "../../../../assets/images/home/hero_image_1-medium.jpg";
import image_1_sm from "../../../../assets/images/home/hero_image_1-small.jpg";
import image_1_xl from "../../../../assets/images/home/hero_image_1-xl.jpg";
import image_2_lg from "../../../../assets/images/home/hero_image_2-large.jpg";
import image_2_md from "../../../../assets/images/home/hero_image_2-medium.jpg";
import image_2_sm from "../../../../assets/images/home/hero_image_2-small.jpg";
import image_2_xl from "../../../../assets/images/home/hero_image_2-xl.jpg";
import image_3_lg from "../../../../assets/images/home/hero_image_3-large.png";
import image_3_md from "../../../../assets/images/home/hero_image_3-medium.png";
import image_3_sm from "../../../../assets/images/home/hero_image_3-small.png";
import image_3_xl from "../../../../assets/images/home/hero_image_3-xl.png";
import image_4_lg from "../../../../assets/images/home/hero_image_4-large.jpg";
import image_4_md from "../../../../assets/images/home/hero_image_4-medium.jpg";
import image_4_sm from "../../../../assets/images/home/hero_image_4-small.jpg";
import image_4_xl from "../../../../assets/images/home/hero_image_4-xl.jpg";
import image_5_lg from "../../../../assets/images/home/hero_image_5-large.jpg";
import image_5_md from "../../../../assets/images/home/hero_image_5-medium.jpg";
import image_5_sm from "../../../../assets/images/home/hero_image_5-small.jpg";
import image_5_xl from "../../../../assets/images/home/hero_image_5-xl.jpg";
import image_6_lg from "../../../../assets/images/home/hero_image_6-large.jpg";
import image_6_md from "../../../../assets/images/home/hero_image_6-medium.jpg";
import image_6_sm from "../../../../assets/images/home/hero_image_6-small.jpg";
import image_6_xl from "../../../../assets/images/home/hero_image_6-xl.jpg";
import { ShopSectionNavigation } from "../ShopSectionNavigation/ShopSectionNavigation";

const btn1Border = "1px solid #e98565";
const btn2Border = "1px solid #fff";
const btnBorderRadius = "calc(41px /2)";

export const slides = [
  {
    images: [
      {
        image_lg: image_1_lg,
        image_md: image_1_md,
        image_sm: image_1_sm,
        image_xl: image_1_xl,
        alt: "",
      },
      {
        image_lg: image_2_lg,
        image_md: image_2_md,
        image_sm: image_2_sm,
        image_xl: image_2_xl,
        alt: "",
      },
    ],
    component: (
      <ShopSectionNavigation
        title={"Timeless style"}
        titleFontSize={"28px"}
        body={
          "Soft, warm and comfortable, our jackets work equally as a top layer or middle layer during colder weather. A versatile classic."
        }
        bodyFontSize={"14px"}
        aligned={"left"}
        bottomPosition={"100px"}
      >
        <Button
          sx={{
            borderRadius: btnBorderRadius,
            fontSize: "12px",
            color: "#fff",
            border: btn1Border,
            background: "#e98565",
            padding: "9px 30px",
          }}
          variant="outlined"
          disableRipple
        >
          {"Shop men's"}
        </Button>
        <Button
          sx={{
            borderRadius: btnBorderRadius,
            fontSize: "12px",
            color: "#fff",
            border: btn2Border,
            padding: "9px 30px",
          }}
          variant="outlined"
          disableRipple
        >
          {"Shop sale"}
        </Button>
      </ShopSectionNavigation>
    ),
  },
  {
    images: [
      {
        image_lg: image_3_lg,
        image_md: image_3_md,
        image_sm: image_3_sm,
        image_xl: image_3_xl,
        alt: "",
      },
      {
        image_lg: image_4_lg,
        image_md: image_4_md,
        image_sm: image_4_sm,
        image_xl: image_4_xl,
        alt: "",
      },
    ],
    component: (
      <ShopSectionNavigation
        title={"More care"}
        titleFontSize={"28px"}
        body={
          "Natural fibers, employing less wasteful materials and conserving water and energy means a smaller environmental impact."
        }
        bodyFontSize={"14px"}
        aligned={"center"}
        bottomPosition={"250px"}
      >
        <Button
          sx={{
            borderRadius: btnBorderRadius,
            fontSize: "12px",
            color: "#fff",
            border: btn1Border,
            background: "#e98565",
            padding: "9px 30px",
          }}
          variant="outlined"
          disableRipple
        >
          {"Shop shirts"}
        </Button>
        <Button
          sx={{
            borderRadius: btnBorderRadius,
            fontSize: "12px",
            color: "#fff",
            border: btn2Border,
            padding: "9px 30px",
          }}
          variant="outlined"
          disableRipple
        >
          {"Shop pants"}
        </Button>
      </ShopSectionNavigation>
    ),
  },
  {
    images: [
      {
        image_lg: image_5_lg,
        image_md: image_5_md,
        image_sm: image_5_sm,
        image_xl: image_5_xl,
        alt: "",
      },
      {
        image_lg: image_6_lg,
        image_md: image_6_md,
        image_sm: image_6_sm,
        image_xl: image_6_xl,
        alt: "",
      },
    ],
    component: (
      <ShopSectionNavigation
        title={"Less but better"}
        titleFontSize={"28px"}
        body={
          "We’re continually pushing to reduce our footprint by choosing recycled or natural fibres and non-toxic natural dye processes."
        }
        bodyFontSize={"14px"}
        aligned={"right"}
        bottomPosition={"100px"}
      >
        <Button
          sx={{
            borderRadius: btnBorderRadius,
            fontSize: "12px",
            color: "#fff",
            border: btn1Border,
            background: "#e98565",
            padding: "9px 30px",
          }}
          variant="outlined"
          disableRipple
        >
          {"See more"}
        </Button>
        <Button
          sx={{
            borderRadius: btnBorderRadius,
            fontSize: "12px",
            color: "#fff",
            border: btn2Border,
            padding: "9px 30px",
          }}
          variant="outlined"
          disableRipple
        >
          {"On sale"}
        </Button>
      </ShopSectionNavigation>
    ),
  },
];
